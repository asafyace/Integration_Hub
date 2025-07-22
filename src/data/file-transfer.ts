import { Integration, IntegrationCategory } from '../types';

export const fileTransferIntegrations: Integration[] = [
  {
    id: "aws-datasync",
    name: "AWS DataSync",
    category: IntegrationCategory.FILE_TRANSFER,
    documentationUrl: "https://aws.amazon.com/datasync/",
    lastUpdated: "2024-10-01",
    popularity: 3,
    description: "Control-M integration with AWS DataSync for data transfer",
    logoKey: "RefreshCw",
    updateInfo: "",
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/AWS_DataSync",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/AWS_DataSync.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/datasync/latest/userguide/API_Operations.html"
  },
];
