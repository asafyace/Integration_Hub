import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../components/Layout/MainLayout';
import { getIntegrationById } from '../data/integrations';
import { Integration } from '../types';
import { formatDate, timeAgo } from '../utils/dateUtils';
import UpdateStatusBadge from '../components/UI/UpdateStatusBadge';
import { ExternalLink, ArrowLeft, Clock, FileText, Tag, Calendar, Edit2, Save, X } from 'lucide-react';
import { getServiceLogo } from '../utils/logoMap';

const NOTES_STORAGE_KEY = 'integration_notes_v1';
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


const IntegrationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [integration, setIntegration] = useState<Integration | null>(null);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      const foundIntegration = getIntegrationById(id);
      setIntegration(foundIntegration || null);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    if (integration) {
      const allNotes = loadNotes();
      setNotes(allNotes[integration.id] || integration.notes || '');
    }
  }, [integration]);

  useEffect(() => {
    const handleStorage = () => {
      if (!isEditing && integration) {
        const allNotes = loadNotes();
        setNotes(allNotes[integration.id] || integration.notes || '');
      }
    };
    window.addEventListener('storage', handleStorage);
    const interval = setInterval(handleStorage, 2000);
    return () => {
      window.removeEventListener('storage', handleStorage);
      clearInterval(interval);
    };
  }, [integration, isEditing]);

  const handleSaveNotes = () => {
    if (!integration) return;
    const allNotes = loadNotes();
    allNotes[integration.id] = notes;
    saveNotes(allNotes);
    setIsEditing(false);
  };

  if (loading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </MainLayout>
    );
  }

  if (!integration) {
    return (
      <MainLayout>
        <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Integration Not Found</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">The integration you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </button>
        </div>
      </MainLayout>
    );
  }

  const displayDate = integration.lastUpdated;

  return (
    <MainLayout>
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center mb-6 text-blue-600 dark:text-blue-400 hover:underline"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to integrations
      </button>

      <div className="bg-white dark:bg-gray-800 shadow-sm rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <div className="p-3 bg-white rounded-lg mr-4">
                <img 
                  src={getServiceLogo(integration.id)} 
                  alt={integration.name}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">{integration.name}</h1>
                <p className="text-blue-100 mt-1">{integration.category}</p>
              </div>
            </div>
            <UpdateStatusBadge lastUpdated={displayDate} size="lg" />
          </div>
        </div>

        <div className="p-8">
          {integration.description && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h2>
              <p className="text-gray-600 dark:text-gray-300">{integration.description}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-blue-500" />
                Important Links
              </h2>
              <div className="flex flex-col gap-3">
                <a 
                  href={integration.documentationUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200"
                >
                  View Website
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
                {integration.apiDocumentationUrl && (
                  <a
                    href={integration.apiDocumentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition-colors duration-200"
                  >
                    API Documentation
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                )}
                {integration.controlmDocUrl && (
                  <a
                    href={integration.controlmDocUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors duration-200"
                  >
                    Control-M Documentation
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                )}
                {integration.githubUrl && (
                  <a
                    href={integration.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-black text-white rounded-md transition-colors duration-200"
                  >
                    GitHub Repository
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                )}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-500" />
                Information
              </h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Released on <span className="font-medium">{formatDate(displayDate)}</span>
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Released <span className="font-medium">{timeAgo(displayDate)}</span>
                  </span>
                </div>
                <div className="flex items-center">
                  <Tag className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Category: <span className="font-medium">{integration.category}</span>
                  </span>
                </div>
                <div className="flex items-start">
                  <FileText className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {integration.description || 'No description available'}
                  </span>
                </div>
              </div>
            </div>

            {/* Developer Notes Section */}
            <div className="bg-gray-50 dark:bg-gray-700/30 p-6 rounded-lg md:col-span-2 mt-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Edit2 className="h-5 w-5 mr-2 text-blue-500" />
                Notes
              </h2>
              <div className="notes-section">
                {isEditing ? (
                  <div className="relative">
                    <textarea
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
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
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default IntegrationDetailPage;