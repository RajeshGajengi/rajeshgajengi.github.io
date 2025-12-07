// lib/projects.js
export const projects = [
  {
    slug: "ci-cd-pipeline-automation",
    title: "CI/CD Pipeline Automation",
    short: "GitHub Actions → Docker → Kubernetes deployment pipeline.",
    long: `Built a production-ready CI/CD pipeline using GitHub Actions that:
- Builds Docker images
- Runs unit tests
- Pushes images to registry
- Deploys to Kubernetes with Helm
- Has automated rollbacks and notifications.`,
    tech: ["GitHub Actions", "Docker", "Kubernetes", "Helm"],
    date: "2024-10-01",
    repo: "https://github.com/RajeshGajengi/eks-3tier-app-cicd",
    live: "#",
    screenshots: ["/projects/architecture.png", "/projects/frontend_page.png"],
    features: [
      "Pipeline as code with reusable workflows",
      "Automated image tagging and promotion",
      "Blue/Green style deployment with health checks",
    ],
    challenges: [
      "Secrets management across environments",
      "Parallelizing jobs while preserving test stability",
    ],
  },

  {
    slug: "monitoring-alerting-system",
    title: "Monitoring & Alerting System",
    short: "Prometheus + Grafana + Alertmanager for production workloads.",
    long: `Implemented observability stack to monitor services, track SLOs and send alerts.
Work included: instrumentation, dashboards, alert routing and runbooks.`,
    tech: ["Prometheus", "Grafana", "Alertmanager", "Linux"],
    date: "2024-07-15",
    repo: "#",
    live: "#",
    screenshots: ["/projects/monitor-1.png"],
    features: [
      "Custom dashboards for latency/error rates",
      "Alert routing with escalation policies",
    ],
    challenges: ["Managing cardinality in metrics", "Alert fatigue tuning"],
  },

  {
    slug: "flight-price-prediction",
    title: "Flight Price Prediction",
    short: "ML model served with Flask + Docker — web UI + API.",
    long: `End-to-end ML project: data ETL, model training, API serving, and containerized deployment.`,
    tech: ["Python", "Flask", "Docker", "scikit-learn"],
    date: "2024-04-10",
    repo: "#",
    live: "#",
    screenshots: ["/projects/flight-1.png"],
    features: ["Preprocessing pipeline", "Deployed REST API", "Basic UI"],
    challenges: ["Feature drift handling", "Model versioning"],
  },

  {
    slug: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    short: "End-to-end churn project with dashboard & evaluation.",
    long: `Worked on feature engineering, modeling and deployment of churn prediction with a PowerBI dashboard.`,
    tech: ["Python", "scikit-learn", "Power BI"],
    date: "2023-12-05",
    repo: "#",
    live: "#",
    screenshots: ["/projects/churn-1.png"],
    features: ["Feature importance", "ROC/AUC monitoring"],
    challenges: ["Imbalanced data", "Feature leakage"],
  },

  // add more projects here...
]
