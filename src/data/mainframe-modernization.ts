

export const mainframeModernizationIntegrations: Integration[] = [
  {
    id: "micro-focus-windows",
    name: "Micro Focus Windows",
    category: IntegrationCategory.MAINFRAME_MODERNIZATION,
    documentationUrl: "https://www.microfocus.com/documentation/",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-micro-focus-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with Micro Focus for enterprise software automation.",
    logoKey: "Box",
    updateInfo: "", // Dynamically updated from backend,
    developer: "Neil Cullum",
    apiDocumentationUrl: "https://www.microfocus.com/documentation/silk-performer/205/en/silkperformer-205-webhelp-en-uk/GUID-9F1E7A6F-5A2E-4B0C-8F1F-5A6D8D0E6F1F.html",
  },
  {
    id: "micro-focus-linux",
    name: "Micro Focus Windows",
    category: IntegrationCategory.MAINFRAME_MODERNIZATION,
    documentationUrl: "https://www.microfocus.com/documentation/",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-micro-focus-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with Micro Focus for enterprise software automation.",
    logoKey: "Box",
    updateInfo: "", // Dynamically updated from backend,
    developer: "Neil Cullum",
    apiDocumentationUrl: "https://www.microfocus.com/documentation/silk-performer/205/en/silkperformer-205-webhelp-en-uk/GUID-9F1E7A6F-5A2E-4B0C-8F1F-5A6D8D0E6F1F.html",
  },
  {
    id: "aws-m2",
    name: "AWS Mainframe Modernization",
    category: IntegrationCategory.MAINFRAME_MODERNIZATION,
    documentationUrl: "https://docs.aws.amazon.com/m2/latest/userguide/release-notes.html",
    lastUpdated: "Aug-23",
    currentVersion: "1.0.02",
    description: "Control-M integration with AWS M2 for mainframe workloads",
    logoKey: "Server",
    updateInfo: "",
    developer: "Asaf Yaron",
    githubUrl: "https://github.com/BMCDBA/aws_mainframe_modernization",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.21.300/en-US/Documentation/AWS_Mainframe_Modernization.htm",
    apiDocumentationUrl: "https://docs.aws.amazon.com/m2/latest/APIReference/Welcome.html"
  }
];
import { Integration, IntegrationCategory } from '../types';
