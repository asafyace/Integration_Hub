

import { Integration, IntegrationCategory } from '../types';

export const cloudComputingIntegrations: Integration[] = [
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
