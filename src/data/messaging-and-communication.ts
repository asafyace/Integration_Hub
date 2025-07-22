import { Integration, IntegrationCategory } from '../types';

export const messagingAndCommunicationIntegrations: Integration[] = [
  {
    id: 'communication-suite',
    name: 'Communication Suite',
    category: IntegrationCategory.MESSAGING_AND_COMMUNICATION,
    documentationUrl: '',
    lastUpdated: '2023-03-01',
    popularity: 2,
    description: 'Communication Suite provides unified messaging and collaboration tools for enterprises.',
    developer: 'Asaf Yaron, Gilad Zehavi',
    githubUrl: 'https://github.com/BMCDBA/communication_suite',
    controlmDocUrl: 'https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Communication_Suite.htm',
    apiDocumentationUrl: ''
  },
  {
    id: 'datadog',
    name: 'Datadog',
    category: IntegrationCategory.MESSAGING_AND_COMMUNICATION,
    documentationUrl: 'https://www.datadoghq.com',
    lastUpdated: '2025-05-01',
    popularity: 5,
    description: 'Datadog is a monitoring and analytics platform for large-scale applications and infrastructure.',
    developer: 'Asaf Yaron',
    githubUrl: 'https://github.com/BMCDBA/Datadog',
    controlmDocUrl: 'https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/Datadog.htm',
    apiDocumentationUrl: 'https://docs.datadoghq.com/api/latest/'
  },
  {
    id: 'pagerduty',
    name: 'PagerDuty',
    category: IntegrationCategory.MESSAGING_AND_COMMUNICATION,
    documentationUrl: 'https://www.pagerduty.com',
    lastUpdated: '2024-09-01',
    popularity: 4,
    description: 'PagerDuty provides incident response and digital operations management.',
    developer: 'Asaf Yaron',
    githubUrl: 'https://github.com/BMCDBA/PagerDuty',
    controlmDocUrl: 'https://documents.bmc.com/supportu/9.0.22/en-US/Documentation/PagerDuty.htm',
    apiDocumentationUrl: 'https://developer.pagerduty.com/api-reference/'
  },
];
