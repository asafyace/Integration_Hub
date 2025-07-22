import { Integration, IntegrationCategory } from '../types';


export const businessIntelligenceAndAnalyticsIntegrations: Integration[] = [
  {
    id: "microsoft-power-bi",
    name: "Microsoft Power BI",
    category: IntegrationCategory.BUSINESS_INTELLIGENCE_AND_ANALYTICS,
    documentationUrl: "https://powerbi.microsoft.com",
    lastUpdated: "2022-04-01",
    popularity: 5,
    description: "Control-M integration with Microsoft Power BI for business analytics.",
    logoKey: "BarChart",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/microsoft_powerbi",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Power_BI.htm",
    apiDocumentationUrl: "https://learn.microsoft.com/en-us/rest/api/power-bi/"
  },
  {
    id: "qlik-cloud",
    name: "Qlik Cloud",
    category: IntegrationCategory.BUSINESS_INTELLIGENCE_AND_ANALYTICS,
    documentationUrl: "https://www.qlik.com/us/products/qlik-cloud",
    lastUpdated: "2022-09-01",
    popularity: 3,
    description: "Control-M integration with Qlik Cloud for analytics and business intelligence.",
    logoKey: "BarChart",
    updateInfo: "", // Dynamically updated from backend
    developer: "Guy Shavit",
    githubUrl: "https://github.com/BMCDBA/qlik_cloud",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Qlik_Cloud.htm",
    apiDocumentationUrl: "https://qlik.dev/apis"
  },
  {
    id: "microsoft-power-bi-sp",
    name: "Microsoft Power BI SP",
    category: IntegrationCategory.BUSINESS_INTELLIGENCE_AND_ANALYTICS,
    documentationUrl: "https://powerbi.microsoft.com",
    lastUpdated: "2024-08-01",
    popularity: 5,
    description: "Microsoft Power BI Service Principal integration.",
    logoKey: "BarChart",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/Microsoft_Power_BI_SP",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Power_BI_SP.htm",
    apiDocumentationUrl: "https://learn.microsoft.com/en-us/rest/api/power-bi/"
  },

  {
    id: "tableau",
    name: "Tableau",
    category: IntegrationCategory.BUSINESS_INTELLIGENCE_AND_ANALYTICS,
    documentationUrl: "https://www.tableau.com",
    lastUpdated: "2023-07-01",
    popularity: 5,
    description: "Control-M integration with Tableau for data visualization.",
    logoKey: "BarChart",
    updateInfo: "", // Dynamically updated from backend
    developer: "Stanislav Ashkenazi",
    githubUrl: "https://github.com/BMCDBA/tableau",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Talend_Data_Mgt.htm",
    apiDocumentationUrl: "https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api.htm"
  },
  {
    id: "aws-quicksight",
    name: "AWS QuickSight",
    category: IntegrationCategory.BUSINESS_INTELLIGENCE_AND_ANALYTICS,
    documentationUrl: "https://aws.amazon.com/quicksight/",
    lastUpdated: "2023-01-01",
    popularity: 3,
    description: "Control-M integration with AWS QuickSight for business analytics",
    logoKey: "BarChart",
    updateInfo: "",
    developer: "Gilad Zehavi",
    githubUrl: "https://github.com/BMCDBA/aws_quicksight",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Amazon_QuickSight.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/quicksight/latest/APIReference/"
  },

];
