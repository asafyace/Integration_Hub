import { Integration, IntegrationCategory } from '../types';


export const dataIntegrationIntegrations: Integration[] = [
  {
    id: "airbyte",
    name: "Airbyte",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://docs.airbyte.com/api-documentation",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-airbyte-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-airbyte-integration",
    lastUpdated: "",
    description: "Control-M integration with Airbyte for ELT pipeline automation",
    logoKey: "Boxes",
    updateInfo: "", // Dynamically updated from backend
    developer: "Mati Green",
    apiDocumentationUrl: "https://docs.airbyte.com/platform/api-documentation"
  },
  {
    id: "alteryx-trifacta",
    name: "Alteryx Trifacta",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://docs.trifacta.com/display/HOME/API+Reference",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-alteryx-trifacta-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-alteryx-trifacta-integration",
    lastUpdated: "",
    description: "Control-M integration with Alteryx Trifacta for data preparation workflows",
    logoKey: "LayoutDashboard",
    updateInfo: "", // Dynamically updated from backend
    developer: "Gilad Zehavi",
    apiDocumentationUrl: "https://api.trifacta.com/"
  },
  {
    id: "apache-nifi",
    name: "Apache NiFi",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://nifi.apache.org/docs.html",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-apache-nifi-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with Apache NiFi for data flow automation",
    logoKey: "Share2",
    updateInfo: "", // Dynamically updated from backend
    developer: "Stanislav Ashkenazi",
    apiDocumentationUrl: "https://nifi.apache.org/docs/nifi-docs/rest-api/index.html"
  },
  {
    id: "boomi-atomsphere",
    name: "Boomi Atomsphere",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://help.boomi.com/bundle/integration/page/c-atm-Atomsphere.html",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-boomi-atomsphere-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with Boomi Atomsphere for cloud integration and workflow automation.",
    logoKey: "Cloud",
    updateInfo: "", // Dynamically updated from backend
    developer: "Guy Shavit",
    apiDocumentationUrl: "https://community.boomi.com/s/article/automatingdeploymentswiththeatomsphereapi"
  },
  {
    id: "dbt",
    name: "DBT",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://docs.getdbt.com/docs/introduction",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-dbt-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with DBT for data transformation workflows.",
    logoKey: "GitMerge",
    updateInfo: "", // Dynamically updated from backend
    developer: "Mati Green",
    apiDocumentationUrl: "https://docs.getdbt.com/docs/dbt-cloud-apis/overview"
  },
  {
    id: "ibm-datastage",
    name: "IBM Datastage",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://www.ibm.com/docs/en/iis/11.7?topic=SSZJPZ_11.7.0/com.ibm.swg.im.iis.ds.parjob.dev.doc/topics/c_developing_parallel_jobs.html",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-ibm-datastage-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with IBM Datastage for ETL and data integration.",
    logoKey: "Database",
    updateInfo: "", // Dynamically updated from backend
    developer: "Guy Shavit",
    apiDocumentationUrl: "https://cloud.ibm.com/apidocs/datastage"
  },
  {
    id: "snowflake",
    name: "Snowflake",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://docs.snowflake.com/en/docs",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-snowflake-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-snowflake-integration",
    lastUpdated: "",
    description: "Control-M integration with Snowflake for cloud data warehousing.",
    logoKey: "Database",
    updateInfo: "", // Dynamically updated from backend
    developer: "Mati Green",
    apiDocumentationUrl: "https://docs.snowflake.com/en/sql-reference/sql-api.html"
  },
  {
    id: "talend",
    name: "Talend",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://help.talend.com/r/en-US/8.0",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-talend-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-talend-integration",
    lastUpdated: "",
    description: "Control-M integration with Talend for data integration and ETL workflows.",
    logoKey: "GitMerge",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    apiDocumentationUrl: "https://talend.qlik.dev/apis/"
  },
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
