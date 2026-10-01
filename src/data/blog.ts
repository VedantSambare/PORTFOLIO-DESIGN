import { BlogPost } from '../types';

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    slug: 'demystifying-shap-values-machine-learning-explainability',
    title: 'Demystifying SHAP Values: Why Explainability Matters in Enterprise ML',
    excerpt: 'How Shapley Additive exPlanations transform opaque black-box machine learning models into transparent, trust-worthy business intelligence tools.',
    category: 'Data Science',
    publishedAt: '2026-02-18',
    readTime: '6 min read',
    featured: true,
    tags: ['Machine Learning', 'SHAP', 'Python', 'Explainability', 'Model Evaluation'],
    content: {
      intro: 'In production machine learning pipelines, raw accuracy scores (such as 95% on a validation split) are rarely enough to win the trust of business stakeholders. Whether evaluating credit risk, predicting employee churn, or diagnosing industrial equipment failures, decision-makers demand to know *why* a model reached a specific conclusion. This is where SHAP (SHapley Additive exPlanations), grounded in cooperative game theory, becomes essential.',
      sections: [
        {
          heading: '01. The Black Box Dilemma in Production Models',
          body: 'Ensemble methods like XGBoost, LightGBM, and Random Forests create complex non-linear decision boundaries. While traditional feature importance metrics (like Gini impurity or gain) tell us which features were useful overall across the training tree, they fail to explain individual predictions and are prone to severe statistical bias when features are correlated.',
        },
        {
          heading: '02. Cooperative Game Theory & Shapley Formula',
          body: 'Lloyd Shapley formulated a mathematical theorem in 1953 to distribute payouts among players in a cooperative game according to their marginal contributions. In ML, the "game" is the model prediction, the "players" are the input features, and the "payout" is the difference between the actual prediction and the base expected value.',
          codeSnippet: {
            language: 'python',
            code: `import shap
import xgboost as xgb
from sklearn.model_selection import train_test_split

# Train model
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = xgb.XGBClassifier(n_estimators=100, max_depth=4)
model.fit(X_train, y_train)

# Compute TreeSHAP values efficiently in O(TLD^2) time
explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)

# Generate individual prediction waterfall chart
shap.waterfall_plot(explainer(X_test)[0])`,
          },
        },
        {
          heading: '03. Practical Implementation: Global vs Local Explainability',
          body: 'When building our Employee Performance Prediction pipeline, SHAP provided dual benefits: globally, it revealed that Overtime Hours and Promotion Gap Velocity were the primary systemic drivers; locally, for an individual flagged employee, it showed that an abrupt 40% jump in workload without corresponding compensation adjustment was the isolated trigger.',
        },
      ],
      conclusion: 'Integrating SHAP directly into user-facing dashboards bridges the gap between raw statistical inference and actionable executive strategy. Interpretability is not an afterthought—it is the foundation of responsible, robust AI systems.',
    },
  },
  {
    slug: 'optimizing-threejs-webgl-60fps-react',
    title: 'Achieving Smooth 60 FPS in Three.js WebGL with React 19 & Tailwind',
    excerpt: 'Architectural strategies for zero-latency 3D scenes: memory disposal, geometry instancing, DPR clamping, and shader optimization.',
    category: 'Creative Dev',
    publishedAt: '2026-01-24',
    readTime: '5 min read',
    featured: true,
    tags: ['Three.js', 'WebGL', 'React', 'Performance', 'Creative Dev'],
    content: {
      intro: 'Adding 3D spatial scenes to web applications can elevate a portfolio from conventional to unforgettable. However, unoptimized WebGL scenes quickly cause dropped frames, fan spin-up, and mobile thermal throttling. Here is the battle-tested engineering blueprint for keeping Three.js animations locked at a smooth 60 FPS.',
      sections: [
        {
          heading: '01. Device Pixel Ratio (DPR) Clamping',
          body: 'Modern smartphones and high-density Retina screens often have a DPR of 3 or 4. Rendering a full-screen canvas at DPR 3 means calculating 9x more pixels per frame than standard 1080p, crushing GPU fill rates. Always clamp renderer pixel ratio to a maximum of 1.5 or 2.',
          codeSnippet: {
            language: 'typescript',
            code: `// Correct DPR clamping in Three.js initialization
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
const maxDPR = Math.min(window.devicePixelRatio || 1, 2);
renderer.setPixelRatio(maxDPR);
renderer.setSize(container.clientWidth, container.clientHeight);`,
          },
        },
        {
          heading: '02. Bulletproof Resource Disposal on Unmount',
          body: 'Single Page Apps (SPAs) frequently mount and unmount components. Three.js textures, geometries, and materials reside in GPU memory and will not be garbage collected automatically by JavaScript. Every WebGL canvas MUST implement strict cleanup routines.',
          codeSnippet: {
            language: 'typescript',
            code: `// Clean disposal pattern in React useEffect
useEffect(() => {
  return () => {
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh) {
        object.geometry?.dispose();
        if (Array.isArray(object.material)) {
          object.material.forEach((mat) => mat.dispose());
        } else if (object.material) {
          object.material.dispose();
        }
      }
    });
    renderer.dispose();
  };
}, []);`,
          },
        },
        {
          heading: '03. Decoupling DOM Render Cycles from requestAnimationFrame',
          body: 'Never bind Three.js frame updates to React component state. Instead, run your animation loop inside a persistent requestAnimationFrame callback, mutating Three.js object matrices and uniforms directly in GPU memory without triggering React reconciliation.',
        },
      ],
      conclusion: 'By pairing disciplined GPU resource management with lightweight shader math, you can deliver breathtaking cinematic 3D experiences that run effortlessly on low-power mobile devices and high-end workstations alike.',
    },
  },
  {
    slug: 'sql-query-tuning-composite-indexes-postgres',
    title: 'Mastering SQL Execution Plans: The Science of Composite B-Tree Indexes',
    excerpt: 'A deep dive into EXPLAIN ANALYZE, index scan mechanics, filter order, and eliminating expensive sequential scans on large datasets.',
    category: 'Database Systems',
    publishedAt: '2025-11-12',
    readTime: '7 min read',
    featured: false,
    tags: ['PostgreSQL', 'SQL', 'Indexes', 'Query Tuning', 'Performance'],
    content: {
      intro: 'When databases grow from thousands to millions of rows, naive queries that once ran in 2ms suddenly degrade to 2,500ms multi-second bottlenecks. Understanding the PostgreSQL query planner and architecting mathematically sound composite indexes is an indispensable skill for every full-stack and data engineer.',
      sections: [
        {
          heading: '01. Decoding EXPLAIN (ANALYZE, BUFFERS)',
          body: 'Raw queries must be scrutinized through `EXPLAIN (ANALYZE, BUFFERS)`. Look for Seq Scan on large tables, discrepancies between Estimated Rows vs Actual Rows (indicating stale `ANALYZE` statistics), and Disk Temporary Spills during sorting.',
        },
        {
          heading: '02. The Leftmost Prefix Rule in Composite B-Trees',
          body: 'A composite index on `(status, created_at, user_id)` can be used for queries filtering on `status`, or `(status, created_at)`. However, a query filtering solely on `created_at` cannot utilize this index efficiently. Index column ordering must match query cardinality and equality filter predicates first, followed by range filters.',
        },
      ],
      conclusion: 'Investing time into query execution analysis transforms sluggish applications into high-throughput systems without spending a dime on upgraded cloud hardware.',
    },
  },
];
