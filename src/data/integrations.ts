import { Integration, IntegrationCategory, CategoryCount } from '../types';


// Only non-AWS, non-GCP, non-Azure integrations are kept here
const localIntegrations: Integration[] = [
  {
    id: "airbyte",
    name: "Airbyte",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://docs.airbyte.com/api-documentation",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-airbyte-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-airbyte-integration",
    lastUpdated: "",
    description: "Control-M integration with Airbyte for ELT pipeline automation",
    logoKey: "Boxes",
    updateInfo: "", // Dynamically updated from backend
    developer: "Mati Green",
    apiDocumentationUrl: "https://docs.airbyte.com/platform/api-documentation"
  },
  {
    id: "alteryx-trifacta",
    name: "Alteryx Trifacta",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://docs.trifacta.com/display/HOME/API+Reference",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-alteryx-trifacta-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-alteryx-trifacta-integration",
    lastUpdated: "",
    description: "Control-M integration with Alteryx Trifacta for data preparation workflows",
    logoKey: "LayoutDashboard",
    updateInfo: "", // Dynamically updated from backend
    developer: "Gilad Zehavi",
    apiDocumentationUrl: "https://api.trifacta.com/"
  },
  {
    id: "ansible-tower-awx",
    name: "Ansible Tower/AWX",
    category: IntegrationCategory.INFRASTRUCTURE_AS_CODE,
    documentationUrl: "https://docs.ansible.com/ansible-tower/latest/html/towerapi/",
    githubUrl: "https://github.com/bmc-compuware/controlm-ansible-tower-integration",
    lastUpdated: "",
    description: "Control-M integration with Ansible Tower for infrastructure automation",
    logoKey: "Terminal",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    apiDocumentationUrl: "https://ansible.readthedocs.io/projects/awx/en/latest/rest_api/api_ref.html",
  },
  {
    id: "apache-airflow",
    name: "Apache Airflow",
    category: IntegrationCategory.APPLICATION_WORKFLOWS,
    documentationUrl: "https://airflow.apache.org/docs/apache-airflow/stable/",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-apache-airflow-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with Apache Airflow for workflow orchestration",
    logoKey: "Wind",
    updateInfo: "", // Dynamically updated from backend
    developer: "Gilad Zehavi",
    apiDocumentationUrl: "https://airflow.apache.org/docs/apache-airflow/stable/stable-rest-api-ref.html",
  },
  {
    id: "apache-nifi",
    name: "Apache NiFi",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://nifi.apache.org/docs.html",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-apache-nifi-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with Apache NiFi for data flow automation",
    logoKey: "Share2",
    updateInfo: "", // Dynamically updated from backend
    developer: "Stanislav Ashkenazi",
    apiDocumentationUrl: "https://nifi.apache.org/docs/nifi-docs/rest-api/index.html",
  },
  {
    id: "astronomer",
    name: "Astronomer",
    category: IntegrationCategory.APPLICATION_WORKFLOWS,
    documentationUrl: "https://www.astronomer.io/docs/",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-astronomer-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with Astronomer for Apache Airflow management",
    logoKey: "Rocket",
    updateInfo: "", // Dynamically updated from backend
    developer: "Gilad Zehavi",
    apiDocumentationUrl: "https://www.astronomer.io/docs/astro/airflow-api/",
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
    id: "boomi-atomsphere",
    name: "Boomi Atomsphere",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://help.boomi.com/bundle/integration/page/c-atm-Atomsphere.html",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-boomi-atomsphere-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with Boomi Atomsphere for cloud integration and workflow automation.",
    logoKey: "Cloud",
    updateInfo: "", // Dynamically updated from backend
    developer: "Guy Shavit",
    apiDocumentationUrl: "https://community.boomi.com/s/article/automatingdeploymentswiththeatomsphereapi",
  },
  {
    id: "circleci",
    name: "CircleCI",
    category: IntegrationCategory.CI_CD,
    documentationUrl: "https://circleci.com/docs/api/",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-circleci-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with CircleCI for CI/CD automation.",
    logoKey: "GitBranch",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    apiDocumentationUrl: "https://circleci.com/docs/api/v2/index.html",
  },
  {
    id: "dbt",
    name: "DBT",
    category: IntegrationCategory.BUSINESS_INTELLIGENCE_AND_ANALYTICS,
    documentationUrl: "https://docs.getdbt.com/docs/introduction",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-dbt-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with DBT for data transformation workflows.",
    logoKey: "GitMerge",
    updateInfo: "", // Dynamically updated from backend
    developer: "Mati Green",
    apiDocumentationUrl: "https://docs.getdbt.com/docs/dbt-cloud-apis/overview",
  },
  {
    id: "ibm-datastage",
    name: "IBM Datastage",
    category: IntegrationCategory.BUSINESS_INTELLIGENCE_AND_ANALYTICS,
    documentationUrl: "https://www.ibm.com/docs/en/iis/11.7?topic=SSZJPZ_11.7.0/com.ibm.swg.im.iis.ds.parjob.dev.doc/topics/c_developing_parallel_jobs.html",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-ibm-datastage-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with IBM Datastage for ETL and data integration.",
    logoKey: "Database",
    updateInfo: "", // Dynamically updated from backend
    developer: "Guy Shavit",
    apiDocumentationUrl: "https://cloud.ibm.com/apidocs/datastage",
  },
  {
    id: "informatica-cs",
    name: "Informatica CS",
    category: IntegrationCategory.DATA_PROCESSING_AND_ANALYTICS,
    documentationUrl: "https://docs.informatica.com/integration-cloud/cloud-data-integration/current-version.html",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-informatica-cs-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with Informatica Cloud Services for data integration.",
    logoKey: "Cloud",
    updateInfo: "", // Dynamically updated from backend
    developer: "Tomer Berman",
    apiDocumentationUrl: "https://docs.informatica.com/cloud-common-services/administrator/current-version/rest-api-reference/informatica-intelligent-cloud-services-rest-api.html",
  },
  {
    id: "jenkins",
    name: "Jenkins",
    category: IntegrationCategory.INFRASTRUCTURE_AS_CODE,
    documentationUrl: "https://www.jenkins.io/doc/",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-jenkins-123456789.html",
    lastUpdated: "",
    description: "Control-M integration with Jenkins for CI/CD automation.",
    logoKey: "GitBranch",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    apiDocumentationUrl: "https://www.jenkins.io/doc/book/using/remote-access-api/",
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
    id: "micro-focus",
    name: "Micro Focus",
    category: IntegrationCategory.CLOUD_COMPUTING,
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
    id: "microsoft-power-bi",
    name: "Microsoft Power BI",
    category: IntegrationCategory.BUSINESS_INTELLIGENCE_AND_ANALYTICS,
    documentationUrl: "https://docs.microsoft.com/en-us/power-bi/",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-microsoft-power-bi-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-microsoft-power-bi-integration",
    lastUpdated: "",
    description: "Control-M integration with Microsoft Power BI for business analytics.",
    logoKey: "BarChart",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    apiDocumentationUrl: "https://learn.microsoft.com/en-us/power-bi/developer/"
  },
  {
    id: "openshift-kubernetes",
    name: "Openshift Kubernetes",
    category: IntegrationCategory.INFRASTRUCTURE_AS_CODE,
    documentationUrl: "https://docs.openshift.com/container-platform/latest/welcome/index.html",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-openshift-kubernetes-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-openshift-kubernetes-integration",
    lastUpdated: "",
    description: "Control-M integration with Openshift Kubernetes for container orchestration.",
    logoKey: "Box",
    updateInfo: "", // Dynamically updated from backend
    developer: "Jacques Guzy",
    apiDocumentationUrl: "https://docs.openshift.com/container-platform/latest/rest_api/"
  },
  {
    id: "pagerduty",
    name: "PagerDuty",
    category: IntegrationCategory.MESSAGING_AND_COMMUNICATION,
    documentationUrl: "https://developer.pagerduty.com/docs/",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-pagerduty-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-pagerduty-integration",
    lastUpdated: "",
    description: "Control-M integration with PagerDuty for incident management.",
    logoKey: "Bell",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    apiDocumentationUrl: "https://developer.pagerduty.com/docs/rest-api-v2/"
  },
  {
    id: "qlik-cloud",
    name: "Qlik Cloud",
    category: IntegrationCategory.BUSINESS_INTELLIGENCE_AND_ANALYTICS,
    documentationUrl: "https://help.qlik.com/en-US/cloud-services/Subsystems/Hub/Content/Sense_Hub/Introduction/qlik-cloud-intro.htm",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-qlik-cloud-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-qlik-cloud-integration",
    lastUpdated: "",
    description: "Control-M integration with Qlik Cloud for analytics and business intelligence.",
    logoKey: "BarChart",
    updateInfo: "", // Dynamically updated from backend
    developer: "Guy Shavit",
    apiDocumentationUrl: "https://qlik.dev/"
  },
  {
    id: "rabbitmq",
    name: "RabbitMQ",
    category: IntegrationCategory.MESSAGING_AND_COMMUNICATION,
    documentationUrl: "https://www.rabbitmq.com/documentation.html",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-rabbitmq-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-rabbitmq-integration",
    lastUpdated: "",
    description: "Control-M integration with RabbitMQ for message queuing.",
    logoKey: "MessageSquare",
    updateInfo: "", // Dynamically updated from backend
    developer: "Stanislav Ashkenazi",
    apiDocumentationUrl: "https://www.rabbitmq.com/management.html"
  },
  {
    id: "snowflake",
    name: "Snowflake",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://docs.snowflake.com/en/docs",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-snowflake-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-snowflake-integration",
    lastUpdated: "",
    description: "Control-M integration with Snowflake for cloud data warehousing.",
    logoKey: "Database",
    updateInfo: "", // Dynamically updated from backend
    developer: "Mati Green",
    apiDocumentationUrl: "https://docs.snowflake.com/en/sql-reference/sql-api.html"
  },
  {
    id: "tableau",
    name: "Tableau",
    category: IntegrationCategory.BUSINESS_INTELLIGENCE_AND_ANALYTICS,
    documentationUrl: "https://help.tableau.com/current/guides/everybody-install/en-us/everybody_install_overview.htm",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-tableau-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-tableau-integration",
    lastUpdated: "",
    description: "Control-M integration with Tableau for data visualization.",
    logoKey: "BarChart",
    updateInfo: "", // Dynamically updated from backend
    developer: "Stanislav Ashkenazi",
    apiDocumentationUrl: "https://help.tableau.com/current/api/"
  },
  {
    id: "talend",
    name: "Talend",
    category: IntegrationCategory.DATA_INTEGRATION,
    documentationUrl: "https://help.talend.com/r/en-US/8.0",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-talend-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-talend-integration",
    lastUpdated: "",
    description: "Control-M integration with Talend for data integration and ETL workflows.",
    logoKey: "GitMerge",
    updateInfo: "", // Dynamically updated from backend
    developer: "Asaf Yaron",
    apiDocumentationUrl: "https://talend.qlik.dev/apis/"
  },
  {
    id: "terraform",
    name: "Terraform",
    category: IntegrationCategory.INFRASTRUCTURE_AS_CODE,
    documentationUrl: "https://developer.hashicorp.com/terraform/docs",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-terraform-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-terraform-integration",
    lastUpdated: "",
    description: "Control-M integration with Terraform for infrastructure as code.",
    logoKey: "Cloud",
    updateInfo: "", // Dynamically updated from backend
    developer: "Tomer Berman",
    apiDocumentationUrl: "https://developer.hashicorp.com/terraform/docs/providers"
  },
  {
    id: "uipath",
    name: "UiPath",
    category: IntegrationCategory.APPLICATION_WORKFLOWS,
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
  {
    id: "veritas-netbackup",
    name: "Veritas NetBackup",
    category: IntegrationCategory.INFRASTRUCTURE_AS_CODE,
    documentationUrl: "https://www.veritas.com/support/en_US/article.100038989",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-veritas-netbackup-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-veritas-netbackup-integration",
    lastUpdated: "",
    description: "Control-M integration with Veritas NetBackup for enterprise backup and recovery.",
    logoKey: "Save",
    updateInfo: "", // Dynamically updated from backend
    developer: "Gilad Zehavi",
    apiDocumentationUrl: "https://www.veritas.com/content/support/en_US/1858.html"
  },
  {
    id: "vmware",
    name: "Vmware",
    category: IntegrationCategory.INFRASTRUCTURE_AS_CODE,
    documentationUrl: "https://docs.vmware.com/en/",
    controlmDocUrl: "https://docs.bmc.com/docs/controlm/integrating-with-vmware-123456789.html",
    githubUrl: "https://github.com/bmc-compuware/controlm-vmware-integration",
    lastUpdated: "",
    description: "Control-M integration with Vmware for virtualization management.",
    logoKey: "Server",
    updateInfo: "", // Dynamically updated from backend
    developer: "Gilad Zehavi",
    apiDocumentationUrl: "https://developer.vmware.com/"
  }
];

export const integrations: Integration[] = [
  ...localIntegrations,
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

