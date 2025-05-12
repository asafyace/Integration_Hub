import { Integration, IntegrationCategory } from '../types'; // Adjusted path to match the correct location

const now = new Date();
const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
const threeMonthsAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);

const getRandomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
};

export const azureIntegrations: Integration[] = [
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
    }]