import { Integration, IntegrationCategory } from '../types';


export const businessIntelligenceAndAnalyticsIntegrations: Integration[] = [
  {
    id: "microsoft-power-bi",
    name: "Microsoft Power BI",
    category: IntegrationCategory.BUSINESS_INTELLIGENCE_AND_ANALYTICS,
    documentationUrl: "https://docs.microsoft.com/en-us/power-bi/",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-microsoft-power-bi-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-microsoft-power-bi-integration",
    lastUpdated: "",
    description: "Control-M integration with Microsoft Power BI for business analytics.",
    logoKey: "BarChart",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    apiDocumentationUrl: "https://learn.microsoft.com/en-us/power-bi/developer/"
  },
  {
    id: "qlik-cloud",
    name: "Qlik Cloud",
    category: IntegrationCategory.BUSINESS_INTELLIGENCE_AND_ANALYTICS,
    documentationUrl: "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/Introduction/qlik-cloud-intro.htm",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-qlik-cloud-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-qlik-cloud-integration",
    lastUpdated: "",
    description: "Control-M integration with Qlik Cloud for analytics and business intelligence.",
    logoKey: "BarChart",
    updateInfo: "", // Dynamically updated from backend
    developer: "Guy Shavit",
    apiDocumentationUrl: "https://qlik.dev/"
  },
  {
    id: "microsoft-power-bi-sp",
    name: "Microsoft Power BI SP",
    category: IntegrationCategory.BUSINESS_INTELLIGENCE_AND_ANALYTICS,
    documentationUrl: "",
    lastUpdated: "",
    description: "Microsoft Power BI Service Principal integration.",
    developer: "",
  },
  {
    id: "snowflake-idp",
    name: "Snowflake IdP",
    category: IntegrationCategory.DATA_PROCESSING_AND_ANALYTICS,
    documentationUrl: "",
    lastUpdated: "",
    description: "Snowflake Identity Provider integration.",
    developer: "",
  },
  {
    id: "tableau",
    name: "Tableau",
    category: IntegrationCategory.BUSINESS_INTELLIGENCE_AND_ANALYTICS,
    documentationUrl: "https://help.tableau.com/current/guides/everybody-install/en-us/everybody_install_overview.htm",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-tableau-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-tableau-integration",
    lastUpdated: "",
    description: "Control-M integration with Tableau for data visualization.",
    logoKey: "BarChart",
    updateInfo: "", // Dynamically updated from backend
    developer: "Stanislav Ashkenazi",
    apiDocumentationUrl: "https://help.tableau.com/current/api/"
  },
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
