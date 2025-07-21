import { Integration, IntegrationCategory } from '../types';

export const ciCdIntegrations: Integration[] = [
  {
    id: "azure-devops",
    name: "Azure DevOps",
    category: IntegrationCategory.CI_CD,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/devops/release-notes/index",
    lastUpdated: "",
    description: "Control-M integration with Azure DevOps for CI/CD and project management.",
    logoKey: "GitBranch",
    updateInfo: "", // Dynamically updated from backend
    developer: "Mati Green",
    githubUrl: "https://github.com/BMCDBA/azure_devops",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_DevOps.htm",
    apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/azure/devops/'
  },
];
