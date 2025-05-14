import { Integration, IntegrationCategory } from '../types'; // Adjusted path to match the correct location

const now = new Date();
const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
const threeMonthsAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);

const getRandomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
};

export const gcpIntegrations: Integration[] = [
  {
    id: "gcp-batch",
    name: "GCP Batch",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/batch/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Batch for batch job orchestration.",
    logoKey: "Layers",
    updateInfo: "Initial integration for GCP Batch jobs.",
    developer: "Guy Shavit",
    githubUrl: "https://github.com/BMCDBA/gcp_batch",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Batch.htm",
    apiDocumentationUrl: 'https://cloud.google.com/batch/docs/reference/rest'
  },
  {
    id: "gcp-bigquery",
    name: "GCP BigQuery",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/bigquery/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP BigQuery for analytics and data warehousing.",
    logoKey: "BarChart",
    updateInfo: "Initial integration for BigQuery analytics.",
    developer: "Stanislav Ashkenazi",
    githubUrl: "https://github.com/BMCDBA/gcp_bigquery",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_BigQuery.htm",
    apiDocumentationUrl: 'https://cloud.google.com/bigquery/docs/reference/rest'
  },
  {
    id: "gcp-cloud-run",
    name: "GCP Cloud Run",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/run/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Cloud Run for serverless container execution.",
    logoKey: "Cloud",
    updateInfo: "Initial integration for Cloud Run services.",
    developer: "Stanislav Ashkenazi",
    githubUrl: "https://github.com/BMCDBA/gcp_cloud_run",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Cloud_Run.htm",
    apiDocumentationUrl: 'https://cloud.google.com/run/docs/reference/rest'
  },
  {
    id: "gcp-composer",
    name: "GCP Composer",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/composer/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Composer for workflow orchestration.",
    logoKey: "Wind",
    updateInfo: "Initial integration for Composer DAGs.",
    developer: "Gilad Zehavi",
    githubUrl: "https://github.com/BMCDBA/gcp_composer",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Composer.htm",
    apiDocumentationUrl: 'https://cloud.google.com/composer/docs/reference/rest'
  },
  {
    id: "gcp-data-fusion",
    name: "GCP Data Fusion",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/data-fusion/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Data Fusion for data integration.",
    logoKey: "GitMerge",
    updateInfo: "Initial integration for Data Fusion pipelines.",
    developer: "Gilad Zehavi",
    githubUrl: "https://github.com/BMCDBA/gcp_data_fusion",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Data_Fusion.htm",
    apiDocumentationUrl: 'https://cloud.google.com/data-fusion/docs/reference/rest'
  },
  {
    id: "gcp-dataflow",
    name: "GCP Dataflow",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/dataflow/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Dataflow for stream and batch data processing.",
    logoKey: "Flow",
    updateInfo: "Initial integration for Dataflow jobs.",
    developer: "Tomer Berman",
    githubUrl: "https://github.com/BMCDBA/gcp_dataflow",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Dataflow.htm",
    apiDocumentationUrl: 'https://cloud.google.com/dataflow/docs/reference/rest'
  },
  {
    id: "gcp-dataplex",
    name: "GCP Dataplex",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/dataplex/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Dataplex for data lake management.",
    logoKey: "Database",
    updateInfo: "Initial integration for Dataplex lakes.",
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/gcp_dataplex",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Dataplex.htm",
    apiDocumentationUrl: 'https://cloud.google.com/dataplex/docs/reference/rest'
  },
  {
    id: "gcp-dataprep",
    name: "GCP Dataprep",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/dataprep/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Dataprep for data preparation workflows.",
    logoKey: "Flask",
    updateInfo: "Initial integration for Dataprep flows.",
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/gcp_dataprep",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Dataprep.htm",
    apiDocumentationUrl: 'https://api.trifacta.com/dataprep-enterprise-cloud22/index.html'
  },
  {
    id: "gcp-dataproc",
    name: "GCP Dataproc",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/dataproc/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Dataproc for big data processing.",
    logoKey: "Database",
    updateInfo: "Initial integration for Dataproc clusters.",
    developer: "Tomer Berman",
    githubUrl: "https://github.com/BMCDBA/gcp_dataproc",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Dataproc.htm",
    apiDocumentationUrl: 'https://cloud.google.com/dataproc/docs/reference/rest'
  },
  {
    id: "gcp-deployment-manager",
    name: "GCP Deployment Manager",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/deployment-manager/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Deployment Manager for infrastructure automation.",
    logoKey: "Server",
    updateInfo: "Initial integration for Deployment Manager templates.",
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/gcp_deployment_manager",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Deployment_Manager.htm",
    apiDocumentationUrl: 'https://cloud.google.com/deployment-manager/docs/reference/latest'
  },
  {
    id: "gcp-functions",
    name: "GCP Functions",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/functions/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Functions for serverless compute.",
    logoKey: "Zap",
    updateInfo: "Initial integration for GCP Functions.",
    developer: "Tomer Berman",
    githubUrl: "https://github.com/BMCDBA/gcp_functions",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Functions.htm",
    apiDocumentationUrl: 'https://cloud.google.com/functions/docs/reference/rest'
  },
  {
    id: "gcp-vm",
    name: "GCP VM",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/compute/docs/instances",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP VM for virtual machine management.",
    logoKey: "Server",
    updateInfo: "Initial integration for GCP VM orchestration.",
    developer: "Tomer Berman",
    githubUrl: "https://github.com/BMCDBA/gcp_vm",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_VM.htm",
    apiDocumentationUrl: 'https://cloud.google.com/compute/docs/reference/rest/v1'
  },
  {
    id: "gcp-workflows",
    name: "GCP Workflows",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/workflows/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Workflows for workflow orchestration.",
    logoKey: "GitBranch",
    updateInfo: "Initial integration for GCP Workflows.",
    developer: "Mati Green",
    githubUrl: "https://github.com/BMCDBA/gcp_workflows",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Workflows.htm",
    apiDocumentationUrl: 'https://cloud.google.com/workflows/docs/reference/rest'
  }
];
