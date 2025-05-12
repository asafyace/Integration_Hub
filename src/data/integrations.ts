import { Integration, IntegrationCategory, CategoryCount } from '../types';
import { awsIntegrations } from './integrations.aws';
import { gcpIntegrations } from './integrations.gcp';
import { azureIntegrations } from './integrations.azure';

const now = new Date();
const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
const threeMonthsAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);

const getRandomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
};

// Only non-AWS, non-GCP, non-Azure integrations are kept here
const localIntegrations: Integration[] = [
  {
    id: "airbyte",
    name: "Airbyte",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://docs.airbyte.com/api-documentation",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Airbyte for ELT pipeline automation",
    logoKey: "Boxes",
    updateInfo: "Added support for custom connectors and improved error handling",
    developer: "Mati Green"
  },
  {
    id: "alteryx-trifacta",
    name: "Alteryx Trifacta",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://docs.trifacta.com/display/HOME/API+Reference",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with Alteryx Trifacta for data preparation workflows",
    logoKey: "LayoutDashboard",
    updateInfo: "Enhanced workflow scheduling and monitoring capabilities",
    developer: "Gilad Zehavi"
  },
  {
    id: "ansible-tower-awx",
    name: "Ansible Tower/AWX",
    category: IntegrationCategory.INFRASTRUCTURE,
    documentationUrl: "https://docs.ansible.com/ansible-tower/latest/html/towerapi/",
    lastUpdated: getRandomDate(threeMonthsAgo, oneMonthAgo),
    description: "Control-M integration with Ansible Tower for infrastructure automation",
    logoKey: "Terminal",
    updateInfo: "Added support for dynamic inventory and role-based access control",
    developer: "Asaf Yaron"
  },
  {
    id: "apache-airflow",
    name: "Apache Airflow",
    category: IntegrationCategory.WORKFLOW_AUTOMATION,
    documentationUrl: "https://airflow.apache.org/docs/apache-airflow/stable/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with Apache Airflow for workflow orchestration",
    logoKey: "Wind",
    updateInfo: "Improved DAG synchronization and error recovery",
    developer: "Gilad Zehavi"
  },
  {
    id: "apache-nifi",
    name: "Apache NiFi",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://nifi.apache.org/docs.html",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Apache NiFi for data flow automation",
    logoKey: "Share2",
    updateInfo: "Enhanced data flow monitoring and alerting",
    developer: "Stanislav Ashkenazi"
  },
  {
    id: "astronomer",
    name: "Astronomer",
    category: IntegrationCategory.WORKFLOW_AUTOMATION,
    documentationUrl: "https://www.astronomer.io/docs/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with Astronomer for Apache Airflow management",
    logoKey: "Rocket",
    updateInfo: "Added support for Astronomer Cloud deployments",
    developer: "Gilad Zehavi"
  },
  {
    id: "automation-anywhere",
    name: "Automation Anywhere",
    category: IntegrationCategory.WORKFLOW_AUTOMATION,
    documentationUrl: "https://docs.automationanywhere.com/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Automation Anywhere for RPA orchestration",
    logoKey: "Bot",
    updateInfo: "Enhanced bot deployment and monitoring capabilities",
    developer: "Stanislav Ashkenazi"
  },
  {
    id: "boomi-atomsphere",
    name: "Boomi Atomsphere",
    category: IntegrationCategory.MISC,
    documentationUrl: "https://help.boomi.com/bundle/integration/page/c-atm-Atomsphere.html",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Boomi Atomsphere for cloud integration and workflow automation.",
    logoKey: "Cloud",
    updateInfo: "Initial integration for Boomi workflows.",
    developer: "Guy Shavit"
  },
  {
    id: "circleci",
    name: "CircleCI",
    category: IntegrationCategory.MISC,
    documentationUrl: "https://circleci.com/docs/api/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with CircleCI for CI/CD automation.",
    logoKey: "GitBranch",
    updateInfo: "Initial integration for CircleCI pipelines.",
    developer: "Asaf Yaron"
  },
  {
    id: "communication-suite",
    name: "Communication Suite",
    category: IntegrationCategory.COMMUNICATION,
    documentationUrl: "https://example.com/communication-suite-docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Communication Suite for unified messaging.",
    logoKey: "MessageSquare",
    updateInfo: "Initial integration for communication workflows.",
    developer: "Asaf Yaron, Gilad Zehavi"
  },
  {
    id: "dbt",
    name: "DBT",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://docs.getdbt.com/docs/introduction",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with DBT for data transformation workflows.",
    logoKey: "GitMerge",
    updateInfo: "Initial integration for DBT transformations.",
    developer: "Mati Green"
  },
  {
    id: "fivetran",
    name: "Fivetran",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://fivetran.com/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Fivetran for automated data pipelines.",
    logoKey: "Flow",
    updateInfo: "Initial integration for Fivetran connectors.",
    developer: "Mati Green"
  },
  {
    id: "ibm-datastage",
    name: "IBM Datastage",
    category: IntegrationCategory.IBM,
    documentationUrl: "https://www.ibm.com/docs/en/iis/11.7?topic=SSZJPZ_11.7.0/com.ibm.swg.im.iis.ds.parjob.dev.doc/topics/c_developing_parallel_jobs.html",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with IBM Datastage for ETL and data integration.",
    logoKey: "Database",
    updateInfo: "Initial integration for IBM Datastage jobs.",
    developer: "Guy Shavit"
  },
  {
    id: "informatica-cs",
    name: "Informatica CS",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://docs.informatica.com/integration-cloud/cloud-data-integration/current-version.html",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Informatica Cloud Services for data integration.",
    logoKey: "Cloud",
    updateInfo: "Initial integration for Informatica CS.",
    developer: "Tomer Berman"
  },
  {
    id: "jenkins",
    name: "Jenkins",
    category: IntegrationCategory.WORKFLOW_AUTOMATION,
    documentationUrl: "https://www.jenkins.io/doc/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Jenkins for CI/CD automation.",
    logoKey: "GitBranch",
    updateInfo: "Initial integration for Jenkins pipelines.",
    developer: "Asaf Yaron"
  },
  {
    id: "matillion",
    name: "Matillion",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://documentation.matillion.com/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Matillion for cloud ETL workflows.",
    logoKey: "Flask",
    updateInfo: "Initial integration for Matillion jobs.",
    developer: "Mati Green"
  },
  {
    id: "micro-focus",
    name: "Micro Focus",
    category: IntegrationCategory.MISC,
    documentationUrl: "https://www.microfocus.com/documentation/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Micro Focus for enterprise software automation.",
    logoKey: "Box",
    updateInfo: "Initial integration for Micro Focus tools.",
    developer: "Neil Cullum"
  },
  {
    id: "microsoft-power-bi",
    name: "Microsoft Power BI",
    category: IntegrationCategory.ANALYTICS,
    documentationUrl: "https://docs.microsoft.com/en-us/power-bi/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Microsoft Power BI for business analytics.",
    logoKey: "BarChart",
    updateInfo: "Initial integration for Power BI dashboards.",
    developer: "Asaf Yaron"
  },
  {
    id: "openshift-kubernetes",
    name: "Openshift Kubernetes",
    category: IntegrationCategory.INFRASTRUCTURE,
    documentationUrl: "https://docs.openshift.com/container-platform/latest/welcome/index.html",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Openshift Kubernetes for container orchestration.",
    logoKey: "Box",
    updateInfo: "Initial integration for Openshift Kubernetes.",
    developer: "Jacques Guzy"
  },
  {
    id: "pagerduty",
    name: "PagerDuty",
    category: IntegrationCategory.COMMUNICATION,
    documentationUrl: "https://developer.pagerduty.com/docs/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with PagerDuty for incident management.",
    logoKey: "Bell",
    updateInfo: "Initial integration for PagerDuty alerts.",
    developer: "Asaf Yaron"
  },
  {
    id: "qlik-cloud",
    name: "Qlik Cloud",
    category: IntegrationCategory.ANALYTICS,
    documentationUrl: "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/Introduction/qlik-cloud-intro.htm",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Qlik Cloud for analytics and business intelligence.",
    logoKey: "BarChart",
    updateInfo: "Initial integration for Qlik Cloud dashboards.",
    developer: "Guy Shavit"
  },
  {
    id: "rabbitmq",
    name: "RabbitMQ",
    category: IntegrationCategory.COMMUNICATION,
    documentationUrl: "https://www.rabbitmq.com/documentation.html",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with RabbitMQ for message queuing.",
    logoKey: "MessageSquare",
    updateInfo: "Initial integration for RabbitMQ queues.",
    developer: "Stanislav Ashkenazi"
  },
  {
    id: "snowflake",
    name: "Snowflake",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://docs.snowflake.com/en/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Snowflake for cloud data warehousing.",
    logoKey: "Database",
    updateInfo: "Initial integration for Snowflake warehouses.",
    developer: "Mati Green"
  },
  {
    id: "tableau",
    name: "Tableau",
    category: IntegrationCategory.ANALYTICS,
    documentationUrl: "https://help.tableau.com/current/guides/everybody-install/en-us/everybody_install_overview.htm",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Tableau for data visualization.",
    logoKey: "BarChart",
    updateInfo: "Initial integration for Tableau dashboards.",
    developer: "Stanislav Ashkenazi"
  },
  {
    id: "talend",
    name: "Talend",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://help.talend.com/r/en-US/8.0",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Talend for data integration and ETL workflows.",
    logoKey: "GitMerge",
    updateInfo: "Initial integration for Talend jobs.",
    developer: "Asaf Yaron"
  },
  {
    id: "terraform",
    name: "Terraform",
    category: IntegrationCategory.INFRASTRUCTURE,
    documentationUrl: "https://developer.hashicorp.com/terraform/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Terraform for infrastructure as code.",
    logoKey: "Cloud",
    updateInfo: "Initial integration for Terraform modules.",
    developer: "Tomer Berman"
  },
  {
    id: "uipath",
    name: "UiPath",
    category: IntegrationCategory.WORKFLOW_AUTOMATION,
    documentationUrl: "https://docs.uipath.com/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with UiPath for robotic process automation.",
    logoKey: "Bot",
    updateInfo: "Initial integration for UiPath bots.",
    developer: "Neil Cullum, Tomer Berman"
  },
  {
    id: "veritas-netbackup",
    name: "Veritas NetBackup",
    category: IntegrationCategory.INFRASTRUCTURE,
    documentationUrl: "https://www.veritas.com/support/en_US/article.100038989",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Veritas NetBackup for enterprise backup and recovery.",
    logoKey: "Save",
    updateInfo: "Initial integration for NetBackup jobs.",
    developer: "Gilad Zehavi"
  },
  {
    id: "vmware",
    name: "Vmware",
    category: IntegrationCategory.INFRASTRUCTURE,
    documentationUrl: "https://docs.vmware.com/en/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Vmware for virtualization management.",
    logoKey: "Server",
    updateInfo: "Initial integration for Vmware orchestration.",
    developer: "Gilad Zehavi"
  }
];

