import { Integration, IntegrationCategory, CategoryCount } from '../types';

const now = new Date();
const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
const oneMonthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
const threeMonthsAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);

const getRandomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
};

export const integrations: Integration[] = [
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
    id: "aws-app-runner",
    name: "AWS App Runner",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/apprunner/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS App Runner for containerized applications",
    logoKey: "Play",
    updateInfo: "Added support for auto-scaling and health checks",
    developer: "Stanislav Ashkenazi"
  },
  {
    id: "aws-appflow",
    name: "AWS AppFlow",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/appflow/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with AWS AppFlow for SaaS data integration",
    logoKey: "Flow",
    updateInfo: "Enhanced data mapping and transformation capabilities",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-athena",
    name: "AWS Athena",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/athena/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS Athena for serverless queries",
    logoKey: "Database",
    updateInfo: "Improved query performance monitoring",
    developer: "Mati Green"
  },
  {
    id: "aws-step-function",
    name: "AWS Step Function",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/step-functions/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS Step Functions for serverless workflow orchestration.",
    logoKey: "GitBranch",
    updateInfo: "Added support for state machine execution monitoring and error handling.",
    developer: "Mati Green"
  },
  {
    id: "aws-backup",
    name: "AWS Backup",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/aws-backup/",
    lastUpdated: getRandomDate(threeMonthsAgo, oneMonthAgo),
    description: "Control-M integration with AWS Backup for automated backups",
    logoKey: "Save",
    updateInfo: "Added support for cross-region backup copies",
    developer: "Stanislav Ashkenazi"
  },
  {
    id: "aws-batch",
    name: "AWS Batch",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/batch/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with AWS Batch for job scheduling",
    logoKey: "Layers",
    updateInfo: "Enhanced job queue management and monitoring",
    developer: "Keren Surujon"
  },
  {
    id: "aws-cloudformation",
    name: "AWS CloudFormation",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/cloudformation/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS CloudFormation for infrastructure as code",
    logoKey: "Cloud",
    updateInfo: "Added support for drift detection and stack updates",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-data-pipeline",
    name: "AWS Data Pipeline",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/datapipeline/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with AWS Data Pipeline for data processing",
    logoKey: "GitBranch",
    updateInfo: "Improved pipeline dependency management",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-datasync",
    name: "AWS DataSync",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/datasync/",
    lastUpdated: getRandomDate(threeMonthsAgo, oneMonthAgo),
    description: "Control-M integration with AWS DataSync for data transfer",
    logoKey: "RefreshCw",
    updateInfo: "Enhanced transfer monitoring and bandwidth control",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-dynamodb",
    name: "AWS DynamoDB",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/dynamodb/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS DynamoDB for NoSQL operations",
    logoKey: "Database",
    updateInfo: "Added support for transactional operations",
    developer: "Stanislav Ashkenazi"
  },
  {
    id: "aws-ec2",
    name: "AWS EC2",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/ec2/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with AWS EC2 for compute management",
    logoKey: "Server",
    updateInfo: "Enhanced instance lifecycle management",
    developer: "Tomer Berman"
  },
  {
    id: "aws-ecs",
    name: "AWS ECS",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/ecs/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS ECS for container orchestration",
    logoKey: "Box",
    updateInfo: "Added support for capacity providers",
    developer: "Gilad Zehavi"
  },
  {
    id: "aws-emr",
    name: "AWS EMR",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/emr/",
    lastUpdated: getRandomDate(threeMonthsAgo, oneMonthAgo),
    description: "Control-M integration with AWS EMR for big data processing",
    logoKey: "Database",
    updateInfo: "Enhanced cluster management and monitoring",
    developer: "Mati Green"
  },
  {
    id: "aws-glue",
    name: "AWS Glue",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/glue/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with AWS Glue for ETL operations",
    logoKey: "GitMerge",
    updateInfo: "Improved job bookmarking and error handling",
    developer: "Neil Cullum, Asaf Yaron"
  },
  {
    id: "aws-glue-databrew",
    name: "AWS Glue DataBrew",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/databrew/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS Glue DataBrew for data preparation",
    logoKey: "Flask",
    updateInfo: "Added support for custom transformations",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-lambda",
    name: "AWS Lambda",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/lambda/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with AWS Lambda for serverless functions",
    logoKey: "Zap",
    updateInfo: "Enhanced function versioning and aliases",
    developer: "Keren Surujon"
  },
  {
    id: "aws-mainframe-modernization",
    name: "AWS Mainframe Modernization",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/m2/",
    lastUpdated: getRandomDate(threeMonthsAgo, oneMonthAgo),
    description: "Control-M integration with AWS M2 for mainframe workloads",
    logoKey: "Server",
    updateInfo: "Added support for COBOL runtime",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-mwaa",
    name: "AWS MWAA",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/mwaa/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS MWAA for Apache Airflow",
    logoKey: "Wind",
    updateInfo: "Enhanced environment management",
    developer: "Gilad Zehavi"
  },
  {
    id: "aws-quicksight",
    name: "AWS QuickSight",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/quicksight/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with AWS QuickSight for business analytics",
    logoKey: "BarChart",
    updateInfo: "Added support for custom SQL queries",
    developer: "Gilad Zehavi"
  },
  {
    id: "aws-redshift",
    name: "AWS Redshift",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/redshift/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS Redshift for data warehousing",
    logoKey: "Database",
    updateInfo: "Enhanced cluster scaling and maintenance",
    developer: "Mati Green"
  },
  {
    id: "aws-sagemaker",
    name: "AWS SageMaker",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/sagemaker/",
    lastUpdated: getRandomDate(threeMonthsAgo, oneMonthAgo),
    description: "Control-M integration with AWS SageMaker for machine learning",
    logoKey: "Brain",
    updateInfo: "Added support for custom algorithms",
    developer: "Asaf Yaron"
  },
  {
    id: "aws-sns",
    name: "AWS SNS",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/sns/",
    lastUpdated: getRandomDate(oneMonthAgo, oneWeekAgo),
    description: "Control-M integration with AWS SNS for notifications",
    logoKey: "Bell",
    updateInfo: "Enhanced message filtering capabilities",
    developer: "Gilad Zehavi"
  },
  {
    id: "aws-sqs",
    name: "AWS SQS",
    category: IntegrationCategory.AWS,
    documentationUrl: "https://docs.aws.amazon.com/sqs/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with AWS SQS for message queuing",
    logoKey: "MessageSquare",
    updateInfo: "Added support for FIFO queues",
    developer: "Gilad Zehavi"
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
    id: "gcp-batch",
    name: "GCP Batch",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/batch/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Batch for batch job orchestration.",
    logoKey: "Layers",
    updateInfo: "Initial integration for GCP Batch jobs.",
    developer: "Guy Shavit"
  },
  {
    id: "gcp-bigquery",
    name: "GCP BigQuery",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/bigquery/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP BigQuery for analytics and data warehousing.",
    logoKey: "BarChart",
    updateInfo: "Initial integration for BigQuery analytics.",
    developer: "Stanislav Ashkenazi"
  },
  {
    id: "gcp-cloud-run",
    name: "GCP Cloud Run",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/run/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Cloud Run for serverless container execution.",
    logoKey: "Cloud",
    updateInfo: "Initial integration for Cloud Run services.",
    developer: "Stanislav Ashkenazi"
  },
  {
    id: "gcp-composer",
    name: "GCP Composer",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/composer/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Composer for workflow orchestration.",
    logoKey: "Wind",
    updateInfo: "Initial integration for Composer DAGs.",
    developer: "Gilad Zehavi"
  },
  {
    id: "gcp-data-fusion",
    name: "GCP Data Fusion",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/data-fusion/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Data Fusion for data integration.",
    logoKey: "GitMerge",
    updateInfo: "Initial integration for Data Fusion pipelines.",
    developer: "Gilad Zehavi"
  },
  {
    id: "gcp-dataflow",
    name: "GCP Dataflow",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/dataflow/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Dataflow for stream and batch data processing.",
    logoKey: "Flow",
    updateInfo: "Initial integration for Dataflow jobs.",
    developer: "Tomer Berman"
  },
  {
    id: "gcp-dataplex",
    name: "GCP Dataplex",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/dataplex/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Dataplex for data lake management.",
    logoKey: "Database",
    updateInfo: "Initial integration for Dataplex lakes.",
    developer: "Asaf Yaron"
  },
  {
    id: "gcp-dataprep",
    name: "GCP Dataprep",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/dataprep/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Dataprep for data preparation workflows.",
    logoKey: "Flask",
    updateInfo: "Initial integration for Dataprep flows.",
    developer: "Asaf Yaron"
  },
  {
    id: "gcp-dataproc",
    name: "GCP Dataproc",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/dataproc/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Dataproc for big data processing.",
    logoKey: "Database",
    updateInfo: "Initial integration for Dataproc clusters.",
    developer: "Tomer Berman"
  },
  {
    id: "gcp-deployment-manager",
    name: "GCP Deployment Manager",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/deployment-manager/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Deployment Manager for infrastructure automation.",
    logoKey: "Server",
    updateInfo: "Initial integration for Deployment Manager templates.",
    developer: "Asaf Yaron"
  },
  {
    id: "gcp-functions",
    name: "GCP Functions",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/functions/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Functions for serverless compute.",
    logoKey: "Zap",
    updateInfo: "Initial integration for GCP Functions.",
    developer: "Tomer Berman"
  },
  {
    id: "gcp-vm",
    name: "GCP VM",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/compute/docs/instances",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP VM for virtual machine management.",
    logoKey: "Server",
    updateInfo: "Initial integration for GCP VM orchestration.",
    developer: "Tomer Berman"
  },
  {
    id: "gcp-workflows",
    name: "GCP Workflows",
    category: IntegrationCategory.GCP,
    documentationUrl: "https://cloud.google.com/workflows/docs",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with GCP Workflows for workflow orchestration.",
    logoKey: "GitBranch",
    updateInfo: "Initial integration for GCP Workflows.",
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
    id: "oci-data-integration",
    name: "OCI Data Integration",
    category: IntegrationCategory.OCI,
    documentationUrl: "https://docs.oracle.com/en-us/iaas/data-integration/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Oracle Cloud Data Integration for ETL workflows.",
    logoKey: "GitMerge",
    updateInfo: "Initial integration for OCI Data Integration.",
    developer: "Mati Green"
  },
  {
    id: "oci-data-science",
    name: "OCI Data Science",
    category: IntegrationCategory.OCI,
    documentationUrl: "https://docs.oracle.com/en-us/iaas/data-science/",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Oracle Cloud Data Science for machine learning workflows.",
    logoKey: "Brain",
    updateInfo: "Initial integration for OCI Data Science.",
    developer: "Asaf Yaron"
  },
  {
    id: "oci-functions",
    name: "OCI Functions",
    category: IntegrationCategory.OCI,
    documentationUrl: "https://docs.oracle.com/en-us/iaas/Content/Functions/Concepts/functionsoverview.htm",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Oracle Cloud Functions for serverless compute.",
    logoKey: "Zap",
    updateInfo: "Initial integration for OCI Functions.",
    developer: "Keren Surujon"
  },
  {
    id: "oci-vm",
    name: "OCI VM",
    category: IntegrationCategory.OCI,
    documentationUrl: "https://docs.oracle.com/en-us/iaas/Content/Compute/Concepts/computeoverview.htm",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Oracle Cloud VM for compute management.",
    logoKey: "Server",
    updateInfo: "Initial integration for OCI VM orchestration.",
    developer: "Asaf Yaron"
  },
  {
    id: "odi-data-flow",
    name: "ODI Data Flow",
    category: IntegrationCategory.OCI,
    documentationUrl: "https://docs.oracle.com/en/middleware/fusion-middleware/data-integrator/12.2.1.4/index.html",
    lastUpdated: getRandomDate(oneWeekAgo, now),
    description: "Control-M integration with Oracle Data Integrator for data flow automation.",
    logoKey: "Flow",
    updateInfo: "Initial integration for ODI Data Flow.",
    developer: "Tomer Berman"
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