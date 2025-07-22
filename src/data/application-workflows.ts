import { Integration, IntegrationCategory } from '../types';

export const applicationWorkflowsIntegrations: Integration[] = [
  {
    id: "airflow",
    name: "Airflow",
    category: IntegrationCategory.APPLICATION_WORKFLOWS,
    documentationUrl: "",
    lastUpdated: "2024-11-01",
    popularity: 4,
    description: "Control-M integration with Airflow for workflow orchestration.",
    logoKey: "Wind",
    updateInfo: "",
    developer: "",
    apiDocumentationUrl: ""
  },
  {
    id: "astronomer",
    name: "Astronomer",
    category: IntegrationCategory.APPLICATION_WORKFLOWS,
    documentationUrl: "",
    lastUpdated: "2024-07-01",
    popularity: 3,
    description: "Control-M integration with Astronomer for Airflow management.",
    logoKey: "Rocket",
    updateInfo: "",
    developer: "",
    apiDocumentationUrl: ""
  },
  {
    id: "aws-step-function",
    name: "AWS Step Function",
    category: IntegrationCategory.APPLICATION_WORKFLOWS,
    documentationUrl: "https://docs.aws.amazon.com/step-functions/latest/dg/document-history.html",
    lastUpdated: "",
    description: "Control-M integration with AWS Step Functions for serverless workflow orchestration.",
    logoKey: "GitBranch",
    updateInfo: "",
    developer: "Mati Green",
    githubUrl: "https://github.com/BMCDBA/aws_step_functions",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_Step_Functions.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/step-functions/latest/apireference/Welcome.html"
  },
  {
    id: "aws-mwaa",
    name: "AWS MWAA",
    category: IntegrationCategory.APPLICATION_WORKFLOWS,
    documentationUrl: "https://docs.aws.amazon.com/mwaa/latest/userguide/release-notes.html",
    lastUpdated: "",
    description: "Control-M integration with AWS MWAA for Apache Airflow",
    logoKey: "Wind",
    updateInfo: "",
    developer: "Gilad Zehavi",
    githubUrl: "https://github.com/BMCDBA/aws_mwaa",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_MWAA.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/mwaa/latest/APIReference/Welcome.html"
  },
  {
    id: "azure-functions",
    name: "Azure Functions",
    category: IntegrationCategory.APPLICATION_WORKFLOWS,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/release-notes",
    lastUpdated: "",
    description: "Control-M integration with Azure Functions for serverless event-driven compute.",
    logoKey: "Zap",
    updateInfo: "", // Dynamically updated from backend
    developer: "Tomer Berman",
    githubUrl: "https://github.com/BMCDBA/azure_functions",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_Functions.htm",
    apiDocumentationUrl: 'https://learn.microsoft.com/en-us/azure/azure-functions/'
  },
  {
    id: "azure-logic-apps",
    name: "Azure Logic Apps",
    category: IntegrationCategory.APPLICATION_WORKFLOWS,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/logic-apps/release-notes",
    lastUpdated: "",
    description: "Control-M integration with Azure Logic Apps for workflow automation.",
    logoKey: "GitBranch",
    updateInfo: "", // Dynamically updated from backend
    developer: "Tomer Berman",
    githubUrl: "https://github.com/BMCDBA/azure_logic_apps",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_Logic_Apps.htm",
    apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/logic/'
  },
  {
    id: "gcp-functions",
    name: "GCP Functions",
    category: IntegrationCategory.APPLICATION_WORKFLOWS,
    documentationUrl: "https://cloud.google.com/functions/docs",
    lastUpdated: "",
    description: "Control-M integration with GCP Functions for serverless compute.",
    logoKey: "Zap",
    updateInfo: "", // Dynamically updated from backend
    developer: "Tomer Berman",
    githubUrl: "https://github.com/BMCDBA/gcp_functions",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Functions.htm",
    apiDocumentationUrl: 'https://cloud.google.com/functions/docs/reference/rest'
  },
  {
    id: "gcp-workflows",
    name: "GCP Workflows",
    category: IntegrationCategory.APPLICATION_WORKFLOWS,
    documentationUrl: "https://cloud.google.com/workflows/docs",
    lastUpdated: "",
    description: "Control-M integration with GCP Workflows for workflow orchestration.",
    logoKey: "GitBranch",
    updateInfo: "", // Dynamically updated from backend
    developer: "Mati Green",
    githubUrl: "https://github.com/BMCDBA/gcp_workflows",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Workflows.htm",
    apiDocumentationUrl: 'https://cloud.google.com/workflows/docs/reference/rest'
  },
  {
    id: "gcp-composer",
    name: "GCP Composer",
    category: IntegrationCategory.APPLICATION_WORKFLOWS,
    documentationUrl: "https://cloud.google.com/composer/docs",
    lastUpdated: "",
    description: "Control-M integration with GCP Composer for workflow orchestration.",
    logoKey: "Wind",
    updateInfo: "", // Dynamically updated from backend
    developer: "Gilad Zehavi",
    githubUrl: "https://github.com/BMCDBA/gcp_composer",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Composer.htm",
    apiDocumentationUrl: 'https://cloud.google.com/composer/docs/reference/rest'
  }
];
