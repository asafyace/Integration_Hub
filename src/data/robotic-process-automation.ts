import { Integration, IntegrationCategory } from '../types';

export const roboticProcessAutomationIntegrations: Integration[] = [
  {
    id: "automation-anywhere",
    name: "Automation Anywhere",
    category: IntegrationCategory.ROBOTIC_PROCESS_AUTOMATION,
    documentationUrl: "https://www.automationanywhere.com",
    lastUpdated: "2022-07-01",
    popularity: 4,
    description: "Control-M integration with Automation Anywhere for RPA orchestration",
    logoKey: "Bot",
    updateInfo: "", // Dynamically updated from backend
    developer: "Stanislav Ashkenazi",
    githubUrl: "https://github.com/BMCDBA/automation_anywhere",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Automation_Anywhere.htm",
    apiDocumentationUrl: "https://docs.automationanywhere.com/bundle/enterprise-v2019/page/api-reference.html",
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
  }
];
