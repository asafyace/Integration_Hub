

import { Integration, IntegrationCategory } from '../types';

export const cloudComputingIntegrations: Integration[] = [
  {
    id: "vmware",
    name: "Vmware",
    category: IntegrationCategory.CLOUD_COMPUTING,
    documentationUrl: "https://docs.vmware.com/en/",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-vmware-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-vmware-integration",
    lastUpdated: "",
    description: "Control-M integration with Vmware for virtualization management.",
    logoKey: "Server",
    updateInfo: "", // Dynamically updated from backend
    developer: "Gilad Zehavi",
    apiDocumentationUrl: "https://developer.vmware.com/"
  },
  {
    id: "aws-batch",
    name: "AWS Batch",
    category: IntegrationCategory.CLOUD_COMPUTING,
    documentationUrl: "https://docs.aws.amazon.com/batch/latest/userguide/document_history.html",
    lastUpdated: "",
    description: "Control-M integration with AWS Batch for job scheduling",
    logoKey: "Layers",
    updateInfo: "",
    developer: "Keren Surujon",
    githubUrl: "https://github.com/BMCDBA/aws_batch",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_Batch.html",
    apiDocumentationUrl: "https://docs.aws.amazon.com/batch/latest/APIReference/Welcome.html"
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
    id: "oci-vm",
    name: "OCI VM",
    category: IntegrationCategory.CLOUD_COMPUTING,
    documentationUrl: "",
    lastUpdated: "",
    description: "Oracle Cloud Infrastructure Virtual Machines.",
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
    lastUpdated: "",
    description: "Control-M integration with AWS Lambda for serverless functions",
    logoKey: "Zap",
    updateInfo: "",
    developer: "Keren Surujon",
    githubUrl: "https://github.com/BMCDBA/aws_lambda",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_Lambda.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/lambda/latest/api/welcome.html"
  }
];
