

export const mainframeModernizationIntegrations: Integration[] = [
  {
    id: "micro-focus-windows",
    name: "Micro Focus Windows",
    category: IntegrationCategory.MAINFRAME_MODERNIZATION,
    documentationUrl: "https://www.microfocus.com",
    lastUpdated: "2023-03-01",
    popularity: 2,
    description: "Control-M integration with Micro Focus for enterprise software automation.",
    logoKey: "Box",
    updateInfo: "", // Dynamically updated from backend,
    developer: "Neil Cullum",
    githubUrl: "https://github.com/BMCDBA/micro_focus",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Micro_Focus.htm",
    apiDocumentationUrl: "https://www.microfocus.com/documentation/"
  },
  {
    id: "micro-focus-linux",
    name: "Micro Focus Linux",
    category: IntegrationCategory.MAINFRAME_MODERNIZATION,
    documentationUrl: "https://www.microfocus.com",
    lastUpdated: "2023-03-01",
    popularity: 2,
    description: "Control-M integration with Micro Focus for enterprise software automation.",
    logoKey: "Box",
    updateInfo: "", // Dynamically updated from backend,
    developer: "Neil Cullum",
    githubUrl: "https://github.com/BMCDBA/micro_focus_linux",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Micro_Focus.htm",
    apiDocumentationUrl: "https://www.microfocus.com/documentation/"
  },
  {
    id: "aws-m2",
    name: "AWS Mainframe Modernization",
    category: IntegrationCategory.MAINFRAME_MODERNIZATION,
    documentationUrl: "https://aws.amazon.com/mainframe-modernization/",
    lastUpdated: "2023-08-01",
    popularity: 2,
    description: "Control-M integration with AWS M2 for mainframe workloads",
    logoKey: "Server",
    updateInfo: "",
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/aws_mainframe_modernization",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/AWS_Mainframe_Modernization.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/m2/latest/APIReference/"
  }
];
import { Integration, IntegrationCategory } from '../types';
