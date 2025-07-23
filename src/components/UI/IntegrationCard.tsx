import React, { useState, useEffect } from 'react';
import { Integration } from '../../types';
import { timeAgo } from '../../utils/dateUtils';
import { useNavigate } from 'react-router-dom';
import { Edit2, Save, X, Tag, User, BookOpen, Github, FileText } from 'lucide-react';
import * as Icons from 'lucide-react';

interface IntegrationCardProps {
  integration: Integration;
  onUpdateNotes?: (id: string, notes: string) => void;
}

const NOTES_STORAGE_KEY = 'integration_notes_v1';
const SEARCH_STORAGE_KEY = 'integration_search_v1';

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

// Service logo mapping
const getServiceLogo = (integrationId: string): string => {
  const logoMap: Record<string, string> = {
    // AWS Services
    'aws-app-runner': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-backup': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-athena': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-step-function': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-ec2': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-ecs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-appflow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-sns': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-sqs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-sagemaker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-glue': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-glue-databrew': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-lambda': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-emr': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-redshift': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-dynamodb': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-datasync': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-batch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-cloudformation': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-data-pipeline': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-m2': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-mwaa': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-quicksight': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'aws-database-migration-service': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    
    // Azure Services
    'azure-data-factory': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'azure-backup': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'azure-batch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'azure-container-instances': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'azure-devops': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'azure-functions': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'azure-hdinsight': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'azure-logic-apps': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'azure-machine-learning': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'azure-resource-management': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'azure-service-bus': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'azure-synapse': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'azure-vm': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'azure-databricks': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    
    // GCP Services
    'gcp-vm': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'gcp-functions': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'gcp-cloud-run': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'gcp-workflows': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'gcp-composer': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'gcp-batch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'gcp-bigquery': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'gcp-dataflow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'gcp-dataplex': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'gcp-dataprep': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'gcp-dataproc': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'gcp-data-fusion': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'gcp-deployment-manager': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    
    // Oracle Cloud
    'oracle-cloud-vm': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
    'oracle-cloud-data-integration': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
    'oracle-cloud-data-flow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
    'oracle-cloud-data-science': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
    
    // Other Services
    'jenkins': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
    'docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    'terraform': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
    'ansible-awx': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg',
    'rabbitmq': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/rabbitmq.svg',
    'snowflake': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/snowflake.svg',
    'snowflake-idp': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/snowflake.svg',
    'tableau': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tableau.svg',
    'microsoft-power-bi': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/powerbi.svg',
    'microsoft-power-bi-sp': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/powerbi.svg',
    'qlik-cloud': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/qlik.svg',
    'airflow': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apacheairflow.svg',
    'astronomer': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/astronomer.svg',
    'fivetran': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/fivetran.svg',
    'airbyte': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/airbyte.svg',
    'dbt': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/dbt.svg',
    'informatica-cs': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/informatica.svg',
    'talend-data-management': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/talend.svg',
    'talend': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/talend.svg',
    'uipath': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/uipath.svg',
    'automation-anywhere': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/automationanywhere.svg',
    'datadog': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/datadog.svg',
    'pagerduty': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/pagerduty.svg',
    'veritas-netbackup': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/veritas.svg',
    'rubrik': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/rubrik.svg',
    'veeam-backup': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/veeam.svg',
    'vmware': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/vmware.svg',
    'sap-btp-scheduler': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/sap.svg',
    'micro-focus-windows': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microfocus.svg',
    'micro-focus-linux': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microfocus.svg',
    'web-services-rest': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/swagger.svg',
    'web-services-soap': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/soap.svg',
    'communication-suite': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/microsoftteams.svg',
    'matillion': 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/matillion.svg'
  };
  
  return logoMap[integrationId] || 'https://via.placeholder.com/64x64?text=?';
};

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

  const handleClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on the notes section
    if ((e.target as HTMLElement).closest('.notes-section')) {
      return;
    }
    navigate(`/integration/${integration.id}`);
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
          <img 
            src={getServiceLogo(integration.id)} 
            alt={integration.name}
            className="h-8 w-8 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/32x32?text=?';
            }}
          />
        </div>
        <span className="text-xs px-2 py-1 rounded-full font-medium bg-blue-100 text-blue-800">
          Updated {timeAgo(integration.lastUpdated)}
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
      </div>
    </div>
  );
};

export default IntegrationCard;