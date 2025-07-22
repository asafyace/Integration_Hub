import { Integration, IntegrationCategory } from '../types';

export const machineLearningIntegrations: Integration[] = [
  {
    id: "aws-sagemaker",
    name: "AWS SageMaker",
    category: IntegrationCategory.MACHINE_LEARNING,
    documentationUrl: "https://aws.amazon.com/sagemaker/",
    lastUpdated: "2023-02-01",
    popularity: 5,
    description: "Control-M integration with AWS SageMaker for machine learning",
    logoKey: "Brain",
    updateInfo: "",
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/aws_sagemaker",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Amazon_SageMaker.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/sagemaker/latest/APIReference/"
  },
  {
    id: "azure-machine-learning",
    name: "Azure Machine Learning",
    category: IntegrationCategory.MACHINE_LEARNING,
    documentationUrl: "https://azure.microsoft.com/en-us/services/machine-learning/",
    lastUpdated: "2023-02-01",
    popularity: 5,
    description: "Control-M integration with Azure Machine Learning for AI and ML workflows.",
    logoKey: "Brain",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/azure_machine_learning",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Azure_Machine_Learning.htm",
    apiDocumentationUrl: 'https://learn.microsoft.com/en-us/rest/api/azureml/'
  },
  {
    id: 'oracle-cloud-data-science',
    name: 'OCI Data Science',
    category: IntegrationCategory.MACHINE_LEARNING,
    documentationUrl: 'https://www.oracle.com/cloud/data-science/',
    lastUpdated: "2024-05-01",
    popularity: 3,
    description: 'Control-M integration with Oracle Cloud Data Science for ML and analytics workflows.',
    logoKey: 'BarChart',
    updateInfo: "", // Dynamically updated from backend
    developer: 'Asaf Yaron',
    githubUrl: 'https://github.com/BMCDBA/oci_data_science',
    controlmDocUrl: 'https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/OCI_Data_Science.htm',
    apiDocumentationUrl: 'https://docs.oracle.com/en-us/iaas/data-science/api/'
  },
];
