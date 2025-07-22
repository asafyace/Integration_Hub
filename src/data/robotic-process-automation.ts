import { Integration, IntegrationCategory } from '../types';

export const roboticProcessAutomationIntegrations: Integration[] = [
  {
    id: "automation-anywhere",
    name: "Automation Anywhere",
    category: IntegrationCategory.ROBOTIC_PROCESS_AUTOMATION,
    documentationUrl: "",
    lastUpdated: "",
    description: "Control-M integration with Automation Anywhere for RPA orchestration.",
    logoKey: "Bot",
    updateInfo: "",
    developer: "",
    apiDocumentationUrl: ""
  },
  {
    id: "matillion",
    name: "Matillion",
    category: IntegrationCategory.ROBOTIC_PROCESS_AUTOMATION,
    documentationUrl: "https://documentation.matillion.com/docs",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-matillion-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with Matillion for cloud ETL workflows.",
    logoKey: "Flask",
    updateInfo: "", // Dynamically updated from backend
    developer: "Mati Green",
    apiDocumentationUrl: "https://docs.matillion.com/docs/matillion-etl-rest-api",
  },
  {
    id: "automation-anywhere",
    name: "Automation Anywhere",
    category: IntegrationCategory.ROBOTIC_PROCESS_AUTOMATION,
    documentationUrl: "https://docs.automationanywhere.com/",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-automation-anywhere-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with Automation Anywhere for RPA orchestration",
    logoKey: "Bot",
    updateInfo: "", // Dynamically updated from backend
    developer: "Stanislav Ashkenazi",
    apiDocumentationUrl: "https://docs.automationanywhere.com/bundle/enterprise-v2019/page/enterprise-cloud/topics/control-room/control-room-api/cloud-control-room-apis.html",
  },
  {
    id: "uipath",
    name: "UiPath",
    category: IntegrationCategory.ROBOTIC_PROCESS_AUTOMATION,
    documentationUrl: "https://docs.uipath.com/",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-uipath-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-uipath-integration",
    lastUpdated: "",
    description: "Control-M integration with UiPath for robotic process automation.",
    logoKey: "Bot",
    updateInfo: "", // Dynamically updated from backend
    developer: "Neil Cullum, Tomer Berman",
    apiDocumentationUrl: "https://docs.uipath.com/activities/docs/web-api"
  },
];
