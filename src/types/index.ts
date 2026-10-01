export type ProjectCategory = 'All' | 'Data Science & AI' | 'Full Stack' | 'Creative 3D';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  period: string;
  role: string;
  clientOrContext: string;
  technologies: string[];
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  summary: string;
  metrics: ProjectMetric[];
  problem: string;
  objective: string;
  researchAndAnalysis: string;
  solutionArchitecture: {
    description: string;
    pipelineSteps: { title: string; detail: string }[];
  };
  keyFeatures: string[];
  challengesAndSolutions: { challenge: string; solution: string }[];
  resultsAndImpact: string[];
  lessonsLearned: string[];
  previewGradient: string;
}

export interface SkillItem {
  name: string;
  level: string; // e.g., 'Advanced', 'Proficient', 'Core Competency'
  description: string;
  tags: string[];
}

export interface SkillCategoryGroup {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  institutionOrRole: string;
  location: string;
  description: string;
  highlights: string[];
  type: 'education' | 'engineering' | 'ai-ml';
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  coursework: string[];
  capstoneProject: {
    title: string;
    description: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  featured: boolean;
  tags: string[];
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      codeSnippet?: {
        language: string;
        code: string;
      };
    }[];
    conclusion: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
