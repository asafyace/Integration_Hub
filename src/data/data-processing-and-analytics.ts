import { Integration, IntegrationCategory } from '../types';


export const dataProcessingAndAnalyticsIntegrations: Integration[] = [
  {
    id: "aws-athena",
    name: "AWS Athena",
    category: IntegrationCategory.DATA_PROCESSING_AND_ANALYTICS,
    documentationUrl: "https://aws.amazon.com/athena/",
    lastUpdated: "2023-05-01",
    popularity: 4,
    description: "Control-M integration with AWS Athena for serverless queries",
    logoKey: "Database",
    updateInfo: "",
    developer: "Mati Green",
    githubUrl: "https://github.com/BMCDBA/aws_athena",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Amazon_Athena.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/athena/latest/APIReference/"
  },
  {
    id: "aws-data-pipeline",
    name: "AWS Data Pipeline",
    category: IntegrationCategory.DATA_PROCESSING_AND_ANALYTICS,
    documentationUrl: "https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/RelatedResources.html",
    lastUpdated: "",
    description: "Control-M integration with AWS Data Pipeline for data processing",
    logoKey: "GitBranch",
    updateInfo: "",
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/aws_data_pipeline",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_Data_Pipeline.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/datapipeline/latest/APIReference/Welcome.html"
  },
  {
    id: "aws-dynamodb",
    name: "AWS DynamoDB",
    category: IntegrationCategory.DATA_PROCESSING_AND_ANALYTICS,
    documentationUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DocumentHistory.html",
    lastUpdated: "",
    description: "Control-M integration with AWS DynamoDB for NoSQL operations",
    logoKey: "Database",
    updateInfo: "",
    developer: "Stanislav Ashkenazi",
    githubUrl: "https://github.com/BMCDBA/aws_dynamodb",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_DynamoDB.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/Welcome.html"
  },
  {
    id: "aws-emr",
    name: "AWS EMR",
    category: IntegrationCategory.DATA_PROCESSING_AND_ANALYTICS,
    documentationUrl: "https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-components.html",
    lastUpdated: "",
    description: "Control-M integration with AWS EMR for big data processing",
    logoKey: "Database",
    updateInfo: "",
    developer: "Mati Green",
    githubUrl: "https://github.com/BMCDBA/aws_emr",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_EMR.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/emr/latest/APIReference/Welcome.html"
  },
  {
    id: "aws-redshift",
    name: "AWS Redshift",
    category: IntegrationCategory.DATA_PROCESSING_AND_ANALYTICS,
    documentationUrl: "https://docs.aws.amazon.com/redshift/latest/mgmt/release-notes.html",
    lastUpdated: "",
    description: "Control-M integration with AWS Redshift for data warehousing",
    logoKey: "Database",
    updateInfo: "",
    developer: "Mati Green",
    githubUrl: "https://github.com/BMCDBA/aws_redshift",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_Redshift.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/redshift/latest/APIReference/Welcome.html"
  },
  {
    id: "azure-batch",
    name: "Azure Batch",
    category: IntegrationCategory.DATA_PROCESSING_AND_ANALYTICS,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/batch/whats-new",
    lastUpdated: "",
    description: "Control-M integration with Azure Batch for large-scale parallel and high-performance computing.",
    logoKey: "Layers",
    updateInfo: "", // Dynamically updated from backend
    developer: "Keren Surujon",
    githubUrl: "https://github.com/BMCDBA/azure_batch",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_Batch.htm",
    apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/batchservice/'
  },
  {
    id: "azure-hdinsight",
    name: "Azure HDInsight",
    category: IntegrationCategory.DATA_PROCESSING_AND_ANALYTICS,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/hdinsight/whats-new",
    lastUpdated: "",
    description: "Control-M integration with Azure HDInsight for cloud Apache Hadoop and Spark.",
    logoKey: "Cloud",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/azure_hdinsight",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_HDInsight.htm",
    apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/hdinsight/'
  },
  {
    id: "azure-databricks",
    name: "Azure Databricks",
    category: IntegrationCategory.DATA_PROCESSING_AND_ANALYTICS,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/databricks/release-notes",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-azure-databricks-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-azure-databricks-integration",
    apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/databricks',
    lastUpdated: "",
    description: "Control-M integration with Azure Databricks for big data analytics and machine learning workflows.",
    logoKey: "Database",
    updateInfo: "", // Dynamically updated from backend
    developer: "Neil Cullum ,Keren Surujon"
  },
  {
    id: "gcp-batch",
    name: "GCP Batch",
    category: IntegrationCategory.DATA_PROCESSING_AND_ANALYTICS,
    documentationUrl: "https://cloud.google.com/batch/docs",
    lastUpdated: "",
    description: "Control-M integration with GCP Batch for batch job orchestration.",
    logoKey: "Layers",
    updateInfo: "", // Dynamically updated from backend
    developer: "Guy Shavit",
    githubUrl: "https://github.com/BMCDBA/gcp_batch",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Batch.htm",
    apiDocumentationUrl: 'https://cloud.google.com/batch/docs/reference/rest'
  },
  {
    id: "gcp-bigquery",
    name: "GCP BigQuery",
    category: IntegrationCategory.BUSINESS_INTELLIGENCE_AND_ANALYTICS,
    documentationUrl: "https://cloud.google.com/bigquery/docs",
    lastUpdated: "",
    description: "Control-M integration with GCP BigQuery for analytics and data warehousing.",
    logoKey: "BarChart",
    updateInfo: "", // Dynamically updated from backend
    developer: "Stanislav Ashkenazi",
    githubUrl: "https://github.com/BMCDBA/gcp_bigquery",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_BigQuery.htm",
    apiDocumentationUrl: 'https://cloud.google.com/bigquery/docs/reference/rest'
  },
  {
    id: "gcp-dataflow",
    name: "GCP Dataflow",
    category: IntegrationCategory.DATA_PROCESSING_AND_ANALYTICS,
    documentationUrl: "https://cloud.google.com/dataflow/docs",
    lastUpdated: "",
    description: "Control-M integration with GCP Dataflow for stream and batch data processing.",
    logoKey: "Flow",
    updateInfo: "", // Dynamically updated from backend
    developer: "Tomer Berman",
    githubUrl: "https://github.com/BMCDBA/gcp_dataflow",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Dataflow.htm",
    apiDocumentationUrl: 'https://cloud.google.com/dataflow/docs/reference/rest'
  },
  {
    id: "gcp-dataplex",
    name: "GCP Dataplex",
    category: IntegrationCategory.DATA_PROCESSING_AND_ANALYTICS,
    documentationUrl: "https://cloud.google.com/dataplex/docs",
    lastUpdated: "",
    description: "Control-M integration with GCP Dataplex for data lake management.",
    logoKey: "Database",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/gcp_dataplex",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Dataplex.htm",
    apiDocumentationUrl: 'https://cloud.google.com/dataplex/docs/reference/rest'
  },
  {
    id: "gcp-dataprep",
    name: "GCP Dataprep",
    category: IntegrationCategory.DATA_PROCESSING_AND_ANALYTICS,
    documentationUrl: "https://cloud.google.com/dataprep/docs",
    lastUpdated: "",
    description: "Control-M integration with GCP Dataprep for data preparation workflows.",
    logoKey: "Flask",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/gcp_dataprep",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Dataprep.htm",
    apiDocumentationUrl: 'https://api.trifacta.com/dataprep-enterprise-cloud22/index.html'
  },
  {
    id: "gcp-dataproc",
    name: "GCP Dataproc",
    category: IntegrationCategory.DATA_PROCESSING_AND_ANALYTICS,
    documentationUrl: "https://cloud.google.com/dataproc/docs",
    lastUpdated: "",
    description: "Control-M integration with GCP Dataproc for big data processing.",
    logoKey: "Database",
    updateInfo: "", // Dynamically updated from backend
    developer: "Tomer Berman",
    githubUrl: "https://github.com/BMCDBA/gcp_dataproc",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Dataproc.htm",
    apiDocumentationUrl: 'https://cloud.google.com/dataproc/docs/reference/rest'
  },
  {
    id: 'oracle-cloud-data-flow',
    name: 'OCI Data Flow',
    category: IntegrationCategory.DATA_PROCESSING_AND_ANALYTICS,
    documentationUrl: 'https://docs.oracle.com/en-us/iaas/releasenotes/services/data-flow/',
    controlmDocUrl: 'https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/OCI_Data_Flow.htm',
    githubUrl: 'https://github.com/BMCDBA/oci_data_flow',
    lastUpdated: "",
    description: 'Control-M integration with Oracle Cloud Data Flow for data processing pipelines.',
    logoKey: 'Cloud',
    updateInfo: "", // Dynamically updated from backend
    developer: 'Tomer Berman',
    apiDocumentationUrl: 'https://docs.oracle.com/en-us/iaas/api/#/en/data-flow/20200129/'
  }
];
