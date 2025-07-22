import { Integration, IntegrationCategory } from '../types';

export const backupAndRecoveryIntegrations: Integration[] = [
  {
    id: "veritas-netbackup",
    name: "Veritas NetBackup",
    category: IntegrationCategory.BACKUP_AND_RECOVERY,
    documentationUrl: "https://www.veritas.com/support/en_US/article.100038989",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-veritas-netbackup-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-veritas-netbackup-integration",
    lastUpdated: "2025-03-01",
    popularity: 3,
    description: "Control-M integration with Veritas NetBackup for enterprise backup and recovery.",
    logoKey: "Save",
    updateInfo: "", // Dynamically updated from backend
    developer: "Gilad Zehavi",
    apiDocumentationUrl: "https://www.veritas.com/content/support/en_US/1858.html"
  },
  {
    id: "aws-backup",
    name: "AWS Backup",
    category: IntegrationCategory.BACKUP_AND_RECOVERY,
    documentationUrl: "https://docs.aws.amazon.com/aws-backup/latest/devguide/doc-history.html",
    lastUpdated: "2025-06-01",
    popularity: 2,
    description: "Control-M integration with AWS Backup for automated backups",
    logoKey: "Save",
    updateInfo: "",
    developer: "Stanislav Ashkenazi",
    githubUrl: "https://github.com/BMCDBA/aws_backup",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_Backup.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/aws-backup/latest/devguide/api-reference.html"
  },

  {
    id: "azure-backup",
    name: "Azure Backup",
    category: IntegrationCategory.BACKUP_AND_RECOVERY,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/backup/whats-new",
    lastUpdated: "2025-05-01",
    popularity: 3,
    description: "Control-M integration with Azure Backup for cloud backup and recovery.",
    logoKey: "Save",
    updateInfo: "", // Dynamically updated from backend
    developer: "Stanislav Ashkenazi",
    githubUrl: "https://github.com/BMCDBA/azure_backup",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_Backup.htm",
    apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/backup/'
  },
  {
    id: "rubrik",
    name: "Rubrik",
    category: IntegrationCategory.BACKUP_AND_RECOVERY,
    documentationUrl: "",
    lastUpdated: "2025-05-01",
    popularity: 4,
    description: "Rubrik backup and recovery integration.",
    developer: "",
  },
  {
    id: "veeam-backup",
    name: "Veeam Backup",
    category: IntegrationCategory.BACKUP_AND_RECOVERY,
    documentationUrl: "",
    lastUpdated: "",
    description: "Veeam Backup and Replication integration.",
    developer: "",
  },
];
