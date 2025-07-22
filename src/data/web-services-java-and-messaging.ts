import { Integration, IntegrationCategory } from '../types';

export const webServicesJavaAndMessagingIntegrations: Integration[] = [
  {
    id: "web-services-rest",
    name: "Web Services REST",
    category: IntegrationCategory.WEB_SERVICES_JAVA_AND_MESSAGING,
    documentationUrl: "https://restfulapi.net/",
    lastUpdated: "2023-07-01",
    popularity: 4,
    description: "RESTful web services integration.",
    developer: "Keren Surujon",
    githubUrl: "https://github.com/BMCDBA/web_services_rest",
    controlmDocUrl: "https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Web_Services_SOAP.htm",
    apiDocumentationUrl: "https://restfulapi.net/"
  },
  {
    id: "web-services-soap",
    name: "Web Services SOAP",
    category: IntegrationCategory.WEB_SERVICES_JAVA_AND_MESSAGING,
    documentationUrl: "https://www.w3schools.com/xml/xml_soap.asp",
    lastUpdated: "2023-07-01",
    popularity: 3,
    description: "SOAP web services integration.",
    developer: "Keren Surujon",
    githubUrl: "https://github.com/BMCDBA/web_services_soap",
    controlmDocUrl: '',
    apiDocumentationUrl: "https://www.w3schools.com/xml/xml_soap.asp"
  },
];
