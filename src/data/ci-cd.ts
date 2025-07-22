import { Integration, IntegrationCategory } from '../types';

export const ciCdIntegrations: Integration[] = [
  {
    id: "jenkins",
    name: "Jenkins",
    category: IntegrationCategory.CI_CD,
    documentationUrl: "https://www.jenkins.io/doc/",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-jenkins-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with Jenkins for CI/CD automation.",
    logoKey: "GitBranch",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    apiDocumentationUrl: "https://www.jenkins.io/doc/book/using/remote-access-api/",
  },
  {
    id: "circleci",
    name: "CircleCI",
    category: IntegrationCategory.CI_CD,
    documentationUrl: "https://circleci.com/docs/api/",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-circleci-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with CircleCI for CI/CD automation.",
    logoKey: "GitBranch",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    apiDocumentationUrl: "https://circleci.com/docs/api/v2/index.html",
  },
  {
    id: "ansible-tower-awx",
    name: "Ansible Tower/AWX",
    category: IntegrationCategory.CI_CD,
    documentationUrl: "https://docs.ansible.com/ansible-tower/latest/html/towerapi/",
    githubUrl: "https://github.com/bmc-compuware/controlm-ansible-tower-integration",
    lastUpdated: "",
    description: "Control-M integration with Ansible Tower for infrastructure automation",
    logoKey: "Terminal",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    apiDocumentationUrl: "https://ansible.readthedocs.io/projects/awx/en/latest/rest_api/api_ref.html",
  },
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
