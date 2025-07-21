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
    id: "azure-vm",
    name: "Azure VM",
    category: IntegrationCategory.INFRASTRUCTURE_AS_CODE,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/whats-new",
    lastUpdated: "",
    description: "Control-M integration with Azure Virtual Machines for compute management.",
    logoKey: "Server",
    updateInfo: "", // Dynamically updated from backend
    developer: "Tomer Berman",
    githubUrl: "https://github.com/BMCDBA/azure_vm",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_VM.htm",
    apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/compute/virtual-machines/'
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
  {
    id: "gcp-vm",
    name: "GCP VM",
    category: IntegrationCategory.INFRASTRUCTURE_AS_CODE,
    documentationUrl: "https://cloud.google.com/compute/docs/instances",
    lastUpdated: "",
    description: "Control-M integration with GCP VM for virtual machine management.",
    logoKey: "Server",
    updateInfo: "", // Dynamically updated from backend
    developer: "Tomer Berman",
    githubUrl: "https://github.com/BMCDBA/gcp_vm",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/GCP_VM.htm",
    apiDocumentationUrl: 'https://cloud.google.com/compute/docs/reference/rest/v1'
  },
  {
    id: 'oracle-cloud-vm',
    name: 'Oracle Cloud VM',
    category: IntegrationCategory.INFRASTRUCTURE_AS_CODE,
    documentationUrl: 'https://docs.oracle.com/en-us/iaas/releasenotes/services/compute/',
    controlmDocUrl: 'https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/OCI_VM.htm',
    githubUrl: 'https://github.com/BMCDBA/oci_vm',
    lastUpdated: "",
    description: 'Control-M integration with Oracle Cloud VM for virtual machine management.',
    logoKey: 'Server',
    updateInfo: "", // Dynamically updated from backend
    developer: 'Asaf Yaron',
    apiDocumentationUrl: 'https://docs.oracle.com/en-us/iaas/api/#/en/iaas/20160918/Instance/'
  }
];
