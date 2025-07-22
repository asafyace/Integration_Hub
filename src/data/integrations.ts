import { Integration, IntegrationCategory, CategoryCount } from '../types';
import { backupAndRecoveryIntegrations } from './backup-and-recovery';
import { dataProcessingAndAnalyticsIntegrations } from './data-processing-and-analytics';
import { containerOrchestrationIntegrations } from './container-orchestration';
import { dataIntegrationIntegrations } from './data-integration';
import { ciCdIntegrations } from './ci-cd';
import { applicationWorkflowsIntegrations } from './application-workflows';
import { machineLearningIntegrations } from './machine-learning';
import { infrastructureAsCodeIntegrations } from './infrastructure-as-code';
import { messagingAndQueuingIntegrations } from './messaging-and-queuing';
import { messagingAndCommunicationIntegrations } from './messaging-and-communication';
import { businessIntelligenceAndAnalyticsIntegrations } from './business-intelligence-and-analytics';
import { cloudComputingIntegrations } from './cloud-computing';
import { roboticProcessAutomationIntegrations } from './robotic-process-automation';
import { databaseManagementIntegrations } from './database-management';
import { enterpriseResourcePlanningIntegrations } from './enterprise-resource-planning';
import { fileTransferIntegrations } from './file-transfer';
import { webServicesJavaAndMessagingIntegrations } from './web-services-java-and-messaging';
import { mainframeModernizationIntegrations } from './mainframe-modernization';



// Only non-AWS, non-GCP, non-Azure integrations are kept here
const localIntegrations: Integration[] = [];

export const integrations: Integration[] = [
  ...localIntegrations,
  ...backupAndRecoveryIntegrations,
  ...dataProcessingAndAnalyticsIntegrations,
  ...containerOrchestrationIntegrations,
  ...dataIntegrationIntegrations,
  ...ciCdIntegrations,
  ...applicationWorkflowsIntegrations,
  ...machineLearningIntegrations,
  ...infrastructureAsCodeIntegrations,
  ...messagingAndQueuingIntegrations,
  ...messagingAndCommunicationIntegrations,
  ...businessIntelligenceAndAnalyticsIntegrations,
  ...cloudComputingIntegrations,
  ...roboticProcessAutomationIntegrations,
  ...databaseManagementIntegrations,
  ...enterpriseResourcePlanningIntegrations,
  ...fileTransferIntegrations,
  ...webServicesJavaAndMessagingIntegrations,
  ...mainframeModernizationIntegrations,
];

export const getAllCategories = (): IntegrationCategory[] => {
  return Object.values(IntegrationCategory);
};

export const getCategoryCount = (): CategoryCount[] => {
  const counts: Record<string, number> = {};
  integrations.forEach(integration => {
    if (counts[integration.category]) {
      counts[integration.category]++;
    } else {
      counts[integration.category] = 1;
    }
  });
  return Object.entries(counts).map(([category, count]) => ({
    category: category as IntegrationCategory,
    count
  }));
};

export const getIntegrationsByCategory = (category: IntegrationCategory): Integration[] => {
  return integrations.filter(integration => integration.category === category);
};

export const searchIntegrations = (query: string): Integration[] => {
  const lowerCaseQuery = query.toLowerCase();
  return integrations.filter(integration => 
    integration.name.toLowerCase().includes(lowerCaseQuery) ||
    integration.description?.toLowerCase().includes(lowerCaseQuery) ||
    integration.category.toLowerCase().includes(lowerCaseQuery) ||
    integration.developer.toLowerCase().includes(lowerCaseQuery)
  );
};

export const getIntegrationById = (id: string): Integration | undefined => {
  return integrations.find(integration => integration.id === id);
};

