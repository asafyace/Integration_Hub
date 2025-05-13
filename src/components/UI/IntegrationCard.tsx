import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { Integration } from '../../types';
import { timeAgo, getUpdateStatus } from '../../utils/dateUtils';
import { useNavigate } from 'react-router-dom';
import { Edit2, Save, X, Tag, Info, User } from 'lucide-react';

interface IntegrationCardProps {
  integration: Integration;
  onUpdateNotes?: (id: string, notes: string) => void;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({ 
  integration,
  onUpdateNotes 
}) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [notes, setNotes] = useState(integration.notes || '');
  const [showUpdateInfo, setShowUpdateInfo] = useState(false);
  const [dynamicUpdate, setDynamicUpdate] = useState<{ lastUpdated: string; updateInfo: string } | null>(null);

  useEffect(() => {
    if (integration.id === 'aws-app-runner' || integration.id === 'aws-backup') {
      const endpoint = integration.id === 'aws-app-runner'
        ? 'http://localhost:4000/api/aws-app-runner/latest-update'
        : 'http://localhost:4000/api/aws-backup/latest-update';
      fetch(endpoint)
        .then(res => res.ok ? res.json() : null)
        .then(data => {
          if (data && data.lastUpdated && data.updateInfo) {
            setDynamicUpdate({ lastUpdated: data.lastUpdated, updateInfo: data.updateInfo });
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
    if (onUpdateNotes) {
      onUpdateNotes(integration.id, notes);
    }
    setIsEditing(false);
  };
  
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
              <p className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 p-2 rounded">
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
        <div className="update-info-section relative" onClick={e => e.stopPropagation()}>
          <button
            className="flex items-center text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 group"
            onClick={() => setShowUpdateInfo(!showUpdateInfo)}
          >
            <Info className="h-3 w-3 mr-1" />
            View update details
          </button>
          
          {showUpdateInfo && (
            <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                Latest Update Information
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {(dynamicUpdate?.updateInfo || integration.updateInfo) || 'No update information available'}
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