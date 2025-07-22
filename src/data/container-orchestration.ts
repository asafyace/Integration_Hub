import { Integration, IntegrationCategory } from '../types';


export const containerOrchestrationIntegrations: Integration[] = [
  {
    id: "aws-app-runner",
    name: "AWS App Runner",
    category: IntegrationCategory.CONTAINER_ORCHESTRATION,
    documentationUrl: "https://aws.amazon.com/apprunner/",
    lastUpdated: "2024-09-01",
    popularity: 3,
    description: "Control-M integration with AWS App Runner for containerized applications",
    logoKey: "Play",
    updateInfo: "",
    developer: "Stanislav Ashkenazi",
    githubUrl: "https://github.com/BMCDBA/aws_apprunner",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/AWS_App_Runner.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/apprunner/latest/api/API_Operations.html"
  },
  {
    id: "aws-ecs",
    name: "AWS ECS",
    category: IntegrationCategory.CONTAINER_ORCHESTRATION,
    documentationUrl: "https://aws.amazon.com/ecs/",
    lastUpdated: "2023-04-01",
    popularity: 4,
    description: "Control-M integration with AWS ECS for container orchestration",
    logoKey: "Box",
    updateInfo: "",
    developer: "Gilad Zehavi",
    githubUrl: "https://github.com/BMCDBA/aws_ecs",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Amazon_ECS.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/"
  },
  {
    id: "azure-container-instances",
    name: "Azure Container Instances",
    category: IntegrationCategory.CONTAINER_ORCHESTRATION,
    documentationUrl: "https://azure.microsoft.com/en-us/services/container-instances/",
    lastUpdated: "2024-06-01",
    popularity: 4,
    description: "Control-M integration with Azure Container Instances for running containers in the cloud.",
    logoKey: "Box",
    updateInfo: "", // Dynamically updated from backend
    developer: "Keren Surujon",
    githubUrl: "https://github.com/BMCDBA/Azure_Container_Instances",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Azure_Container_Instances.htm",
    apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/container-instances/'
  },
  {
    id: "gcp-cloud-run",
    name: "GCP Cloud Run",
    category: IntegrationCategory.CONTAINER_ORCHESTRATION,
    documentationUrl: "https://cloud.google.com/run",
    lastUpdated: "2024-04-01",
    popularity: 4,
    description: "Control-M integration with GCP Cloud Run for serverless container execution.",
    logoKey: "Cloud",
    updateInfo: "", // Dynamically updated from backend
    developer: "Stanislav Ashkenazi",
    githubUrl: "https://github.com/BMCDBA/gcp_cloud_run",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/GCP_Cloud_Run.htm",
    apiDocumentationUrl: 'https://cloud.google.com/run/docs/reference/rest'
  }
];
