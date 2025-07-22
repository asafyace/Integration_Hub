

import { Integration, IntegrationCategory } from '../types';

export const cloudComputingIntegrations: Integration[] = [
    {
    id: 'oracle-cloud-vm',
    name: 'OCI VM',
    category: IntegrationCategory.CLOUD_COMPUTING,
    documentationUrl: 'https://www.oracle.com/cloud/compute/',
    lastUpdated: "2024-01-01",
    popularity: 3,
    description: 'Control-M integration with Oracle Cloud VM for virtual machine management.',
    logoKey: 'Server',
    updateInfo: "", // Dynamically updated from backend
    developer: 'Asaf Yaron',
    githubUrl: 'https://github.com/BMCDBA/oci_vm',
    controlmDocUrl: 'https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/OCI_VM.htm',
    apiDocumentationUrl: 'https://docs.oracle.com/en-us/iaas/Content/Compute/Tasks/computeapi.htm'
  },
    {
    id: "gcp-vm",
    name: "GCP VM",
    category: IntegrationCategory.CLOUD_COMPUTING,
    documentationUrl: "https://cloud.google.com/compute",
    lastUpdated: "2022-08-01",
    popularity: 4,
    description: "Control-M integration with GCP VM for virtual machine management.",
    logoKey: "Server",
    updateInfo: "", // Dynamically updated from backend
    developer: "Tomer Berman",
    githubUrl: "https://github.com/BMCDBA/gcp_vm",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/GCP_VM.htm",
    apiDocumentationUrl: 'https://cloud.google.com/compute/docs/reference/rest/v1/instances'
  },
    {
    id: "azure-vm",
    name: "Azure VM",
    category: IntegrationCategory.CLOUD_COMPUTING,
    documentationUrl: "https://azure.microsoft.com/en-us/services/virtual-machines/",
    lastUpdated: "2022-08-01",
    popularity: 5,
    description: "Control-M integration with Azure Virtual Machines for compute management.",
    logoKey: "Server",
    updateInfo: "", // Dynamically updated from backend
    developer: "Tomer Berman",
    githubUrl: "https://github.com/BMCDBA/azure_vm",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Azure_VM.htm",
    apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/compute/virtualmachines'
  },
  {
    id: "vmware",
    name: "VMware By Broadcom",
    category: IntegrationCategory.CLOUD_COMPUTING,
    documentationUrl: "https://www.vmware.com",
    lastUpdated: "2024-10-01",
    popularity: 4,
    description: "Control-M integration with Vmware for virtualization management.",
    logoKey: "Server",
    updateInfo: "", // Dynamically updated from backend
    developer: "Keren Surujon",
    githubUrl: "https://github.com/BMCDBA/vmware",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Web_Services_REST.htm",
    apiDocumentationUrl: "https://developer.vmware.com/apis/"
  },
  {
    id: "aws-batch",
    name: "AWS Batch",
    category: IntegrationCategory.CLOUD_COMPUTING,
    documentationUrl: "https://aws.amazon.com/batch/",
    lastUpdated: "2022-12-01",
    popularity: 3,
    description: "Control-M integration with AWS Batch for job scheduling",
    logoKey: "Layers",
    updateInfo: "",
    developer: "Keren Surujon",
    githubUrl: "https://github.com/BMCDBA/aws_batch",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/AWS_Batch.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/batch/latest/APIReference/"
  },
  {
    id: "oci-functions",
    name: "OCI Functions",
    category: IntegrationCategory.CLOUD_COMPUTING,
    documentationUrl: "",
    lastUpdated: "",
    description: "Oracle Cloud Infrastructure Functions service.",
    developer: "",
  },
  {
    id: "vmware-by-broadcom",
    name: "VMware By Broadcom",
    category: IntegrationCategory.CLOUD_COMPUTING,
    documentationUrl: "",
    lastUpdated: "",
    description: "VMware by Broadcom cloud computing integration.",
    developer: "",
  },
  {
    id: "aws-ec2",
    name: "AWS EC2",
    category: IntegrationCategory.CLOUD_COMPUTING,
    documentationUrl: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/DocumentHistory.html",
    lastUpdated: "",
    description: "Control-M integration with AWS EC2 for compute management",
    logoKey: "Server",
    updateInfo: "",
    developer: "Tomer Berman",
    githubUrl: "https://github.com/BMCDBA/aws_ec2",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_EC2.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Welcome.html"
  },
    {
    id: "aws-lambda",
    name: "AWS Lambda",
    category: IntegrationCategory.CLOUD_COMPUTING,
    documentationUrl: "https://docs.aws.amazon.com/lambda/latest/dg/lambda-releases.html",
    lastUpdated: "Jan-24",
    currentVersion: "1.0.01",
    description: "Control-M integration with AWS Lambda for serverless functions",
    logoKey: "Zap",
    updateInfo: "",
    developer: "Keren Surujon",
    githubUrl: "https://github.com/BMCDBA/aws_lambda",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_Lambda.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/lambda/latest/api/welcome.html"
  }
  
];
