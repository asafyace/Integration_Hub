import { Integration, IntegrationCategory } from '../types';

export const databaseManagementIntegrations: Integration[] = [
  {
    id: "aws-database-migration-service",
    name: "AWS Database Migration Service",
    category: IntegrationCategory.DATABASE_MANAGEMENT,
    documentationUrl: "https://aws.amazon.com/dms/",
    lastUpdated: "2025-06-01",
    popularity: 4,
    description: "Control-M integration with AWS Database Migration Service for seamless database migration.",
    logoKey: "Cloud",
    updateInfo: "", // Dynamically updated from backend
    developer: "Stanislav Ashkenazi",
    githubUrl: "https://github.com/BMCDBA/AWS_Database_Migration_Service",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/AWS_Database_Migration_Service.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/dms/latest/APIReference/"
  }
];
