import { Integration, IntegrationCategory } from '../types';

export const backupAndRecoveryIntegrations: Integration[] = [
  {
    id: "aws-backup",
    name: "AWS Backup",
    category: IntegrationCategory.BACKUP_AND_RECOVERY,
    documentationUrl: "https://docs.aws.amazon.com/aws-backup/latest/devguide/doc-history.html",
    lastUpdated: "",
    description: "Control-M integration with AWS Backup for automated backups",
    logoKey: "Save",
    updateInfo: "",
    developer: "Stanislav Ashkenazi",
    githubUrl: "https://github.com/BMCDBA/aws_backup",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_Backup.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/aws-backup/latest/devguide/api-reference.html"
  },
  {
    id: "aws-datasync",
    name: "AWS DataSync",
    category: IntegrationCategory.BACKUP_AND_RECOVERY,
    documentationUrl: "https://docs.aws.amazon.com/datasync/latest/userguide/doc-history.html",
    lastUpdated: "",
    description: "Control-M integration with AWS DataSync for data transfer",
    logoKey: "RefreshCw",
    updateInfo: "",
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/aws_datasync",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_DataSync.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/datasync/latest/userguide/API_Reference.html"
  },
  {
    id: "azure-backup",
    name: "Azure Backup",
    category: IntegrationCategory.BACKUP_AND_RECOVERY,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/backup/whats-new",
    lastUpdated: "",
    description: "Control-M integration with Azure Backup for cloud backup and recovery.",
    logoKey: "Save",
    updateInfo: "", // Dynamically updated from backend
    developer: "Stanislav Ashkenazi",
    githubUrl: "https://github.com/BMCDBA/azure_backup",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_Backup.htm",
    apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/backup/'
  }
];
