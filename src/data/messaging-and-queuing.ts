import { Integration, IntegrationCategory } from '../types';


export const messagingAndQueuingIntegrations: Integration[] = [
  {
    id: "rabbitmq",
    name: "RabbitMQ",
    category: IntegrationCategory.MESSAGING_AND_QUEUING,
    documentationUrl: "https://www.rabbitmq.com",
    lastUpdated: "2024-08-01",
    popularity: 4,
    description: "Control-M integration with RabbitMQ for message queuing.",
    logoKey: "MessageSquare",
    updateInfo: "",
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/RabbitMQ",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/RabbitMQ.htm",
    apiDocumentationUrl: "https://rawcdn.githack.com/rabbitmq/rabbitmq-server/v3.8.9/deps/rabbitmq_management/docs/api/index.html"
  },
  {
    id: "aws-sns",
    name: "AWS SNS",
    category: IntegrationCategory.MESSAGING_AND_QUEUING,
    documentationUrl: "https://docs.aws.amazon.com/sns/latest/dg/sns-release-notes.html",
    lastUpdated: "Mar-24",
    currentVersion: "1.0.03",
    popularity: 4,
    description: "Control-M integration with AWS SNS for notifications",
    logoKey: "Bell",
    updateInfo: "",
    developer: "Gilad Zehavi",
    githubUrl: "https://github.com/BMCDBA/aws_sns",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_SNS.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/sns/latest/api/Welcome.html"
  },
  {
    id: "aws-sqs",
    name: "AWS SQS",
    category: IntegrationCategory.MESSAGING_AND_QUEUING,
    documentationUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-release-notes.html",
    lastUpdated: "Mar-24",
    currentVersion: "1.0.03",
    description: "Control-M integration with AWS SQS for message queuing",
    logoKey: "MessageSquare",
    updateInfo: "",
    developer: "Gilad Zehavi",
    githubUrl: "https://github.com/BMCDBA/aws_sqs",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_SQS.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/Welcome.html"
  },
  {
    id: "azure-service-bus",
    name: "Azure Service Bus",
    category: IntegrationCategory.MESSAGING_AND_QUEUING,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/whats-new",
    lastUpdated: "",
    description: "Control-M integration with Azure Service Bus for enterprise messaging.",
    logoKey: "MessageSquare",
    updateInfo: "", // Dynamically updated from backend
    developer: "Mati Green",
    githubUrl: "https://github.com/BMCDBA/azure_service_bus",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_Service_Bus.htm",
    apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/servicebus/'
  }
];
