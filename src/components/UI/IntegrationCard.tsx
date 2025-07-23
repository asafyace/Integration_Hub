import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { Integration } from '../../types';
import { timeAgo, getUpdateStatus } from '../../utils/dateUtils';
import { useNavigate } from 'react-router-dom';
import { Edit2, Save, X, Tag, Info, User, BookOpen, Github, FileText } from 'lucide-react';

interface IntegrationCardProps {
  integration: Integration;
  onUpdateNotes?: (id: string, notes: string) => void;
}

const NOTES_STORAGE_KEY = 'integration_notes_v1';
const SEARCH_STORAGE_KEY = 'integration_search_v1';
const UPDATE_CACHE_KEY = 'integration_update_cache_v1';
const UPDATE_CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

function loadNotes(): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(NOTES_STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function saveNotes(notes: Record<string, string>) {
  localStorage.setItem(NOTES_STORAGE_KEY, JSON.stringify(notes));
}

function loadSearch() {
  return localStorage.getItem(SEARCH_STORAGE_KEY) || '';
}

function saveSearch(query: string) {
  localStorage.setItem(SEARCH_STORAGE_KEY, query);
}

function loadUpdateCache(id: string) {
  try {
    const raw = localStorage.getItem(UPDATE_CACHE_KEY);
    if (!raw) return null;
    const cache = JSON.parse(raw);
    if (cache[id] && Date.now() - cache[id].timestamp < UPDATE_CACHE_TTL) {
      return cache[id].data;
    }
    return null;
  } catch {
    return null;
  }
}
function saveUpdateCache(id: string, data: { lastUpdated: string; updateInfo: string }) {
  let cache: Record<string, { timestamp: number; data: { lastUpdated: string; updateInfo: string } }> = {};
  try {
    cache = JSON.parse(localStorage.getItem(UPDATE_CACHE_KEY) || '{}');
  } catch {}
  cache[id] = { timestamp: Date.now(), data };
  localStorage.setItem(UPDATE_CACHE_KEY, JSON.stringify(cache));
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({ 
  integration,
  onUpdateNotes 
}) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [notes, setNotes] = useState(() => {
    const allNotes = loadNotes();
    return allNotes[integration.id] || integration.notes || '';
  });

  // Always keep notes in sync with localStorage, even on navigation or reload
  useEffect(() => {
    const handleStorage = () => {
      if (!isEditing) { // Prevent overwriting notes while editing
        const allNotes = loadNotes();
        setNotes(allNotes[integration.id] || integration.notes || '');
      }
    };
    window.addEventListener('storage', handleStorage);
    // Also poll localStorage every 2 seconds to catch changes from other tabs or navigation
    const interval = setInterval(handleStorage, 2000);
    return () => {
      window.removeEventListener('storage', handleStorage);
      clearInterval(interval);
    };
  }, [integration.id, isEditing]);

  const [showUpdateInfo, setShowUpdateInfo] = useState(false);
  const [dynamicUpdate, setDynamicUpdate] = useState<{ lastUpdated: string; updateInfo: string } | null>(null);

  useEffect(() => {
    // Centralized AWS endpoints map for all supported AWS integrations
    const awsEndpoints: Record<string, string> = {
      "aws-app-runner": "/api/aws-app-runner/latest-update",
      "aws-backup": "/api/aws-backup/latest-update",
      "aws-athena": "/api/aws-athena/latest-update",
      "aws-step-function": "/api/aws-step-functions/latest-update",
      "aws-ec2": "/api/aws-ec2/latest-update",
      "aws-ecs": "/api/aws-ecs/latest-update",
      "aws-appflow": "/api/aws-appflow/latest-update",
      "aws-sns": "/api/aws-sns/latest-update",
      "aws-sqs": "/api/aws-sqs/latest-update",
      "aws-sagemaker": "/api/aws-sagemaker/latest-update",
      "aws-glue": "/api/aws-glue/latest-update",
      "aws-glue-databrew": "/api/aws-glue-databrew/latest-update",
      "aws-lambda": "/api/aws-lambda/latest-update",
      "aws-emr": "/api/aws-emr/latest-update",
      "aws-redshift": "/api/aws-redshift/latest-update",
      "aws-dynamodb": "/api/aws-dynamodb/latest-update",
      "aws-datasync": "/api/aws-datasync/latest-update",
      "aws-batch": "/api/aws-batch/latest-update",
      "aws-cloudformation": "/api/aws-cloudformation/latest-update",
      "aws-data-pipeline": "/api/aws-data-pipeline/latest-update",
      "aws-m2": "/api/aws-m2/latest-update",
      "aws-mwaa": "/api/aws-mwaa/latest-update",
      "aws-quicksight": "/api/aws-quicksight/latest-update"
    };
    const azureEndpoints: Record<string, string> = {
      "azure-data-factory": "/api/azure-data-factory/latest-update"
    };
    if (integration.id in awsEndpoints || integration.id in azureEndpoints) {
      const cached = loadUpdateCache(integration.id);
      if (cached) {
        setDynamicUpdate(cached);
        return;
      }
      const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
      const endpoint = integration.id in awsEndpoints
        ? `${API_BASE}${awsEndpoints[integration.id]}`
        : `${API_BASE}${azureEndpoints[integration.id]}`;
      fetch(endpoint)
        .then(res => res.ok ? res.json() : null)
        .then(data => {
          if (data && data.lastUpdated && data.updateInfo) {
            setDynamicUpdate({ lastUpdated: data.lastUpdated, updateInfo: data.updateInfo });
            saveUpdateCache(integration.id, { lastUpdated: data.lastUpdated, updateInfo: data.updateInfo });
          }
        });
    }
  }, [integration.id]);
  
  // Safely get the icon component with proper type checking
  const getIcon = (logoKey: string | undefined): React.ElementType => {
    if (!logoKey) return Icons.Box;
    const IconComponent = Icons[logoKey as keyof typeof Icons];
    // Only return if it's a valid React component (function or object with $$typeof)
    if (
      typeof IconComponent === 'function' ||
      (typeof IconComponent === 'object' && IconComponent !== null && '$$typeof' in IconComponent)
    ) {
      return IconComponent as React.ElementType;
    }
    return Icons.Box;
  };
  
  const Icon = getIcon(integration.logoKey);
  
  const handleClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on the notes section or update info
    if ((e.target as HTMLElement).closest('.notes-section') || 
        (e.target as HTMLElement).closest('.update-info-section')) {
      return;
    }
    navigate(`/integration/${integration.id}`);
  };
  
  const updateStatus = getUpdateStatus(dynamicUpdate?.lastUpdated || integration.lastUpdated);
  
  const statusColors = {
    recent: 'bg-green-100 text-green-800',
    moderate: 'bg-yellow-100 text-yellow-800',
    outdated: 'bg-red-100 text-red-800'
  };

  const handleSaveNotes = () => {
    const allNotes = loadNotes();
    allNotes[integration.id] = notes;
    saveNotes(allNotes);
    if (onUpdateNotes) {
      onUpdateNotes(integration.id, notes);
    }
    setIsEditing(false);
  };
  useEffect(() => {
    // When integration.id changes, load notes from storage
    const allNotes = loadNotes();
    setNotes(allNotes[integration.id] || integration.notes || '');
  }, [integration.id]);
  
  return (
    <div 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700 flex flex-col h-full relative"
      onClick={handleClick}
    >
      <div className="flex items-start mb-4 justify-between">
        <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <Icon className="h-8 w-8 text-blue-500 dark:text-blue-400" />
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[updateStatus]}`}>
          Updated {timeAgo(dynamicUpdate?.lastUpdated || integration.lastUpdated)}
        </span>
      </div>
      
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{integration.name}</h3>
      
      {integration.description && (
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {integration.description}
        </p>
      )}

      <div className="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
        <User className="h-4 w-4 mr-1" />
        <span>Developer: {integration.developer}</span>
      </div>

      <div className="notes-section mt-2 mb-4 flex-grow" onClick={e => e.stopPropagation()}>
        {isEditing ? (
          <div className="relative">
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2 text-sm border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Add developer notes..."
              rows={3}
            />
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={() => setIsEditing(false)}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
              >
                <X className="h-4 w-4" />
              </button>
              <button
                onClick={handleSaveNotes}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                <Save className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="relative group">
            {notes ? (
              <p className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 p-2 rounded break-words whitespace-pre-wrap">
                {notes}
              </p>
            ) : (
              <p className="text-sm text-gray-400 dark:text-gray-500 italic">No developer notes</p>
            )}
            <button
              onClick={() => setIsEditing(true)}
              className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <Edit2 className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
      
      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
        <span className="inline-flex items-center text-xs font-medium text-gray-500 dark:text-gray-400">
          <Tag className="h-3 w-3 mr-1" />
          {integration.category}
        </span>
        <div className="flex items-center gap-2">
          {/* Documentation link */}
          {integration.documentationUrl && (
            <a
              href={integration.documentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              title="View Website"
              onClick={e => e.stopPropagation()}
            >
              <BookOpen className="h-4 w-4" />
            </a>
          )}
          {/* API Documentation link */}
          {integration.apiDocumentationUrl && (
            <a
              href={integration.apiDocumentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-600 dark:hover:text-orange-400"
              title="View API Documentation"
              onClick={e => e.stopPropagation()}
            >
              <FileText className="h-4 w-4" />
            </a>
          )}
          {/* Control-M documentation icon/link */}
          {integration.controlmDocUrl && (
            <a
              href={integration.controlmDocUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-600 dark:hover:text-green-400"
              title="View Control-M Documentation"
              onClick={e => e.stopPropagation()}
              style={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <Icons.FileSearch className="h-4 w-4" />
            </a>
          )}
          {/* GitHub icon with link */}
          {integration.githubUrl && (
            <a
              href={integration.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              title="View on GitHub"
              onClick={e => e.stopPropagation()}
              style={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
        <div className="update-info-section relative" onClick={e => e.stopPropagation()}>
          <button
            className="flex items-center text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 group"
            onClick={() => setShowUpdateInfo(!showUpdateInfo)}
          >
            <Info className="h-3 w-3 mr-1" />
            View Integration details
          </button>
          
          {showUpdateInfo && (
            <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                Latest Update Information
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {(dynamicUpdate?.updateInfo || integration.updateInfo) || 'No information available'}
              </p>
              <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-700"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IntegrationCard;