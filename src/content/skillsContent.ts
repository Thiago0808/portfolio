// src/data/techData.ts
export type TechTimeKey =
  | "lt_6_months"
  | "gt_6_months"
  | "gt_1_year"
  | "gt_2_years"
  | "6_months"
  | "1_year";

export type TechTypeKey =
  | "language"
  | "framework"
  | "library"
  | "database"
  | "server"
  | "ide"
  | "os"
  | "devops";

export interface TechItem {
  name: string;
  type: TechTypeKey;
  time: TechTimeKey;
}

export const skillsContent: TechItem[] = [
  { name: "HTML", type: "language", time: "gt_2_years" },
  { name: "CSS", type: "language", time: "gt_2_years" },
  { name: "JavaScript", type: "language", time: "gt_2_years" },
  { name: "TypeScript", type: "language", time: "gt_6_months" },
  { name: "PHP", type: "language", time: "gt_2_years" },
  { name: "Java", type: "language", time: "6_months" },
  { name: "Python", type: "language", time: "gt_2_years" },
  { name: "React", type: "library", time: "gt_6_months" },
  { name: "React Native", type: "library", time: "lt_6_months" },

  { name: "Visual Studio Code", type: "ide", time: "gt_2_years" },
  { name: "PyCharm", type: "ide", time: "1_year" },

  { name: "Expo", type: "framework", time: "lt_6_months" },
  { name: "Bootstrap", type: "framework", time: "gt_2_years" },
  { name: "Flask", type: "framework", time: "gt_6_months" },

  { name: "Ajax", type: "library", time: "6_months" },

  { name: "MySQL", type: "database", time: "gt_2_years" },
  { name: "MariaDB", type: "database", time: "gt_2_years" },
  { name: "phpMyAdmin", type: "database", time: "gt_2_years" },

  { name: "Vercel", type: "server", time: "gt_1_year" },
  { name: "Sentora", type: "server", time: "1_year" },
  { name: "Hostinger", type: "server", time: "gt_1_year" },

  { name: "Linux", type: "os", time: "gt_2_years" },
  { name: "Docker", type: "devops", time: "gt_6_months" },
];
