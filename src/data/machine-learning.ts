import { Integration, IntegrationCategory } from '../types';

export const machineLearningIntegrations: Integration[] = [
  {
    id: "aws-sagemaker",
    name: "AWS SageMaker",
    category: IntegrationCategory.MACHINE_LEARNING,
    documentationUrl: "https://docs.aws.amazon.com/sagemaker/latest/dg/doc-history.html",
    lastUpdated: "",
    description: "Control-M integration with AWS SageMaker for machine learning",
    logoKey: "Brain",
    updateInfo: "",
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/aws_sagemaker",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_SageMaker.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/sagemaker/latest/APIReference/Welcome.html"
  },
  {
    id: "azure-machine-learning",
    name: "Azure Machine Learning",
    category: IntegrationCategory.MACHINE_LEARNING,
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
    id: 'oracle-cloud-data-science',
    name: 'Oracle Cloud Data Science',
    category: IntegrationCategory.MACHINE_LEARNING,
    documentationUrl: 'https://docs.oracle.com/en-us/iaas/releasenotes/services/data-science/',
    controlmDocUrl: 'https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/OCI_Data_Science.htm',
    githubUrl: 'https://github.com/BMCDBA/oci_data_science',
    lastUpdated: "",
    description: 'Control-M integration with Oracle Cloud Data Science for ML and analytics workflows.',
    logoKey: 'BarChart',
    updateInfo: "", // Dynamically updated from backend
    developer: 'Asaf Yaron',
    apiDocumentationUrl: 'https://docs.oracle.com/en-us/iaas/api/#/en/data-science/20190101/'
  },
];
