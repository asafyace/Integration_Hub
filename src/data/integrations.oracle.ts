import { Integration, IntegrationCategory } from '../types';



export const oracleIntegrations: Integration[] = [
  {
    id: 'oracle-cloud-data-flow',
    name: 'Oracle Cloud Data Flow',
    category: IntegrationCategory.ORACLE_CLOUD,
    documentationUrl: 'https://docs.oracle.com/en-us/iaas/releasenotes/services/data-flow/',
    controlmDocUrl: 'https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/OCI_Data_Flow.htm',
    githubUrl: 'https://github.com/BMCDBA/oci_data_flow',
    lastUpdated: "",
    description: 'Control-M integration with Oracle Cloud Data Flow for data processing pipelines.',
    logoKey: 'Cloud',
    updateInfo: "", // Dynamically updated from backend
    developer: 'Tomer Berman',
    apiDocumentationUrl: 'https://docs.oracle.com/en-us/iaas/api/#/en/data-flow/20200129/'
  },
  {
    id: 'oracle-cloud-data-integration',
    name: 'Oracle Cloud Data Integration',
    category: IntegrationCategory.ORACLE_CLOUD,
    documentationUrl: 'https://docs.oracle.com/iaas/releasenotes/services/data-integration/',
    controlmDocUrl: 'https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/OCI_Data_Integration.htm',
    githubUrl: 'https://github.com/BMCDBA/oci_data_integration',
    lastUpdated: "",
    description: 'Control-M integration with Oracle Cloud Data Integration for ETL and data workflows.',
    logoKey: 'GitMerge',
    updateInfo: "", // Dynamically updated from backend
    developer: 'Mati Green',
    apiDocumentationUrl: 'https://docs.oracle.com/en-us/iaas/api/#/en/data-integration/20200430/'
  },
  {
    id: 'oracle-cloud-data-science',
    name: 'Oracle Cloud Data Science',
    category: IntegrationCategory.ORACLE_CLOUD,
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
  {
    id: 'oracle-cloud-functions',
    name: 'Oracle Cloud Functions',
    category: IntegrationCategory.ORACLE_CLOUD,
    documentationUrl: 'https://docs.oracle.com/en-us/iaas/releasenotes/services/functions/',
    controlmDocUrl: 'https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/OCI_Functions.htm',
    githubUrl: 'https://github.com/BMCDBA/oci_functions',
    lastUpdated: "",
    description: 'Control-M integration with Oracle Cloud Functions for serverless automation.',
    logoKey: 'Terminal',
    updateInfo: "", // Dynamically updated from backend
    developer: 'Keren Surujon',
    apiDocumentationUrl: 'https://docs.oracle.com/en-us/iaas/api/#/en/functions/20181201/'
  },
  {
    id: 'oracle-cloud-vm',
    name: 'Oracle Cloud VM',
    category: IntegrationCategory.ORACLE_CLOUD,
    documentationUrl: 'https://docs.oracle.com/en-us/iaas/releasenotes/services/compute/',
    controlmDocUrl: 'https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/OCI_VM.htm',
    githubUrl: 'https://github.com/BMCDBA/oci_vm',
    lastUpdated: "",
    description: 'Control-M integration with Oracle Cloud VM for virtual machine management.',
    logoKey: 'Server',
    updateInfo: "", // Dynamically updated from backend
    developer: 'Asaf Yaron',
    apiDocumentationUrl: 'https://docs.oracle.com/en-us/iaas/api/#/en/iaas/20160918/Instance/'
  }
];