export const integrations: Integration[] = [
  ...localIntegrations,
  ...awsIntegrations,
  ...gcpIntegrations,
  ...azureIntegrations,
];

export const getAllCategories = (): IntegrationCategory[] => {
  return Object.values(IntegrationCategory);
};

export const getCategoryCount = (): CategoryCount[] => {
  const counts: Record<string, number> = {};
  integrations.forEach(integration => {
    if (counts[integration.category]) {
      counts[integration.category]++;
    } else {
      counts[integration.category] = 1;
    }
  });
  return Object.entries(counts).map(([category, count]) => ({
    category: category as IntegrationCategory,
    count
  }));
};

export const getIntegrationsByCategory = (category: IntegrationCategory): Integration[] => {
  return integrations.filter(integration => integration.category === category);
};

export const searchIntegrations = (query: string): Integration[] => {
  const lowerCaseQuery = query.toLowerCase();
  return integrations.filter(integration => 
    integration.name.toLowerCase().includes(lowerCaseQuery) ||
    integration.description?.toLowerCase().includes(lowerCaseQuery) ||
    integration.category.toLowerCase().includes(lowerCaseQuery) ||
    integration.developer.toLowerCase().includes(lowerCaseQuery)
  );
};

export const getIntegrationById = (id: string): Integration | undefined => {
  return integrations.find(integration => integration.id === id);
};

// Simulate fetching real update info for AWS App Runner
export async function fetchAwsAppRunnerUpdateInfo() {
  const response = await fetch('http://localhost:4000/api/aws-app-runner/latest-update');
  if (!response.ok) throw new Error('Failed to fetch update info');
  return await response.json();
}

// Fetch real update info for Airbyte
export async function fetchAirbyteUpdateInfo() {
  const response = await fetch('http://localhost:4000/api/rss-latest?url=https://docs.airbyte.com/changelog/rss.xml');
  if (!response.ok) throw new Error('Failed to fetch Airbyte update info');
  return await response.json();
}