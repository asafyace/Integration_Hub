import { Integration, IntegrationCategory, CategoryCount } from '../types';

const now = new Date();
const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
const threeMonthsAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);

const getRandomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
};

export const integrations: Integration[] = [
  {
    id: "airbyte",
    name: "Airbyte",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://docs.airbyte.com/api-documentation",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Airbyte for ELT pipeline automation",
    logoKey: "Boxes",
    updateInfo: "Added support for custom connectors and improved error handling",
    developer: "Mati Green"
  },
  {
    id: "alteryx-trifacta",
    name: "Alteryx Trifacta",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://docs.trifacta.com/display/HOME/API+Reference",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with Alteryx Trifacta for data preparation workflows",
    logoKey: "LayoutDashboard",
    updateInfo: "Enhanced workflow scheduling and monitoring capabilities",
    developer: "Gilad Zehavi"
  },
  {
    id: "ansible-tower-awx",
    name: "Ansible Tower/AWX",
    category: IntegrationCategory.INFRASTRUCTURE,
    documentationUrl: "https://docs.ansible.com/ansible-tower/latest/html/towerapi/",
    lastUpdated: getRandomDate(threeMonthsAgo, oneMonthAgo),
    description: "Control-M integration with Ansible Tower for infrastructure automation",
    logoKey: "Terminal",
    updateInfo: "Added support for dynamic inventory and role-based access control",
    developer: "Asaf Yaron"
  },
  {
    id: "apache-airflow",
    name: "Apache Airflow",
    category: IntegrationCategory.WORKFLOW_AUTOMATION,
    documentationUrl: "https://airflow.apache.org/docs/apache-airflow/stable/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with Apache Airflow for workflow orchestration",
    logoKey: "Wind",
    updateInfo: "Improved DAG synchronization and error recovery",
    developer: "Gilad Zehavi"
  },
  {
    id: "apache-nifi",
    name: "Apache NiFi",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://nifi.apache.org/docs.html",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Apache NiFi for data flow automation",
    logoKey: "Share2",
    updateInfo: "Enhanced data flow monitoring and alerting",
    developer: "Stanislav Ashkenazi"
  },
  {
    id: "astronomer",
    name: "Astronomer",
    category: IntegrationCategory.WORKFLOW_AUTOMATION,
    documentationUrl: "https://www.astronomer.io/docs/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with Astronomer for Apache Airflow management",
    logoKey: "Rocket",
    updateInfo: "Added support for Astronomer Cloud deployments",
    developer: "Gilad Zehavi"
  },
  {
    id: "automation-anywhere",
    name: "Automation Anywhere",
    category: IntegrationCategory.WORKFLOW_AUTOMATION,
    documentationUrl: "https://docs.automationanywhere.com/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Automation Anywhere for RPA orchestration",
    logoKey: "Bot",
    updateInfo: "Enhanced bot deployment and monitoring capabilities",
    developer: "Stanislav Ashkenazi"
  },
  {
    id: "aws-app-runner",
    name: "AWS App Runner",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/apprunner/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS App Runner for containerized applications",
    logoKey: "Play",
    updateInfo: "Added support for auto-scaling and health checks",
    developer: "Stanislav Ashkenazi"
  },
  {
    id: "aws-appflow",
    name: "AWS AppFlow",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/appflow/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with AWS AppFlow for SaaS data integration",
    logoKey: "Flow",
    updateInfo: "Enhanced data mapping and transformation capabilities",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-athena",
    name: "AWS Athena",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/athena/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS Athena for serverless queries",
    logoKey: "Database",
    updateInfo: "Improved query performance monitoring",
    developer: "Mati Green"
  },
  {
    id: "aws-step-function",
    name: "AWS Step Function",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/step-functions/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS Step Functions for serverless workflow orchestration.",
    logoKey: "GitBranch",
    updateInfo: "Added support for state machine execution monitoring and error handling.",
    developer: "Mati Green"
  },
  {
    id: "aws-backup",
    name: "AWS Backup",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/aws-backup/",
    lastUpdated: getRandomDate(threeMonthsAgo, oneMonthAgo),
    description: "Control-M integration with AWS Backup for automated backups",
    logoKey: "Save",
    updateInfo: "Added support for cross-region backup copies",
    developer: "Stanislav Ashkenazi"
  },
  {
    id: "aws-batch",
    name: "AWS Batch",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/batch/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with AWS Batch for job scheduling",
    logoKey: "Layers",
    updateInfo: "Enhanced job queue management and monitoring",
    developer: "Keren Surujon"
  },
  {
    id: "aws-cloudformation",
    name: "AWS CloudFormation",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/cloudformation/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS CloudFormation for infrastructure as code",
    logoKey: "Cloud",
    updateInfo: "Added support for drift detection and stack updates",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-data-pipeline",
    name: "AWS Data Pipeline",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/datapipeline/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with AWS Data Pipeline for data processing",
    logoKey: "GitBranch",
    updateInfo: "Improved pipeline dependency management",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-datasync",
    name: "AWS DataSync",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/datasync/",
    lastUpdated: getRandomDate(threeMonthsAgo, oneMonthAgo),
    description: "Control-M integration with AWS DataSync for data transfer",
    logoKey: "RefreshCw",
    updateInfo: "Enhanced transfer monitoring and bandwidth control",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-dynamodb",
    name: "AWS DynamoDB",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/dynamodb/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS DynamoDB for NoSQL operations",
    logoKey: "Database",
    updateInfo: "Added support for transactional operations",
    developer: "Stanislav Ashkenazi"
  },
  {
    id: "aws-ec2",
    name: "AWS EC2",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/ec2/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with AWS EC2 for compute management",
    logoKey: "Server",
    updateInfo: "Enhanced instance lifecycle management",
    developer: "Tomer Berman"
  },
  {
    id: "aws-ecs",
    name: "AWS ECS",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/ecs/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS ECS for container orchestration",
    logoKey: "Box",
    updateInfo: "Added support for capacity providers",
    developer: "Gilad Zehavi"
  },
  {
    id: "aws-emr",
    name: "AWS EMR",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/emr/",
    lastUpdated: getRandomDate(threeMonthsAgo, oneMonthAgo),
    description: "Control-M integration with AWS EMR for big data processing",
    logoKey: "Database",
    updateInfo: "Enhanced cluster management and monitoring",
    developer: "Mati Green"
  },
  {
    id: "aws-glue",
    name: "AWS Glue",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/glue/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with AWS Glue for ETL operations",
    logoKey: "GitMerge",
    updateInfo: "Improved job bookmarking and error handling",
    developer: "Neil Cullum, Asaf Yaron"
  },
  {
    id: "aws-glue-databrew",
    name: "AWS Glue DataBrew",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/databrew/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS Glue DataBrew for data preparation",
    logoKey: "Flask",
    updateInfo: "Added support for custom transformations",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-lambda",
    name: "AWS Lambda",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/lambda/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with AWS Lambda for serverless functions",
    logoKey: "Zap",
    updateInfo: "Enhanced function versioning and aliases",
    developer: "Keren Surujon"
  },
  {
    id: "aws-mainframe-modernization",
    name: "AWS Mainframe Modernization",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/m2/",
    lastUpdated: getRandomDate(threeMonthsAgo, oneMonthAgo),
    description: "Control-M integration with AWS M2 for mainframe workloads",
    logoKey: "Server",
    updateInfo: "Added support for COBOL runtime",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-mwaa",
    name: "AWS MWAA",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/mwaa/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS MWAA for Apache Airflow",
    logoKey: "Wind",
    updateInfo: "Enhanced environment management",
    developer: "Gilad Zehavi"
  },
  {
    id: "aws-quicksight",
    name: "AWS QuickSight",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/quicksight/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with AWS QuickSight for business analytics",
    logoKey: "BarChart",
    updateInfo: "Added support for custom SQL queries",
    developer: "Gilad Zehavi"
  },
  {
    id: "aws-redshift",
    name: "AWS Redshift",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/redshift/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS Redshift for data warehousing",
    logoKey: "Database",
    updateInfo: "Enhanced cluster scaling and maintenance",
    developer: "Mati Green"
  },
  {
    id: "aws-sagemaker",
    name: "AWS SageMaker",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/sagemaker/",
    lastUpdated: getRandomDate(threeMonthsAgo, oneMonthAgo),
    description: "Control-M integration with AWS SageMaker for machine learning",
    logoKey: "Brain",
    updateInfo: "Added support for custom algorithms",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-sns",
    name: "AWS SNS",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/sns/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with AWS SNS for notifications",
    logoKey: "Bell",
    updateInfo: "Enhanced message filtering capabilities",
    developer: "Gilad Zehavi"
  },
  {
    id: "aws-sqs",
    name: "AWS SQS",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/sqs/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS SQS for message queuing",
    logoKey: "MessageSquare",
    updateInfo: "Added support for FIFO queues",
    developer: "Gilad Zehavi"
  },
  {
    id: "azure-backup",
    name: "Azure Backup",
    category: IntegrationCategory.AZURE,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/backup/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Azure Backup for cloud backup and recovery.",
    logoKey: "Save",
    updateInfo: "Initial integration for backup management.",
    developer: "Stanislav Ashkenazi"
  },
  {
    id: "azure-batch",
    name: "Azure Batch",
    category: IntegrationCategory.AZURE,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/batch/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Azure Batch for large-scale parallel and high-performance computing.",
    logoKey: "Layers",
    updateInfo: "Initial integration for batch job orchestration.",
    developer: "Keren Surujon"
  },
  {
    id: "azure-container-instances",
    name: "Azure Container Instances",
    category: IntegrationCategory.AZURE,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/container-instances/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Azure Container Instances for running containers in the cloud.",
    logoKey: "Box",
    updateInfo: "Initial integration for container orchestration.",
    developer: "Keren Surujon"
  },
  {
    id: "azure-data-factory",
    name: "Azure Data Factory",
    category: IntegrationCategory.AZURE,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/data-factory/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Azure Data Factory for data integration and ETL workflows.",
    logoKey: "GitMerge",
    updateInfo: "Initial integration for data pipeline automation.",
    developer: "Neil Cullum, Keren Surujon"
  },
  {
    id: "databricks",
    name: "Databricks",
    category: IntegrationCategory.AZURE,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/databricks/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Azure Databricks for big data analytics and AI.",
    logoKey: "Flame",
    updateInfo: "Initial integration for analytics workflows.",
    developer: "Keren Surujon"
  },
  {
    id: "azure-devops",
    name: "Azure DevOps",
    category: IntegrationCategory.AZURE,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/devops/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Azure DevOps for CI/CD and project management.",
    logoKey: "GitBranch",
    updateInfo: "Initial integration for DevOps automation.",
    developer: "Mati Green"
  },
  {
    id: "azure-functions",
    name: "Azure Functions",
    category: IntegrationCategory.AZURE,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Azure Functions for serverless event-driven compute.",
    logoKey: "Zap",
    updateInfo: "Initial integration for serverless orchestration.",
    developer: "Tomer Berman"
  },
  {
    id: "azure-hdinsight",
    name: "Azure HDInsight",
    category: IntegrationCategory.AZURE,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/hdinsight/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Azure HDInsight for cloud Apache Hadoop and Spark.",
    logoKey: "Cloud",
    updateInfo: "Initial integration for big data workflows.",
    developer: "Asaf Yaron"
  },
  {
    id: "azure-logic-apps",
    name: "Azure Logic Apps",
    category: IntegrationCategory.AZURE,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/logic-apps/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Azure Logic Apps for workflow automation.",
    logoKey: "GitBranch",
    updateInfo: "Initial integration for logic app orchestration.",
    developer: "Tomer Berman"
  },
  {
    id: "azure-machine-learning",
    name: "Azure Machine Learning",
    category: IntegrationCategory.AZURE,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/machine-learning/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Azure Machine Learning for AI and ML workflows.",
    logoKey: "Brain",
    updateInfo: "Initial integration for machine learning orchestration.",
    developer: "Asaf Yaron"
  },
  {
    id: "azure-resource-management",
    name: "Azure Resource Management",
    category: IntegrationCategory.AZURE,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/azure-resource-manager/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Azure Resource Management for managing cloud resources.",
    logoKey: "Server",
    updateInfo: "Initial integration for resource management.",
    developer: "Asaf Yaron"
  },
  {
    id: "azure-service-bus",
    name: "Azure Service Bus",
    category: IntegrationCategory.AZURE,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Azure Service Bus for enterprise messaging.",
    logoKey: "MessageSquare",
    updateInfo: "Initial integration for messaging workflows.",
    developer: "Mati Green"
  },
  {
    id: "azure-synapse",
    name: "Azure Synapse",
    category: IntegrationCategory.AZURE,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/synapse-analytics/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Azure Synapse for analytics and data warehousing.",
    logoKey: "BarChart",
    updateInfo: "Initial integration for analytics orchestration.",
    developer: "Keren Surujon"
  },
  {
    id: "azure-vm",
    name: "Azure VM",
    category: IntegrationCategory.AZURE,
    documentationUrl: "https://learn.microsoft.com/en-us/azure/virtual-machines/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Azure Virtual Machines for compute management.",
    logoKey: "Server",
    updateInfo: "Initial integration for VM orchestration.",
    developer: "Tomer Berman"
  }
];

export const getAllCategories = (): IntegrationCategory[] => {
  return Object.values(IntegrationCategory);
};

export const getCategoryCount = (): CategoryCount[] => {
  const counts: Record<string, number> = {};
  
  integrations.forEach(integration => {
    if (counts[integration.category]) {
      counts[integration.category]++;
    } else {
      counts[integration.category] = 1;
    }
  });
  
  return Object.entries(counts).map(([category, count]) => ({
    category: category as IntegrationCategory,
    count
  }));
};

export const getIntegrationsByCategory = (category: IntegrationCategory): Integration[] => {
  return integrations.filter(integration => integration.category === category);
};

export const searchIntegrations = (query: string): Integration[] => {
  const lowerCaseQuery = query.toLowerCase();
  return integrations.filter(integration => 
    integration.name.toLowerCase().includes(lowerCaseQuery) ||
    integration.description?.toLowerCase().includes(lowerCaseQuery) ||
    integration.category.toLowerCase().includes(lowerCaseQuery) ||
    integration.developer.toLowerCase().includes(lowerCaseQuery)
  );
};

export const getIntegrationById = (id: string): Integration | undefined => {
  return integrations.find(integration => integration.id === id);
};