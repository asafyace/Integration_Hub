import { Integration, IntegrationCategory } from '../types';


export const businessIntelligenceAndAnalyticsIntegrations: Integration[] = [
  {
    id: "aws-quicksight",
    name: "AWS QuickSight",
    category: IntegrationCategory.BUSINESS_INTELLIGENCE_AND_ANALYTICS,
    documentationUrl: "https://docs.aws.amazon.com/quicksight/latest/user/release-notes.html",
    lastUpdated: "",
    description: "Control-M integration with AWS QuickSight for business analytics",
    logoKey: "BarChart",
    updateInfo: "",
    developer: "Gilad Zehavi",
    githubUrl: "https://github.com/BMCDBA/aws_quicksight",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_QuickSight.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/quicksight/latest/APIReference/Welcome.html"
  },
  {
    id: "azure-synapse",
    name: "Azure Synapse",
    category: IntegrationCategory.BUSINESS_INTELLIGENCE_AND_ANALYTICS,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/synapse-analytics/whats-new",
    lastUpdated: "",
    description: "Control-M integration with Azure Synapse for analytics and data warehousing.",
    logoKey: "BarChart",
    updateInfo: "", // Dynamically updated from backend
    developer: "Keren Surujon",
    githubUrl: "https://github.com/BMCDBA/azure_synapse",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_Synapse.htm",
    apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/synapse/'
  }
];
