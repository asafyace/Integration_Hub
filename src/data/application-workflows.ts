import { Integration, IntegrationCategory } from '../types';

export const applicationWorkflowsIntegrations: Integration[] = [
  {
    id: "airflow",
    name: "Apache Airflow",
    category: IntegrationCategory.APPLICATION_WORKFLOWS,
    documentationUrl: "https://airflow.apache.org",
    lastUpdated: "2024-11-01",
    popularity: 5,
    description: "Control-M integration with Airflow for workflow orchestration.",
    logoKey: "Wind",
    updateInfo: "",
    developer: "Gilad Zehavi",
    githubUrl: "https://github.com/BMCDBA/Apache_Airflow",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Apache_Airflow.htm",
    apiDocumentationUrl: "https://airflow.apache.org/docs/apache-airflow/stable/stable-rest-api-ref.html"
  },
  {
    id: "astronomer",
    name: "Astronomer",
    category: IntegrationCategory.APPLICATION_WORKFLOWS,
    documentationUrl: "https://www.astronomer.io",
    lastUpdated: "2024-07-01",
    popularity: 3,
    description: "Control-M integration with Astronomer for Airflow management.",
    logoKey: "Rocket",
    updateInfo: "",
    developer: "Gilad Zehavi",
    githubUrl: "https://github.com/BMCDBA/astronomer",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Astronomer.htm",
    apiDocumentationUrl: "https://www.astronomer.io/docs/api/"
  },
  {
    id: "aws-step-function",
    name: "AWS Step Functions",
    category: IntegrationCategory.APPLICATION_WORKFLOWS,
    documentationUrl: "https://aws.amazon.com/step-functions/",
    lastUpdated: "2023-01-01",
    popularity: 4,
    description: "Control-M integration with AWS Step Functions for serverless workflow orchestration.",
    logoKey: "GitBranch",
    updateInfo: "",
    developer: "Mati Green",
    githubUrl: "https://github.com/BMCDBA/aws_step_functions",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/AWS_Step_Functions.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/step-functions/latest/apireference/"
  },
  {
    id: "aws-mwaa",
    name: "AWS MWAA",
    category: IntegrationCategory.APPLICATION_WORKFLOWS,
    documentationUrl: "https://aws.amazon.com/managed-workflows-for-apache-airflow/",
    lastUpdated: "2024-11-01",
    popularity: 3,
    description: "Control-M integration with AWS MWAA for Apache Airflow",
    logoKey: "Wind",
    updateInfo: "",
    developer: "Gilad Zehavi",
    githubUrl: "https://github.com/BMCDBA/AWS_MWAA",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Amazon_MWAA.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html"
  },

  {
    id: "azure-logic-apps",
    name: "Azure Logic Apps",
    category: IntegrationCategory.APPLICATION_WORKFLOWS,
    documentationUrl: "https://azure.microsoft.com/en-us/services/logic-apps/",
    lastUpdated: "2022-11-01",
    popularity: 4,
    description: "Control-M integration with Azure Logic Apps for workflow automation.",
    logoKey: "GitBranch",
    updateInfo: "", // Dynamically updated from backend
    developer: "Tomer Berman",
    githubUrl: "https://github.com/BMCDBA/azure_logic_apps",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Azure_Logic_Apps.htm",
    apiDocumentationUrl: "https://learn.microsoft.com/en-us/rest/api/logic/"
  },

  {
    id: "gcp-workflows",
    name: "GCP Workflows",
    category: IntegrationCategory.APPLICATION_WORKFLOWS,
    documentationUrl: "https://cloud.google.com/workflows",
    lastUpdated: "2023-09-01",
    popularity: 3,
    description: "Control-M integration with GCP Workflows for workflow orchestration.",
    logoKey: "GitBranch",
    updateInfo: "", // Dynamically updated from backend
    developer: "Mati Green",
    githubUrl: "https://github.com/BMCDBA/gcp_workflows",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/GCP_Workflows.htm",
    apiDocumentationUrl: "https://cloud.google.com/workflows/docs/reference/rest"
  },
  {
    id: "gcp-composer",
    name: "GCP Composer",
    category: IntegrationCategory.APPLICATION_WORKFLOWS,
    documentationUrl: "https://cloud.google.com/composer",
    lastUpdated: "2024-05-01",
    popularity: 4,
    description: "Control-M integration with GCP Composer for workflow orchestration.",
    logoKey: "Wind",
    updateInfo: "", // Dynamically updated from backend
    developer: "Gilad Zehavi",
    githubUrl: "https://github.com/BMCDBA/gcp_composer",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/GCP_Composer.htm",
    apiDocumentationUrl: "https://cloud.google.com/composer/docs/reference/rest"
  }
];

