import { Integration, IntegrationCategory } from '../types';

export const awsIntegrations: Integration[] = [
  {
    id: "aws-app-runner",
    name: "AWS App Runner",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/apprunner/",
    lastUpdated: new Date().toISOString(), // Will be updated from backend
    description: "Control-M integration with AWS App Runner for containerized applications",
    logoKey: "Play",
    updateInfo: "", // Will be updated from backend
    developer: "Stanislav Ashkenazi"
  },
  {
    id: "aws-appflow",
    name: "AWS AppFlow",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/appflow/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS AppFlow for SaaS data integration",
    logoKey: "Flow",
    updateInfo: "",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-athena",
    name: "AWS Athena",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/athena/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS Athena for serverless queries",
    logoKey: "Database",
    updateInfo: "",
    developer: "Mati Green"
  },
  {
    id: "aws-step-function",
    name: "AWS Step Function",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/step-functions/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS Step Functions for serverless workflow orchestration.",
    logoKey: "GitBranch",
    updateInfo: "",
    developer: "Mati Green"
  },
  {
    id: "aws-backup",
    name: "AWS Backup",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/aws-backup/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS Backup for automated backups",
    logoKey: "Save",
    updateInfo: "",
    developer: "Stanislav Ashkenazi"
  },
  {
    id: "aws-batch",
    name: "AWS Batch",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/batch/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS Batch for job scheduling",
    logoKey: "Layers",
    updateInfo: "",
    developer: "Keren Surujon"
  },
  {
    id: "aws-cloudformation",
    name: "AWS CloudFormation",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/cloudformation/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS CloudFormation for infrastructure as code",
    logoKey: "Cloud",
    updateInfo: "",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-data-pipeline",
    name: "AWS Data Pipeline",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/datapipeline/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS Data Pipeline for data processing",
    logoKey: "GitBranch",
    updateInfo: "",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-datasync",
    name: "AWS DataSync",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/datasync/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS DataSync for data transfer",
    logoKey: "RefreshCw",
    updateInfo: "",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-dynamodb",
    name: "AWS DynamoDB",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/dynamodb/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS DynamoDB for NoSQL operations",
    logoKey: "Database",
    updateInfo: "",
    developer: "Stanislav Ashkenazi"
  },
  {
    id: "aws-ec2",
    name: "AWS EC2",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/ec2/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS EC2 for compute management",
    logoKey: "Server",
    updateInfo: "",
    developer: "Tomer Berman"
  },
  {
    id: "aws-ecs",
    name: "AWS ECS",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/ecs/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS ECS for container orchestration",
    logoKey: "Box",
    updateInfo: "",
    developer: "Gilad Zehavi"
  },
  {
    id: "aws-emr",
    name: "AWS EMR",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/emr/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS EMR for big data processing",
    logoKey: "Database",
    updateInfo: "",
    developer: "Mati Green"
  },
  {
    id: "aws-glue",
    name: "AWS Glue",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/glue/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS Glue for ETL operations",
    logoKey: "GitMerge",
    updateInfo: "",
    developer: "Neil Cullum, Asaf Yaron"
  },
  {
    id: "aws-glue-databrew",
    name: "AWS Glue DataBrew",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/databrew/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS Glue DataBrew for data preparation",
    logoKey: "Flask",
    updateInfo: "",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-lambda",
    name: "AWS Lambda",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/lambda/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS Lambda for serverless functions",
    logoKey: "Zap",
    updateInfo: "",
    developer: "Keren Surujon"
  },
  {
    id: "aws-mainframe-modernization",
    name: "AWS Mainframe Modernization",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/m2/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS M2 for mainframe workloads",
    logoKey: "Server",
    updateInfo: "",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-mwaa",
    name: "AWS MWAA",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/mwaa/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS MWAA for Apache Airflow",
    logoKey: "Wind",
    updateInfo: "",
    developer: "Gilad Zehavi"
  },
  {
    id: "aws-quicksight",
    name: "AWS QuickSight",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/quicksight/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS QuickSight for business analytics",
    logoKey: "BarChart",
    updateInfo: "",
    developer: "Gilad Zehavi"
  },
  {
    id: "aws-redshift",
    name: "AWS Redshift",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/redshift/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS Redshift for data warehousing",
    logoKey: "Database",
    updateInfo: "",
    developer: "Mati Green"
  },
  {
    id: "aws-sagemaker",
    name: "AWS SageMaker",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/sagemaker/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS SageMaker for machine learning",
    logoKey: "Brain",
    updateInfo: "",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-sns",
    name: "AWS SNS",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/sns/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS SNS for notifications",
    logoKey: "Bell",
    updateInfo: "",
    developer: "Gilad Zehavi"
  },
  {
    id: "aws-sqs",
    name: "AWS SQS",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/sqs/",
    lastUpdated: new Date().toISOString(),
    description: "Control-M integration with AWS SQS for message queuing",
    logoKey: "MessageSquare",
    updateInfo: "",
    developer: "Gilad Zehavi"
  }
];