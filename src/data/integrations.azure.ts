import { Integration, IntegrationCategory } from '../types'; // Adjusted path to match the correct location

export const azureIntegrations: Integration[] = [
    {
      id: "azure-backup",
      name: "Azure Backup",
      category: IntegrationCategory.AZURE,
      documentationUrl: "https://learn.microsoft.com/en-us/azure/backup/whats-new",
      lastUpdated: "",
      description: "Control-M integration with Azure Backup for cloud backup and recovery.",
      logoKey: "Save",
      updateInfo: "", // Dynamically updated from backend
      developer: "Stanislav Ashkenazi",
      githubUrl: "https://github.com/BMCDBA/azure_backup",
      controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_Backup.htm",
      apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/backup/'
    },
    {
      id: "azure-batch",
      name: "Azure Batch",
      category: IntegrationCategory.AZURE,
      documentationUrl: "https://learn.microsoft.com/en-us/azure/batch/whats-new",
      lastUpdated: "",
      description: "Control-M integration with Azure Batch for large-scale parallel and high-performance computing.",
      logoKey: "Layers",
      updateInfo: "", // Dynamically updated from backend
      developer: "Keren Surujon",
      githubUrl: "https://github.com/BMCDBA/azure_batch",
      controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_Batch.htm",
      apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/batchservice/'
    },
    {
      id: "azure-container-instances",
      name: "Azure Container Instances",
      category: IntegrationCategory.AZURE,
      documentationUrl: "https://learn.microsoft.com/en-us/azure/container-instances/release-notes",
      lastUpdated: "",
      description: "Control-M integration with Azure Container Instances for running containers in the cloud.",
      logoKey: "Box",
      updateInfo: "", // Dynamically updated from backend
      developer: "Keren Surujon",
      githubUrl: "https://github.com/BMCDBA/azure_container_instances",
      controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_Container_Instances.htm",
      apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/container-instances/'
    },
    {
      id: "azure-data-factory",
      name: "Azure Data Factory",
      category: IntegrationCategory.AZURE,
      documentationUrl: "https://learn.microsoft.com/en-us/azure/data-factory/whats-new",
      lastUpdated: "",
      description: "Control-M integration with Azure Data Factory for data integration and ETL workflows.",
      logoKey: "GitMerge",
      updateInfo: "", // Dynamically updated from backend
      developer: "Neil Cullum, Keren Surujon",
      githubUrl: "https://github.com/BMCDBA/azure_data_factory",
      controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_Data_Factory.htm",
      apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/datafactory/'
    },
    {
      id: "azure-devops",
      name: "Azure DevOps",
      category: IntegrationCategory.AZURE,
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
    {
      id: "azure-functions",
      name: "Azure Functions",
      category: IntegrationCategory.AZURE,
      documentationUrl: "https://learn.microsoft.com/en-us/azure/azure-functions/release-notes",
      lastUpdated: "",
      description: "Control-M integration with Azure Functions for serverless event-driven compute.",
      logoKey: "Zap",
      updateInfo: "", // Dynamically updated from backend
      developer: "Tomer Berman",
      githubUrl: "https://github.com/BMCDBA/azure_functions",
      controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_Functions.htm",
      apiDocumentationUrl: 'https://learn.microsoft.com/en-us/azure/azure-functions/'
    },
    {
      id: "azure-hdinsight",
      name: "Azure HDInsight",
      category: IntegrationCategory.AZURE,
      documentationUrl: "https://learn.microsoft.com/en-us/azure/hdinsight/whats-new",
      lastUpdated: "",
      description: "Control-M integration with Azure HDInsight for cloud Apache Hadoop and Spark.",
      logoKey: "Cloud",
      updateInfo: "", // Dynamically updated from backend
      developer: "Asaf Yaron",
      githubUrl: "https://github.com/BMCDBA/azure_hdinsight",
      controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_HDInsight.htm",
      apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/hdinsight/'
    },
    {
      id: "azure-logic-apps",
      name: "Azure Logic Apps",
      category: IntegrationCategory.AZURE,
      documentationUrl: "https://learn.microsoft.com/en-us/azure/logic-apps/release-notes",
      lastUpdated: "",
      description: "Control-M integration with Azure Logic Apps for workflow automation.",
      logoKey: "GitBranch",
      updateInfo: "", // Dynamically updated from backend
      developer: "Tomer Berman",
      githubUrl: "https://github.com/BMCDBA/azure_logic_apps",
      controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_Logic_Apps.htm",
      apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/logic/'
    },
    {
      id: "azure-machine-learning",
      name: "Azure Machine Learning",
      category: IntegrationCategory.AZURE,
      documentationUrl: "https://learn.microsoft.com/en-us/azure/machine-learning/release-notes",
      lastUpdated: "",
      description: "Control-M integration with Azure Machine Learning for AI and ML workflows.",
      logoKey: "Brain",
      updateInfo: "", // Dynamically updated from backend
      developer: "Asaf Yaron",
      githubUrl: "https://github.com/BMCDBA/azure_machine_learning",
      controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_Machine_Learning.htm",
      apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/azureml/'
    },
    {
      id: "azure-resource-management",
      name: "Azure Resource Management",
      category: IntegrationCategory.AZURE,
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
      id: "azure-service-bus",
      name: "Azure Service Bus",
      category: IntegrationCategory.AZURE,
      documentationUrl: "https://learn.microsoft.com/en-us/azure/service-bus-messaging/whats-new",
      lastUpdated: "",
      description: "Control-M integration with Azure Service Bus for enterprise messaging.",
      logoKey: "MessageSquare",
      updateInfo: "", // Dynamically updated from backend
      developer: "Mati Green",
      githubUrl: "https://github.com/BMCDBA/azure_service_bus",
      controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_Service_Bus.htm",
      apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/servicebus/'
    },
    {
      id: "azure-synapse",
      name: "Azure Synapse",
      category: IntegrationCategory.AZURE,
      documentationUrl: "https://learn.microsoft.com/en-us/azure/synapse-analytics/whats-new",
      lastUpdated: "",
      description: "Control-M integration with Azure Synapse for analytics and data warehousing.",
      logoKey: "BarChart",
      updateInfo: "", // Dynamically updated from backend
      developer: "Keren Surujon",
      githubUrl: "https://github.com/BMCDBA/azure_synapse",
      controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/Azure_Synapse.htm",
      apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/synapse/'
    },
    {
      id: "azure-vm",
      name: "Azure VM",
      category: IntegrationCategory.AZURE,
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
      id: "azure-databricks",
      name: "Azure Databricks",
      category: IntegrationCategory.AZURE,
      documentationUrl: "https://learn.microsoft.com/en-us/azure/databricks/release-notes",
      controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-azure-databricks-123456789.html",
      githubUrl: "https://github.com/bmc-compuware/controlm-azure-databricks-integration",
      apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/databricks',
      lastUpdated: "",
      description: "Control-M integration with Azure Databricks for big data analytics and machine learning workflows.",
      logoKey: "Database",
      updateInfo: "", // Dynamically updated from backend
      developer: "Neil Cullum ,Keren Surujon"
    }
];