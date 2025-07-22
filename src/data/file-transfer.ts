import { Integration, IntegrationCategory } from '../types';

export const fileTransferIntegrations: Integration[] = [
      {
    id: "aws-datasync",
    name: "AWS DataSync",
    category: IntegrationCategory.BACKUP_AND_RECOVERY,
    documentationUrl: "https://docs.aws.amazon.com/datasync/latest/userguide/doc-history.html",
    lastUpdated: "2024-10-01",
    popularity: 3,
    description: "Control-M integration with AWS DataSync for data transfer",
    logoKey: "RefreshCw",
    updateInfo: "",
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/aws_datasync",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_DataSync.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/datasync/latest/userguide/API_Reference.html"
  },
];
