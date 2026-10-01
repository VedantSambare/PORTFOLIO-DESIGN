import { EducationItem } from '../types';

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Engineering',
    institution: 'Savitribai Phule Pune University / Affiliated Institute',
    location: 'Pune, Maharashtra, India',
    period: '2023 – 2026',
    grade: 'First Class with Distinction',
    coursework: [
      'Machine Learning & Pattern Recognition',
      'Database Management Systems & Advanced SQL',
      'Data Structures & Analysis of Algorithms',
      'Artificial Intelligence & Expert Systems',
      'Web Technologies & Distributed Computing',
      'Operating Systems & System Architecture',
    ],
    capstoneProject: {
      title: 'Workforce Predictive Intelligence & Attrition Forecasting System',
      description: 'An enterprise-scale predictive modeling framework employing ensemble gradient boosting and SHAP value explainability to diagnose workforce satisfaction metrics and forecast retention risks.',
    },
  },
  {
    degree: 'Diploma in Engineering',
    field: 'Computer Engineering',
    institution: 'Government / Premier Polytechnic Institute',
    location: 'Pune, Maharashtra, India',
    period: '2019 – 2022',
    grade: 'First Class with Distinction (Top 5% Cohort)',
    coursework: [
      'Object-Oriented Programming (Java & C++)',
      'Relational Database Management (RDBMS & MySQL)',
      'Data Structures in C/C++',
      'Computer Networks & Protocols',
      'Software Engineering & Testing Methodologies',
    ],
    capstoneProject: {
      title: 'Automated Academic Information & Performance Management Suite',
      description: 'Engineered a client-server Java desktop application backed by MySQL and JDBC to streamline student grades, attendance tracking, and automated performance reporting.',
    },
  },
];
