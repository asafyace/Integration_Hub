import { Integration, IntegrationCategory } from '../types';


export const containerOrchestrationIntegrations: Integration[] = [
  {
    id: "aws-app-runner",
    name: "AWS App Runner",
   category: IntegrationCategory.CONTAINER_ORCHESTRATION,
    documentationUrl: "https://docs.aws.amazon.com/apprunner/latest/relnotes/relnotes.html",
    lastUpdated: "2024-09-01",
    popularity: 3,
    description: "Control-M integration with AWS App Runner for containerized applications",
    logoKey: "Play",
    updateInfo: "",
    developer: "Stanislav Ashkenazi",
    githubUrl: "https://github.com/BMCDBA/aws_apprunner",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_App_Runner.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/apprunner/latest/api/Welcome.html"
  },
  {
    id: "aws-ecs",
    name: "AWS ECS",
   category: IntegrationCategory.CONTAINER_ORCHESTRATION,
    documentationUrl: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/document_history.html",
    lastUpdated: "2024-06-01",
    popularity: 3,
    description: "Control-M integration with AWS ECS for container orchestration",
    logoKey: "Box",
    updateInfo: "",
    developer: "Gilad Zehavi",
    githubUrl: "https://github.com/BMCDBA/aws_ecs",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_ECS.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/AmazonECS/latest/APIReference/Welcome.html"
  },
  {
    id: "azure-container-instances",
    name: "Azure Container Instances",
    category: IntegrationCategory.CONTAINER_ORCHESTRATION,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/container-instances/release-notes",
    lastUpdated: "",
    description: "Control-M integration with Azure Container Instances for running containers in the cloud.",
    logoKey: "Box",
    updateInfo: "", // Dynamically updated from backend
    developer: "Keren Surujon",
    githubUrl: "https://github.com/BMCDBA/azure_container_instances",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_Container_Instances.htm",
    apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/container-instances/'
  },
  {
    id: "gcp-cloud-run",
    name: "GCP Cloud Run",
    category: IntegrationCategory.CONTAINER_ORCHESTRATION,
    documentationUrl: "https://cloud.google.com/run/docs",
    lastUpdated: "",
    description: "Control-M integration with GCP Cloud Run for serverless container execution.",
    logoKey: "Cloud",
    updateInfo: "", // Dynamically updated from backend
    developer: "Stanislav Ashkenazi",
    githubUrl: "https://github.com/BMCDBA/gcp_cloud_run",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Cloud_Run.htm",
    apiDocumentationUrl: 'https://cloud.google.com/run/docs/reference/rest'
  }
];
