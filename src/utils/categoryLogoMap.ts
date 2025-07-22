import { IntegrationCategory } from '../types';

export const categoryLogoMap: Record<IntegrationCategory, string> = {
  [IntegrationCategory.APPLICATION_WORKFLOWS]: 'GitBranch',
  [IntegrationCategory.BUSINESS_INTELLIGENCE_AND_ANALYTICS]: 'BarChart',
  [IntegrationCategory.BACKUP_AND_RECOVERY]: 'Save',
  [IntegrationCategory.CI_CD]: 'GitCommit',
  [IntegrationCategory.CLOUD_COMPUTING]: 'Cloud',
  [IntegrationCategory.CONTAINER_ORCHESTRATION]: 'Box',
  [IntegrationCategory.DATA_PROCESSING_AND_ANALYTICS]: 'Database',
  [IntegrationCategory.DATA_INTEGRATION]: 'GitMerge',
  [IntegrationCategory.DATABASE_MANAGEMENT]: 'Server',
  [IntegrationCategory.ENTERPRISE_RESOURCE_PLANNING]: 'Briefcase',
  [IntegrationCategory.FILE_TRANSFER]: 'RefreshCw',
  [IntegrationCategory.INFRASTRUCTURE_AS_CODE]: 'Code2',
  [IntegrationCategory.MACHINE_LEARNING]: 'Brain',
  [IntegrationCategory.MAINFRAME_MODERNIZATION]: 'Monitor',
  [IntegrationCategory.MESSAGING_AND_COMMUNICATION]: 'MessageCircle',
  [IntegrationCategory.MESSAGING_AND_QUEUING]: 'MessageSquare',
  [IntegrationCategory.ROBOTIC_PROCESS_AUTOMATION]: 'Bot',
  [IntegrationCategory.WEB_SERVICES_JAVA_AND_MESSAGING]: 'Globe',
};

export function getCategoryLogo(category: IntegrationCategory): string {
  return categoryLogoMap[category] || 'Circle';
}
