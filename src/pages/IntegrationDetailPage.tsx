import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../components/Layout/MainLayout';
import { getIntegrationById } from '../data/integrations';
import { Integration } from '../types';
import { formatDate, timeAgo } from '../utils/dateUtils';
import UpdateStatusBadge from '../components/UI/UpdateStatusBadge';
import { ExternalLink, ArrowLeft, Clock, FileText, Tag, Calendar } from 'lucide-react';
import * as Icons from 'lucide-react';

const IntegrationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [integration, setIntegration] = useState<Integration | null>(null);
  const [loading, setLoading] = useState(true);
  const [updateInfo, setUpdateInfo] = useState<{ lastUpdated: string; updateInfo: string } | null>(null);

  useEffect(() => {
    const fetchUpdateInfo = async () => {
      try {
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
        // Azure endpoints for dynamic update info
        const azureEndpoints: Record<string, string> = {
          "azure-data-factory": "/api/azure-data-factory/latest-update"
        };
        if (id && id in awsEndpoints) {
          const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
          const endpoint = `${API_BASE}${awsEndpoints[id]}`;
          const response = await fetch(endpoint);
          if (response.ok) {
            const data = await response.json();
            setUpdateInfo({
              lastUpdated: data.lastUpdated,
              updateInfo: data.updateInfo
            });
            setIntegration(prev => prev ? { ...prev, lastUpdated: data.lastUpdated, updateInfo: data.updateInfo } : prev);
          }
        } else if (id && id in azureEndpoints) {
          const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
          const endpoint = `${API_BASE}${azureEndpoints[id]}`;
          const response = await fetch(endpoint);
          if (response.ok) {
            const data = await response.json();
            setUpdateInfo({
              lastUpdated: data.lastUpdated,
              updateInfo: data.updateInfo
            });
            setIntegration(prev => prev ? { ...prev, lastUpdated: data.lastUpdated, updateInfo: data.updateInfo } : prev);
          }
        } else if (id) {
          const response = await fetch(`/api/updates/${id}`);
          if (response.ok) {
            const data = await response.json();
            setUpdateInfo({
              lastUpdated: data.releaseDate,
              updateInfo: data.summary
            });
          }
        }
      } catch (error) {
        console.error('Failed to fetch update info:', error);
      }
    };

    if (id) {
      setLoading(true);
      const foundIntegration = getIntegrationById(id);
      setIntegration(foundIntegration || null);
      if (foundIntegration) {
        fetchUpdateInfo();
      }
      setLoading(false);
    }
  }, [id]);

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

  const Icon = integration.logoKey && typeof Icons[integration.logoKey as keyof typeof Icons] === 'function'
    ? (Icons[integration.logoKey as keyof typeof Icons] as React.ElementType)
    : Icons.Box;

  const displayDate = updateInfo?.lastUpdated || integration.lastUpdated;
  const displayInfo = updateInfo?.updateInfo || integration.updateInfo;

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
                <Icon className="h-10 w-10 text-blue-600" />
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
                  View Release Notes
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
                Update Information
              </h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Last updated on <span className="font-medium">{formatDate(displayDate)}</span>
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">
                    <span className="font-medium">{timeAgo(displayDate)}</span>
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
                    {displayInfo || 'No update information available'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default IntegrationDetailPage;