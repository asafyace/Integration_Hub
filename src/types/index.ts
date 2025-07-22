export interface Integration {
  id: string;
  name: string;
  category: IntegrationCategory;
  documentationUrl: string;
  lastUpdated: string; // ISO date string
  currentVersion?: string; // Integration version (added)
  description?: string;
  logoKey?: string; // Key for Lucide icon
  updateInfo?: string; // Information about the last update
  notes?: string; // Developer notes for the integration
  developer: string; // Developer responsible for the integration
  githubUrl?: string; // GitHub repository URL
  controlmDocUrl?: string; // Control-M documentation URL
  apiDocumentationUrl?: string; // API documentation URL (added)
  popularity?: number; // Popularity score for sorting (e.g., views or usage count)
}

export enum IntegrationCategory {
  APPLICATION_WORKFLOWS = "Application Workflows",
  BUSINESS_INTELLIGENCE_AND_ANALYTICS = "Business Intelligence and Analytics",
  BACKUP_AND_RECOVERY = "Backup and Recovery",
  CI_CD = "CI/CD",
  CLOUD_COMPUTING = "Cloud Computing",
  CONTAINER_ORCHESTRATION = "Container Orchestration",
  DATA_PROCESSING_AND_ANALYTICS = "Data Processing and Analytics",
  DATA_INTEGRATION = "Data Integration",
  DATABASE_MANAGEMENT = "Database Management",
  ENTERPRISE_RESOURCE_PLANNING = "Enterprise Resource Planning (ERP)",
  FILE_TRANSFER = "File Transfer",
  INFRASTRUCTURE_AS_CODE = "Infrastructure as Code",
  MACHINE_LEARNING = "Machine Learning",
  MAINFRAME_MODERNIZATION = "Mainframe Modernization",
  MESSAGING_AND_COMMUNICATION = "Messaging and Communication",
  MESSAGING_AND_QUEUING = "Messaging and Queuing",
  ROBOTIC_PROCESS_AUTOMATION = "Robotic Process Automation (RPA)",
  WEB_SERVICES_JAVA_AND_MESSAGING = "Web Services, Java, and Messaging",
}

export interface CategoryCount {
  category: IntegrationCategory;
  count: number;
}