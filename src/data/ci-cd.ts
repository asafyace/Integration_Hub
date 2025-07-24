import { Integration, IntegrationCategory } from '../types';

export const ciCdIntegrations: Integration[] = [
  {
    id: "ansible-awx",
    name: "Ansible AWX",
    category: IntegrationCategory.CI_CD,
    documentationUrl: "https://github.com/ansible/awx",
    lastUpdated: "2024-12-01",
    popularity: 4,
    description: "Control-M integration with Ansible AWX for CI/CD automation.",
    updateInfo: "",
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/Ansible_AWX",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Ansible_AWX.htm",
    apiDocumentationUrl: "https://docs.ansible.com/ansible/latest/collections/ansible/awx/"
  },
  {
    id: "jenkins",
    name: "Jenkins",
    category: IntegrationCategory.CI_CD,
    documentationUrl: "https://www.jenkins.io",
    lastUpdated: "2024-02-01",
    popularity: 4,
    description: "Control-M integration with Jenkins for CI/CD automation.",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/jenkins",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Jenkins.htm",
    apiDocumentationUrl: "https://www.jenkins.io/doc/book/using/remote-access-api/"
  },
  {
    id: "circleci",
    name: "CircleCI",
    category: IntegrationCategory.CI_CD,
    documentationUrl: "https://circleci.com/docs/api/",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-circleci-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with CircleCI for CI/CD automation.",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    apiDocumentationUrl: "https://circleci.com/docs/api/v2/index.html",
  },
  {
    id: "azure-devops",
    name: "Azure DevOps",
    category: IntegrationCategory.CI_CD,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/devops/release-notes/index",
    lastUpdated: "Nov-23",
    currentVersion: "1.0.00",
    description: "Control-M integration with Azure DevOps for CI/CD and project management.",
    updateInfo: "", // Dynamically updated from backend
    developer: "Mati Green",
    githubUrl: "https://github.com/BMCDBA/azure_devops",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_DevOps.htm",
    apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/azure/devops/'
  },
];
