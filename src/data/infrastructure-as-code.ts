import { Integration, IntegrationCategory } from '../types';


export const infrastructureAsCodeIntegrations: Integration[] = [
  {
    id: "aws-cloudformation",
    name: "AWS CloudFormation",
    category: IntegrationCategory.INFRASTRUCTURE_AS_CODE,
    documentationUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/ReleaseHistory.html",
    lastUpdated: "",
    description: "Control-M integration with AWS CloudFormation for infrastructure as code",
    logoKey: "Cloud",
    updateInfo: "",
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/aws_cloudformation",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_CloudFormation.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/AWSCloudFormation/latest/APIReference/Welcome.html"
  },
  {
    id: "azure-resource-management",
    name: "Azure Resource Management",
    category: IntegrationCategory.INFRASTRUCTURE_AS_CODE,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/whats-new",
    lastUpdated: "",
    description: "Control-M integration with Azure Resource Management for managing cloud resources.",
    logoKey: "Server",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/azure_resource_management",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_Resource_Management.htm",
    apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/resources/'
  },

  {
    id: "gcp-deployment-manager",
    name: "GCP Deployment Manager",
    category: IntegrationCategory.INFRASTRUCTURE_AS_CODE,
    documentationUrl: "https://cloud.google.com/deployment-manager/docs",
    lastUpdated: "",
    description: "Control-M integration with GCP Deployment Manager for infrastructure automation.",
    logoKey: "Server",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/gcp_deployment_manager",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_Deployment_Manager.htm",
    apiDocumentationUrl: 'https://cloud.google.com/deployment-manager/docs/reference/latest'
  },

  // Terraform Integration
  {
    id: "terraform",
    name: "Terraform",
    category: IntegrationCategory.INFRASTRUCTURE_AS_CODE,
    documentationUrl: "https://developer.hashicorp.com/terraform/docs",
    lastUpdated: "",
    description: "Control-M integration with Terraform for infrastructure as code automation.",
    logoKey: "Server",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/terraform_integration",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Terraform.htm",
    apiDocumentationUrl: "https://developer.hashicorp.com/terraform/api-docs"
  },

];
