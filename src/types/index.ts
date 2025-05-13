export interface Integration {
  id: string;
  name: string;
  category: IntegrationCategory;
  documentationUrl: string;
  lastUpdated: string; // ISO date string
  description?: string;
  logoKey?: string; // Key for Lucide icon
  updateInfo?: string; // Information about the last update
  notes?: string; // Developer notes for the integration
  developer: string; // Developer responsible for the integration
  githubUrl?: string; // GitHub repository URL
  controlmDocUrl?: string; // Control-M documentation URL
}

export enum IntegrationCategory {
  AWS = "AWS",
  AZURE = "Azure",
  GCP = "GCP",
  DATA_INTEGRATION = "Data Integration",
  WORKFLOW_AUTOMATION = "Workflow Automation",
  ANALYTICS = "Analytics",
  COMMUNICATION = "Communication",
  INFRASTRUCTURE = "Infrastructure",
  OCI = "Oracle Cloud",
  IBM = "IBM",
  MISC = "Miscellaneous",
}

export interface CategoryCount {
  category: IntegrationCategory;
  count: number;
}