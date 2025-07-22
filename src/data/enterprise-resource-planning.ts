import { Integration, IntegrationCategory } from '../types';
export const enterpriseResourcePlanningIntegrations: Integration[] = [
  {
    id: "sap-btp-scheduler",
    name: "SAP BTP Scheduler",
    category: IntegrationCategory.ENTERPRISE_RESOURCE_PLANNING,
    lastUpdated: "2025-05-01",
    popularity: 3,
    description: "Control-M for SAP BTP Scheduler enables you to trigger SAP Job Scheduler processes directly from Control-M, manage credentials securely, connect to any SAP BTP Scheduler endpoint, and integrate SAP BTP Scheduler jobs with other Control-M jobs. It provides advanced scheduling, complex dependencies, resource pools, lock resources, variables, and SLA job attachments, with full monitoring and output management.",
    developer: "Mati Green",
    documentationUrl: "https://www.sap.com/products/technology-platform.html",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/SAP_BTP_Scheduler.htm",
    githubUrl: "https://github.com/BMCDBA/SAP_BTP",
    apiDocumentationUrl: "https://api.sap.com/api/Scheduler/resource"
  },
];
