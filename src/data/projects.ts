import { ProjectCaseStudy } from '../types';

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    slug: 'employee-performance-prediction',
    title: 'Employee Performance Prediction',
    tagline: 'End-to-end Machine Learning pipeline predicting workforce productivity & attrition',
    category: 'Data Science & AI',
    period: '2025 – 2026',
    role: 'Lead Data Scientist & ML Engineer',
    clientOrContext: 'Enterprise Workforce Analytics',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'Matplotlib', 'Seaborn', 'Streamlit', 'SHAP'],
    featured: true,
    githubUrl: 'https://github.com/vedantsambare/employee-performance-prediction',
    liveUrl: 'https://employee-performance-ml.demo.app',
    summary: 'An advanced predictive intelligence system engineered to evaluate multi-dimensional employee historical attributes, job satisfaction ratings, workload distribution, and retention probability using ensemble machine learning models.',
    metrics: [
      { label: 'Model Accuracy', value: '94.2%' },
      { label: 'ROC-AUC Score', value: '0.96' },
      { label: 'Inference Latency', value: '< 18ms' },
      { label: 'Features Evaluated', value: '28 Features' },
    ],
    problem: 'Enterprise human resource departments struggle with lagging indicators for employee turnover and performance degradation. Traditional annual reviews are subjective, reactive, and lack actionable data-driven insights to intervene before attrition occurs.',
    objective: 'Develop an interpretable, high-accuracy machine learning classification engine that ingests historical workforce telemetry, detects early burnout indicators, and produces granular performance forecasts with explainable feature importance (SHAP values).',
    researchAndAnalysis: 'Exploratory data analysis (EDA) conducted across 15,000+ anonymized employee records uncovered significant correlations between project overtime ratios, quarterly evaluation variances, and tenure stagnation. Outliers in promotion timelines and salary hikes were normalized using robust scaling techniques to prevent model bias.',
    solutionArchitecture: {
      description: 'The machine learning architecture follows a modular pipeline design spanning data ingestion, automated outlier removal, feature encoding, hyperparameter tuning, model training, and SHAP explainability scoring.',
      pipelineSteps: [
        {
          title: '01. Ingestion & Preprocessing',
          detail: 'Cleaned raw HR dataset, imputed missing records using iterative KNN imputation, and encoded categorical attributes via Target & One-Hot Encoding.',
        },
        {
          title: '02. Feature Engineering & Selection',
          detail: 'Synthesized interaction variables including Overtime-to-Salary Ratio, Project Intensity Score, and Tenure Progression Velocity. Used Mutual Information Gain and Lasso regularization to filter collinear variables.',
        },
        {
          title: '03. Model Training & Ensembling',
          detail: 'Benchmarked Logistic Regression, Random Forest, LightGBM, and XGBoost Classifier using 5-Fold Stratified Cross-Validation with Bayesian Optimization.',
        },
        {
          title: '04. Interpretability & Inference Serving',
          detail: 'Integrated SHAP (SHapley Additive exPlanations) summary plots and force plots into a streamlined inference dashboard allowing managers to understand individual prediction drivers.',
        },
      ],
    },
    keyFeatures: [
      'Multi-class performance classification (Low, Expected, Exceeds)',
      'SHAP value explainability for individual employee prediction drivers',
      'Automated data drift detection and model retraining trigger logic',
      'Interactive workforce scenario simulator for compensation adjustments',
      'Interactive correlation heatmaps and violin plots for exploratory insights',
    ],
    challengesAndSolutions: [
      {
        challenge: 'Severe class imbalance in the top-performing cohort and early-attrition records.',
        solution: 'Implemented SMOTE-NC (Synthetic Minority Over-sampling Technique for Nominal and Continuous) combined with Focal Loss weighting to boost minority class recall from 64% to 91%.',
      },
      {
        challenge: 'High collinearity between employee tenure, age, and historical promotion counts.',
        solution: 'Conducted Variance Inflation Factor (VIF) filtering and Principal Component Analysis (PCA) on continuous clusters, reducing dimensionality while retaining 98% of variance.',
      },
    ],
    resultsAndImpact: [
      'Achieved 94.2% overall accuracy and 0.96 ROC-AUC across unseen test splits.',
      'Reduced false-negative burnout warnings by 37% compared to baseline heuristics.',
      'Provided clear root-cause visibility to HR leaders through real-time SHAP waterfall charts.',
    ],
    lessonsLearned: [
      'Explainability is as critical as raw model accuracy in HR and corporate decision-making pipelines.',
      'Feature engineering domain knowledge (e.g. peer satisfaction delta) yields far higher accuracy gains than model architecture complexity alone.',
    ],
    previewGradient: 'from-[#E25822]/20 via-[#18181F] to-[#09090B]',
  },
  {
    slug: 'daily-task-manager',
    title: 'Daily Task Manager & Life Tracker',
    tagline: 'High-performance personal productivity engine with task analytics & financial budgeting',
    category: 'Full Stack',
    period: '2025',
    role: 'Full Stack Engineer & UI Architect',
    clientOrContext: 'Productivity Application',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Lucide React', 'Framer Motion'],
    featured: true,
    githubUrl: 'https://github.com/vedantsambare/daily-task-manager',
    liveUrl: 'https://task-manager.vedantsambare.dev',
    summary: 'A unified productivity ecosystem engineered for seamless daily agenda planning, priority matrix management, income/expense tracking, and habit analytics with keyboard-first workflows and sub-millisecond local state synchronization.',
    metrics: [
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'State Sync Latency', value: '< 2ms' },
      { label: 'Weekly Active Rate', value: '88%' },
      { label: 'Test Coverage', value: '94%' },
    ],
    problem: 'Modern professionals juggle disjointed tools: one app for todo lists, another for financial expense logs, and a third for habit tracking. This context-switching degrades personal focus and produces fragmented personal analytics.',
    objective: 'Construct a unified, distraction-free command center that combines time-blocking schedules, priority matrices (Eisenhower), expense/income ledgers, and velocity metrics inside an ultra-fast, offline-capable interface.',
    researchAndAnalysis: 'Analyzed the interaction patterns of 40+ daily planners, identifying that modal dialogues and multi-click forms were the #1 source of drop-off. The solution needed inline keyboard triggers (e.g., cmd+k, quick slash commands) and instant optimistic state updates.',
    solutionArchitecture: {
      description: 'The app is designed with a reactive TypeScript client layered over an event-driven Express/Node.js API, leveraging PostgreSQL with indexed timestamp queries for instant analytical aggregations.',
      pipelineSteps: [
        {
          title: '01. Client-Side Optimistic Store',
          detail: 'Engineered an in-memory cache with indexedDB rollback persistence ensuring instant UI feedback even during network intermittency.',
        },
        {
          title: '02. Command Palette & Quick Parsing',
          detail: 'Built a natural language parsing engine that automatically detects dates, priority tags, categories, and currency amounts directly from raw text inputs.',
        },
        {
          title: '03. Financial Ledger Aggregation',
          detail: 'Created optimized SQL aggregation functions computing weekly burn rates, category spending distribution, and net savings projections.',
        },
        {
          title: '04. Analytical Dashboards',
          detail: 'Rendered interactive SVG velocity charts, completion streaks, and habit heatmaps using hardware-accelerated CSS animations.',
        },
      ],
    },
    keyFeatures: [
      'Eisenhower Matrix drag-and-drop workspace with priority reassignment',
      'Unified income and expense tracking with real-time budget forecasting',
      'Keyboard-first command palette (`Cmd + K`) for rapid task creation',
      'Daily velocity scores and weekly productivity retrospective reports',
      'Offline-first sync engine with automatic conflict resolution',
    ],
    challengesAndSolutions: [
      {
        challenge: 'Maintaining instant 60 FPS drag-and-drop interactions across large task sets (500+ items).',
        solution: 'Implemented virtualized list rendering with Framer Motion layout animations and memoized component sub-trees.',
      },
      {
        challenge: 'Data consistency between local optimistic state and PostgreSQL transactions.',
        solution: 'Designed an idempotent mutation queue with sequential replay and timestamp-based conflict resolution.',
      },
    ],
    resultsAndImpact: [
      'Eliminated multi-app context switching by unifying tasks and finance in a single viewport.',
      'Achieved a sub-50ms roundtrip API response time for all analytical queries.',
      'Rated 4.9/5 by beta cohort users for interface speed and tactile minimalism.',
    ],
    lessonsLearned: [
      'Keyboard accessibility and tactile microinteractions directly dictate daily app retention.',
      'Strict database schema constraints prevent subtle data drift in financial ledger systems.',
    ],
    previewGradient: 'from-[#F59E0B]/20 via-[#18181F] to-[#09090B]',
  },
  {
    slug: 'onyx-supply',
    title: 'ONYX SUPPLY — 3D Streetwear Experience',
    tagline: 'Cinematic WebGL e-commerce experience with interactive 3D garment exploration',
    category: 'Creative 3D',
    period: '2025',
    role: 'Creative Developer & 3D WebGL Architect',
    clientOrContext: 'Avant-Garde Fashion Concept',
    technologies: ['Next.js', 'React', 'Three.js', 'GLSL Shaders', 'Tailwind CSS', 'Framer Motion', 'WebAudio API'],
    featured: true,
    githubUrl: 'https://github.com/vedantsambare/onyx-supply-3d',
    liveUrl: 'https://onyx-supply.demo.app',
    summary: 'A boundary-pushing 3D e-commerce platform for avant-garde technical streetwear. Features custom WebGL particle simulations, interactive 360-degree garment inspection, dynamic camera choreography, and atmospheric spatial audio.',
    metrics: [
      { label: 'WebGL FPS', value: '60 FPS Smooth' },
      { label: 'Bundle Size', value: '< 180kb Initial' },
      { label: 'User Dwell Time', value: '4m 12s Avg' },
      { label: '3D Mesh Optimization', value: '-65% Polycount' },
    ],
    problem: 'Standard e-commerce websites rely on flat 2D photography grids that fail to convey the tactile weight, volumetric drape, and structural texture of premium avant-garde apparel.',
    objective: 'Engineer an immersive, award-worthy 3D web experience that bridges high-fashion editorial storytelling with instant e-commerce purchasing power while maintaining smooth performance across mobile and desktop devices.',
    researchAndAnalysis: 'Studied modern Awwwards Site-of-the-Year winners (Active Theory, Bruno Simon, Dogstudio) to devise a progressive WebGL asset loading strategy that streams Draco-compressed GLTF models on demand without delaying initial DOM paint.',
    solutionArchitecture: {
      description: 'The application architecture decouples the Three.js WebGL canvas from the React DOM overlay, synchronizing camera matrices via requestAnimationFrame lerp loops for jitter-free scrolling.',
      pipelineSteps: [
        {
          title: '01. Draco Mesh Compression',
          detail: 'Optimized high-poly 3D scans from 45MB down to 1.2MB using Draco geometry compression and normal map baking.',
        },
        {
          title: '02. Custom GLSL Displacement Shaders',
          detail: 'Authored custom vertex and fragment shaders for real-time fabric shimmer, atmospheric dust particles, and mouse-follow distortion fields.',
        },
        {
          title: '03. Dynamic Orbit & Camera Rail',
          detail: 'Created smooth scroll-driven camera splines that guide the viewer through cinematic angles as they browse product details.',
        },
        {
          title: '04. Spatial Soundscape Integration',
          detail: 'Integrated WebAudio API synthesizer triggers responding to user hover actions and camera rotations.',
        },
      ],
    },
    keyFeatures: [
      'Interactive 360-degree 3D product inspection with material texture toggles',
      'Physics-based particle background reacting to mouse velocity and touch drags',
      'Scroll-synchronized camera transitions between runway and detailed spec modes',
      'Minimalist editorial lookbook with quick bag add and sizing matrix',
      'Full mobile touch optimization with automatic GPU quality scaling',
    ],
    challengesAndSolutions: [
      {
        challenge: 'Preventing WebGL context crashes and thermal throttling on mid-tier mobile devices.',
        solution: 'Implemented dynamic pixel-ratio clamping (`min(window.devicePixelRatio, 2)`), particle count LOD (Level of Detail), and lazy canvas suspension when out of viewport.',
      },
      {
        challenge: 'Maintaining accessible DOM navigation for assistive technologies over a 3D canvas.',
        solution: 'Layered semantic HTML elements with clear ARIA attributes on top of the canvas, ensuring complete keyboard navigation without canvas dependencies.',
      },
    ],
    resultsAndImpact: [
      'Maintained consistent 60 FPS across 95% of tested desktop and mobile environments.',
      'Average session duration exceeded 4 minutes—3x higher than standard luxury retail sites.',
      'Featured in creative development design roundups.',
    ],
    lessonsLearned: [
      'Shader optimization and memory disposal routines (`geometry.dispose()`, `material.dispose()`) are paramount for zero-leak WebGL Single Page Apps.',
      'Cinematic motion is most powerful when grounded by razor-sharp typographic discipline.',
    ],
    previewGradient: 'from-[#18181F] via-[#22222B] to-[#09090B]',
  },
  {
    slug: 'aurum-noir',
    title: 'AURUM & NOIR — Haute Horlogerie',
    tagline: 'Luxury Swiss watchmaker showcase with cinematic scroll interactions and 3D exploded mechanics',
    category: 'Creative 3D',
    period: '2025',
    role: 'Creative Technologist & UI Engineer',
    clientOrContext: 'Haute Horlogerie Portfolio',
    technologies: ['Next.js', 'Three.js', 'React', 'Tailwind CSS', 'Framer Motion', 'GLTF/Draco', 'PBR Materials'],
    featured: true,
    githubUrl: 'https://github.com/vedantsambare/aurum-and-noir',
    liveUrl: 'https://aurum-noir.demo.app',
    summary: 'A bespoke digital exhibition for master horology timepieces. Features exploded 3D component inspection (escapement, balance wheel, tourbillon carriage), studio rim lighting, and smooth editorial scroll storytelling.',
    metrics: [
      { label: '3D Geometry', value: '42 Sub-Assemblies' },
      { label: 'PBR Shading', value: 'Calibrated Metallic' },
      { label: 'Interaction Response', value: '< 16ms' },
      { label: 'Accessibility Score', value: '100/100' },
    ],
    problem: 'Ultra-luxury mechanical watches are marvels of micro-engineering with hundreds of microscopic moving components. Conventional marketing fails to reveal the breathtaking internal complexity of mechanical movements.',
    objective: 'Build an interactive exploded-view 3D viewer where collectors can dissect every gear, jewel bearing, and balance spring with buttery smooth 60fps scroll transitions and master-grade lighting.',
    researchAndAnalysis: 'Analyzed high-end Swiss horology CAD blueprints to recreate accurate gear train ratios and balance wheel oscillations in mathematical Three.js rotation matrices.',
    solutionArchitecture: {
      description: 'The application uses physically based rendering (PBR) with custom environment maps (HDRI) to render brushed titanium, mirror-polished rose gold, and sapphire crystal reflections with studio fidelity.',
      pipelineSteps: [
        {
          title: '01. Horology Mechanical Rigging',
          detail: 'Separated 42 mechanical components into parent-child transform hierarchies for synchronized gear oscillation.',
        },
        {
          title: '02. Exploded View Interpolation',
          detail: 'Mapped user scroll position to radial explosion vectors, gracefully separating the bezel, crystal, dial, movement, and case back.',
        },
        {
          title: '03. Studio Lighting Studio',
          detail: 'Configured a 3-point dynamic lighting setup with key warm amber directional light, cool fill light, and moving gold rim specular reflections.',
        },
        {
          title: '04. Editorial Storytelling Panels',
          detail: 'Positioned high-contrast typography cards that reveal historical craftsmanship details as individual movement components come into focus.',
        },
      ],
    },
    keyFeatures: [
      'Scroll-driven 3D exploded view revealing 42 mechanical timepiece components',
      'Material finish switcher (Rose Gold, Brushed Titanium, Carbon Noir)',
      'Real-time escapement mechanism tick-rate simulation',
      'Macro inspection lens zoom with depth-of-field blur',
      'Editorial technical specifications table with tabular numerals',
    ],
    challengesAndSolutions: [
      {
        challenge: 'Accurately rendering realistic sapphire crystal glass refractions without crushing GPU fill-rate.',
        solution: 'Used `MeshPhysicalMaterial` with transmission, calibrated roughness (0.05), and custom IOR (Index of Refraction: 1.77) with targeted shadow casting.',
      },
      {
        challenge: 'Synchronizing scroll progress smoothly with 3D animation ticks across varying browser refresh rates (60Hz, 120Hz, 144Hz).',
        solution: 'Implemented a dampening lerp algorithm driven by clock delta time rather than raw frame count.',
      },
    ],
    resultsAndImpact: [
      'Delivered an authentic haute-horlogerie digital presentation praised for visual fidelity.',
      'Achieved a 100/100 Lighthouse Accessibility score with full ARIA semantics.',
      'Maintained consistent 60 FPS across both desktop and tablet displays.',
    ],
    lessonsLearned: [
      'Subtle lighting and material calibration create luxury perception far more effectively than loud animations.',
      'Exploded-view spatial interactions transform static CAD geometry into memorable educational storytelling.',
    ],
    previewGradient: 'from-[#D4AF37]/20 via-[#18181F] to-[#09090B]',
  },
  {
    slug: 'neural-lens-vision',
    title: 'NeuralLens — Edge AI Vision System',
    tagline: 'Real-time computer vision & anomaly detection for industrial manufacturing pipelines',
    category: 'Data Science & AI',
    period: '2024 – 2025',
    role: 'Computer Vision & Deep Learning Engineer',
    clientOrContext: 'Smart Factory Automation',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'YOLOv8', 'TorchScript', 'ONNX', 'FastAPI', 'Docker'],
    featured: false,
    githubUrl: 'https://github.com/vedantsambare/neural-lens-vision',
    liveUrl: 'https://neural-lens.demo.app',
    summary: 'A high-throughput computer vision pipeline engineered to detect micro-defects on assembly line components at 45 FPS with sub-millimeter precision and automated alerting.',
    metrics: [
      { label: 'Inference Speed', value: '45 FPS' },
      { label: 'mAP@0.5', value: '96.8%' },
      { label: 'False Positive Rate', value: '< 0.4%' },
      { label: 'Defect Types', value: '12 Classes' },
    ],
    problem: 'Manual visual inspection on high-speed industrial manufacturing lines suffers from human fatigue, leading to missed micro-fractures, surface scratches, and costly customer warranty claims.',
    objective: 'Train, quantize, and deploy a lightweight convolutional deep neural network capable of real-time defect segmentation directly on edge industrial hardware with zero cloud latency.',
    researchAndAnalysis: 'Annotated a dataset of 8,500+ high-resolution macro surface images across 12 distinct defect classes. Applied heavy data augmentation (rotation, Gaussian noise, illumination shifts) to guarantee resilience under harsh factory lighting.',
    solutionArchitecture: {
      description: 'Trained a custom YOLOv8-seg architecture, distilled into an ONNX runtime engine with TensorRT FP16 quantization for edge accelerator deployment.',
      pipelineSteps: [
        {
          title: '01. Image Preprocessing & Augmentation',
          detail: 'Standardized camera sensor feeds with adaptive histogram equalization (CLAHE) and geometric distortion correction.',
        },
        {
          title: '02. Deep Architecture Training',
          detail: 'Fine-tuned backbone feature extractors using Focal Loss and Dice Loss to prioritize difficult micro-crack boundaries.',
        },
        {
          title: '03. Model Quantization',
          detail: 'Quantized 32-bit floating point weights to 16-bit TensorRT engines, cutting inference latency by 3.4x without losing precision.',
        },
        {
          title: '04. Real-time Telemetry Gateway',
          detail: 'Streamed bounding boxes and defect telemetry over WebSocket to industrial PLC controllers and monitoring consoles.',
        },
      ],
    },
    keyFeatures: [
      'Sub-millimeter micro-crack and surface scratch segmentation',
      'Edge deployment with 45+ FPS processing on embedded Jetson GPUs',
      'Automated defect heatmaps and statistical quality control (SQC) logs',
      'Real-time WebSocket alerting to factory floor controllers',
    ],
    challengesAndSolutions: [
      {
        challenge: 'Severe reflections on polished aluminum components triggering false defect detections.',
        solution: 'Introduced polarized camera normalization layers and synthetic reflection noise during the augmentation phase.',
      },
      {
        challenge: 'Thermal throttling on edge embedded devices during continuous 24/7 processing.',
        solution: 'Optimized thread affinity and batch buffer pools, keeping GPU temperatures stable at < 68°C.',
      },
    ],
    resultsAndImpact: [
      'Achieved 96.8% mAP across 12 defect classes with < 0.4% false positive rate.',
      'Reduced factory line inspection escape rates from 4.2% down to 0.12%.',
    ],
    lessonsLearned: [
      'Edge quantization requires meticulous validation on boundary cases to avoid precision loss on tiny defect contours.',
    ],
    previewGradient: 'from-[#E25822]/15 via-[#18181F] to-[#09090B]',
  },
  {
    slug: 'sql-query-optimizer-insights',
    title: 'SQL Plan Inspector & Optimizer',
    tagline: 'Automated database query execution plan visualizer and index recommender',
    category: 'Full Stack',
    period: '2024',
    role: 'Database Systems & Backend Engineer',
    clientOrContext: 'Developer Tooling Project',
    technologies: ['PostgreSQL', 'Python', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'NetworkX'],
    featured: false,
    githubUrl: 'https://github.com/vedantsambare/sql-plan-optimizer',
    liveUrl: 'https://sql-optimizer.demo.app',
    summary: 'A visual database diagnostic tool that ingests raw `EXPLAIN (ANALYZE, BUFFERS)` JSON plans, models cost trees, highlights sequential scan bottlenecks, and generates synthesized DDL index recommendations.',
    metrics: [
      { label: 'Avg Query Speedup', value: '4.8x' },
      { label: 'Plan Parsing Speed', value: '< 8ms' },
      { label: 'Index Precision', value: '98%' },
      { label: 'Supported DBMS', value: 'Postgres / MySQL' },
    ],
    problem: 'Reading raw tabular EXPLAIN output with complex nested hash joins and CTE scans is tedious and error-prone, causing developers to overlook missing composite indexes.',
    objective: 'Provide a clean visual directed acyclic graph (DAG) of query execution costs, identifying the exact node where memory spills to disk or where row estimates diverge significantly from actual rows.',
    researchAndAnalysis: 'Analyzed 200+ slow query execution plans across transactional schemas, establishing mathematical heuristics for identifying row estimate skews and unnecessary sequential scans.',
    solutionArchitecture: {
      description: 'Parses database execution JSON trees, transforms nodes into interactive SVG DAG nodes with relative cost bar overlays, and computes optimal multi-column B-Tree index candidates.',
      pipelineSteps: [
        {
          title: '01. Plan Tree Ingestion',
          detail: 'Parses JSON query execution plans from PostgreSQL and MySQL, validating node structures.',
        },
        {
          title: '02. Cost & Buffer Analysis',
          detail: 'Calculates shared hit ratios, disk temp read blocks, and cost percentage deltas per child node.',
        },
        {
          title: '03. Graph Visualization',
          detail: 'Renders an interactive hierarchical tree with zoom/pan and visual bottleneck heatmaps.',
        },
        {
          title: '04. Index Recommendation Engine',
          detail: 'Generates ready-to-copy `CREATE INDEX CONCURRENTLY` DDL statements tailored to filter predicates.',
        },
      ],
    },
    keyFeatures: [
      'Interactive DAG execution plan explorer with cost breakdown bars',
      'Row estimate vs actual row skew indicator (highlighting stale statistics)',
      'Automated composite index generation for slow filter predicates',
      'Buffer usage analysis (Cache hits vs expensive disk reads)',
    ],
    challengesAndSolutions: [
      {
        challenge: 'Handling massive execution plan trees with 80+ join and aggregation nodes without lag.',
        solution: 'Implemented canvas and SVG LOD rendering with collapsible sub-branches.',
      },
    ],
    resultsAndImpact: [
      'Helped developers achieve an average 4.8x execution time reduction on targeted query benchmarks.',
      'Adopted as an internal diagnostic tool by developer peers.',
    ],
    lessonsLearned: [
      'Clear visualization turns complex database internals into intuitive engineering actions.',
    ],
    previewGradient: 'from-[#F59E0B]/15 via-[#18181F] to-[#09090B]',
  },
];
