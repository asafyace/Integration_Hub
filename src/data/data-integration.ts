import { Integration, IntegrationCategory } from '../types';


export const dataIntegrationIntegrations: Integration[] = [
  {
    id: "aws-appflow",
    name: "AWS AppFlow",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://docs.aws.amazon.com/appflow/latest/userguide/doc-history.html",
    lastUpdated: "",
    description: "Control-M integration with AWS AppFlow for SaaS data integration",
    logoKey: "Flow",
    updateInfo: "",
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/aws_appflow",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_AppFlow.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/appflow/1.0/APIReference/Welcome.html"
  },
  {
    id: "aws-glue",
    name: "AWS Glue",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://docs.aws.amazon.com/glue/latest/dg/release-notes.html",
    lastUpdated: "",
    description: "Control-M integration with AWS Glue for ETL operations",
    logoKey: "GitMerge",
    updateInfo: "",
    developer: "Neil Cullum, Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/aws_glue",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_Glue.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/glue/latest/webapi/WebAPI_Welcome.html"
  },
  {
    id: "aws-glue-databrew",
    name: "AWS Glue DataBrew",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://docs.aws.amazon.com/databrew/latest/dg/release-notes.html",
    lastUpdated: "",
    description: "Control-M integration with AWS Glue DataBrew for data preparation",
    logoKey: "Flask",
    updateInfo: "",
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/aws_glue_databrew",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_Glue_DataBrew.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/databrew/latest/dg/api-reference.html"
  },
  {
    id: "azure-data-factory",
    name: "Azure Data Factory",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/data-factory/whats-new",
    lastUpdated: "",
    description: "Control-M integration with Azure Data Factory for data integration and ETL workflows.",
    logoKey: "GitMerge",
    updateInfo: "", // Dynamically updated from backend
    developer: "Neil Cullum, Keren Surujon",
    githubUrl: "https://github.com/BMCDBA/azure_data_factory",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_Data_Factory.htm",
    apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/datafactory/'
  },
  {
    id: "gcp-data-fusion",
    name: "GCP Data Fusion",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://cloud.google.com/data-fusion/docs",
    lastUpdated: "",
    description: "Control-M integration with GCP Data Fusion for data integration.",
    logoKey: "GitMerge",
    updateInfo: "", // Dynamically updated from backend
    developer: "Gilad Zehavi",
    githubUrl: "https://github.com/BMCDBA/gcp_data_fusion",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Data_Fusion.htm",
    apiDocumentationUrl: 'https://cloud.google.com/data-fusion/docs/reference/rest'
  },
  {
    id: 'oracle-cloud-data-integration',
    name: 'Oracle Cloud Data Integration',
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: 'https://docs.oracle.com/iaas/releasenotes/services/data-integration/',
    controlmDocUrl: 'https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/OCI_Data_Integration.htm',
    githubUrl: 'https://github.com/BMCDBA/oci_data_integration',
    lastUpdated: "",
    description: 'Control-M integration with Oracle Cloud Data Integration for ETL and data workflows.',
    logoKey: 'GitMerge',
    updateInfo: "", // Dynamically updated from backend
    developer: 'Mati Green',
    apiDocumentationUrl: 'https://docs.oracle.com/en-us/iaas/api/#/en/data-integration/20200430/'
  }
];
