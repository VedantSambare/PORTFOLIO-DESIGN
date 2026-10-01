import { SkillCategoryGroup } from '../types';

export const SKILL_CATEGORIES_DATA: SkillCategoryGroup[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    description: 'Strong foundational languages for low-latency systems, data pipelines, algorithmic rigor, and web engineering.',
    skills: [
      {
        name: 'Python',
        level: 'Primary Specialty',
        description: 'Machine learning, data processing, statistical computing, FastAPI backends, and scientific libraries.',
        tags: ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'AsyncIO'],
      },
      {
        name: 'TypeScript / JavaScript',
        level: 'Core Competency',
        description: 'Modern type-safe web applications, asynchronous concurrency, UI state machines, and Next.js / React architectures.',
        tags: ['ESNext', 'Generics', 'Node.js', 'React', 'Zod'],
      },
      {
        name: 'Java',
        level: 'Proficient',
        description: 'Object-oriented programming, data structures, enterprise backend services, and JDBC persistence.',
        tags: ['OOP', 'Collections', 'Multithreading', 'JDBC', 'Maven'],
      },
      {
        name: 'C++',
        level: 'Proficient',
        description: 'Memory management, low-level data structures, algorithmic performance, and hardware-near computing.',
        tags: ['STL', 'Pointers', 'Complexity Analysis', 'Algorithms'],
      },
      {
        name: 'SQL',
        level: 'Advanced',
        description: 'Complex analytical queries, window functions, CTEs, schema optimization, and query execution plan tuning.',
        tags: ['PostgreSQL', 'MySQL', 'Indexes', 'Aggregations'],
      },
    ],
  },
  {
    id: 'data-science',
    title: 'Data Science & AI / ML',
    description: 'End-to-end mathematical data modeling, exploratory intelligence, predictive algorithms, and statistical evaluation.',
    skills: [
      {
        name: 'Scikit-Learn',
        level: 'Advanced Specialist',
        description: 'Ensemble models (Random Forest, Gradient Boosting, XGBoost), classification, regression, and cross-validation pipelines.',
        tags: ['Classification', 'Regression', 'Cross-Validation', 'Pipelines'],
      },
      {
        name: 'Pandas & NumPy',
        level: 'Advanced Specialist',
        description: 'High-throughput tabular data transformations, vectorization, time-series analysis, and multi-index reshaping.',
        tags: ['Vectorization', 'Data Cleaning', 'Aggregation', 'Broadcasting'],
      },
      {
        name: 'EDA & Feature Engineering',
        level: 'Core Competency',
        description: 'Hypothesis testing, outlier detection, distribution analysis, mutual information gain, target encoding, and dimensionality reduction.',
        tags: ['PCA', 'VIF', 'Correlation Analysis', 'SMOTE', 'Outlier Treatment'],
      },
      {
        name: 'Model Evaluation & Explainability',
        level: 'Core Competency',
        description: 'Rigorous validation using ROC-AUC, Precision-Recall curves, confusion matrices, SHAP values, and error residual profiling.',
        tags: ['SHAP', 'ROC-AUC', 'F1-Score', 'Cross-Validation', 'Residuals'],
      },
      {
        name: 'Data Visualization',
        level: 'Proficient',
        description: 'Communicating statistical insights via Matplotlib, Seaborn, interactive Plotly charts, and custom SVG analytical dashboards.',
        tags: ['Matplotlib', 'Seaborn', 'Heatmaps', 'Distributions', 'Plotly'],
      },
      {
        name: 'Deep Learning & Vision',
        level: 'Working Knowledge',
        description: 'Convolutional neural networks, object detection (YOLO), PyTorch model quantization, and edge inference.',
        tags: ['PyTorch', 'OpenCV', 'YOLO', 'ONNX', 'Quantization'],
      },
    ],
  },
  {
    id: 'database',
    title: 'Database & Data Storage',
    description: 'Relational database architecture, relational modeling, high-availability schemas, and optimized persistence layers.',
    skills: [
      {
        name: 'PostgreSQL',
        level: 'Advanced',
        description: 'ACID compliance, JSONB documents, composite B-Tree indexes, partitioning, and execution plan optimization.',
        tags: ['EXPLAIN ANALYZE', 'Indexes', 'JSONB', 'Views', 'Triggers'],
      },
      {
        name: 'MySQL',
        level: 'Proficient',
        description: 'Relational modeling, normalization (3NF), transaction isolation levels, and replication architectures.',
        tags: ['InnoDB', 'Stored Procedures', 'Joins', 'Schema Design'],
      },
      {
        name: 'DBMS & Query Tuning',
        level: 'Core Competency',
        description: 'Deep understanding of relational algebra, indexing strategies (B-Tree, Hash, GIN), buffer pools, and locking mechanisms.',
        tags: ['Index Tuning', 'Buffer Analysis', 'Query Cost', 'Normalization'],
      },
      {
        name: 'JDBC & ORM Systems',
        level: 'Proficient',
        description: 'Type-safe database abstraction layers, connection pooling (HikariCP), and transactional management.',
        tags: ['JDBC', 'Drizzle ORM', 'Prisma', 'Connection Pools'],
      },
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics & Business Intelligence',
    description: 'Transforming raw data streams into executive dashboards, business KPIs, and strategic operational intelligence.',
    skills: [
      {
        name: 'Power BI',
        level: 'Proficient',
        description: 'Star-schema dimensional modeling, interactive executive reports, dynamic drill-throughs, and automated refresh gateways.',
        tags: ['Data Modeling', 'Dashboards', 'Relationships', 'Reports'],
      },
      {
        name: 'DAX (Data Analysis Expressions)',
        level: 'Proficient',
        description: 'Advanced calculated measures, time intelligence functions (YTD, QTD, MoM growth), and row/filter context manipulation.',
        tags: ['CALCULATE', 'Time Intelligence', 'Measures', 'Filter Context'],
      },
      {
        name: 'Excel & Advanced Analytics',
        level: 'Advanced',
        description: 'Pivot tables, Power Query ETL pipelines, statistical modeling, sensitivity analysis, and automated VBA macros.',
        tags: ['Power Query', 'VLOOKUP / XLOOKUP', 'Pivot Tables', 'What-If Analysis'],
      },
      {
        name: 'KPI & Metric Architecture',
        level: 'Core Competency',
        description: 'Designing actionable performance indicators, cohort retention matrices, customer lifetime value (LTV), and churn indicators.',
        tags: ['KPI Frameworks', 'Cohort Analysis', 'Funnel Tracking', 'Attribution'],
      },
    ],
  },
  {
    id: 'development',
    title: 'Full Stack & Creative Engineering',
    description: 'Crafting responsive user interfaces, reactive frontend state machines, 3D WebGL scenes, and robust APIs.',
    skills: [
      {
        name: 'React & Next.js',
        level: 'Advanced',
        description: 'Modern component architecture, custom hooks, server-side rendering, client state optimization, and clean UI engineering.',
        tags: ['Next.js App Router', 'React 19', 'Custom Hooks', 'Suspense'],
      },
      {
        name: 'Three.js & WebGL',
        level: 'Creative Specialization',
        description: 'Interactive 3D spatial scenes, custom GLSL shaders, camera choreography, particle simulations, and PBR lighting.',
        tags: ['WebGL', 'GLSL Shaders', 'BufferGeometry', 'PBR Materials', 'Camera Rails'],
      },
      {
        name: 'Node.js & Express',
        level: 'Proficient',
        description: 'RESTful API design, middleware pipelines, authentication, rate limiting, and asynchronous microservices.',
        tags: ['REST APIs', 'Express', 'JWT Auth', 'Middleware', 'Microservices'],
      },
      {
        name: 'Tailwind CSS & Motion',
        level: 'Advanced',
        description: 'Cinematic microinteractions, physics-based springs, magnetic cursors, responsive viewport math, and zero-slop styling.',
        tags: ['Tailwind CSS v4', 'Framer Motion', 'Spring Physics', 'Responsive Layouts'],
      },
      {
        name: 'Git & Developer Tooling',
        level: 'Advanced',
        description: 'Version control branching models, GitHub Actions CI/CD workflows, Docker containerization, and Vite bundling.',
        tags: ['Git', 'GitHub CI/CD', 'Docker', 'Vite', 'Linux / Bash'],
      },
    ],
  },
];
