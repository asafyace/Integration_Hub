import { Integration, IntegrationCategory } from '../types';

export const backupAndRecoveryIntegrations: Integration[] = [
  {
    id: "veritas-netbackup",
    name: "Veritas NetBackup",
    category: IntegrationCategory.BACKUP_AND_RECOVERY,
    documentationUrl: "https://www.veritas.com",
    lastUpdated: "2025-03-01",
    popularity: 3,
    description: "Control-M integration with Veritas NetBackup for enterprise backup and recovery.",
    updateInfo: "", // Dynamically updated from backend
    developer: "Gilad Zehavi",
    githubUrl: "https://github.com/BMCDBA/Veritas_NetBackup",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/VMware_By_Broadcom.htm",
    apiDocumentationUrl: "https://www.veritas.com/support/en_US/article.100038989"
  },
  {
    id: "aws-backup",
    name: "AWS Backup",
    category: IntegrationCategory.BACKUP_AND_RECOVERY,
    documentationUrl: "https://aws.amazon.com/backup/",
    lastUpdated: "2023-09-01",
    popularity: 3,
    description: "Control-M integration with AWS Backup for automated backups",
    updateInfo: "",
    developer: "Stanislav Ashkenazi",
    githubUrl: "https://github.com/BMCDBA/aws_backup",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/AWS_Backup.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html"
  },
  {
    id: "azure-backup",
    name: "Azure Backup",
    category: IntegrationCategory.BACKUP_AND_RECOVERY,
    documentationUrl: "https://azure.microsoft.com/en-us/services/backup/",
    lastUpdated: "2023-04-01",
    popularity: 3,
    description: "Control-M integration with Azure Backup for cloud backup and recovery.",
    updateInfo: "", // Dynamically updated from backend
    developer: "Stanislav Ashkenazi",
    githubUrl: "https://github.com/BMCDBA/azure_backup",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Azure_Backup.htm",
    apiDocumentationUrl: "https://learn.microsoft.com/en-us/rest/api/backup/"
  },
  {
    id: "rubrik",
    name: "Rubrik",
    category: IntegrationCategory.BACKUP_AND_RECOVERY,
    documentationUrl: "https://www.rubrik.com",
    lastUpdated: "2025-06-01",
    popularity: 3,
    description: "Rubrik backup and recovery integration.",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/Rubrik",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Rubrik.htm",
    apiDocumentationUrl: "https://developer.rubrik.com/api"
  },
  {
    id: "veeam-backup",
    name: "Veeam Backup",
    category: IntegrationCategory.BACKUP_AND_RECOVERY,
    documentationUrl: "https://www.veeam.com",
    lastUpdated: "2025-05-01",
    popularity: 3,
    description: "Veeam Backup and Replication integration.",
    updateInfo: "", // Dynamically updated from backend
    developer: "Gilad Zehavi",
    githubUrl: "https://github.com/BMCDBA/Veeam_Backup",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Veritas_NetBackup.htm",
    apiDocumentationUrl: "https://helpcenter.veeam.com/docs/backup/rest/overview.html"
  },
];
