import { Integration, IntegrationCategory } from '../types';

export const databaseManagementIntegrations: Integration[] = [
  {
    id: "aws-database-migration-service",
    name: "AWS Database Migration Service",
    category: IntegrationCategory.DATABASE_MANAGEMENT,
    documentationUrl: "https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html",
    lastUpdated: "",
    description: "Control-M integration with AWS Database Migration Service for seamless database migration.",
    logoKey: "Cloud",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/aws_database_migration_service",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_Database_Migration_Service.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/dms/latest/APIReference/Welcome.html"
  }
];
