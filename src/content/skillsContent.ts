export type TechTimeKey =
  | "lt_6_months"
  | "gt_6_months"
  | "gt_1_year"
  | "gt_2_years"
  | "gt_3_years"
  | "6_months"
  | "1_year"
  | "2_years"
  | "3_years"

export type TechTypeKey =
  | "language"
  | "framework"
  | "library"
  | "database"
  | "server"
  | "ide"
  | "os"
  | "devops"
  | "automation";

export interface TechItem {
  name: string;
  type: TechTypeKey;
  time: TechTimeKey;
}

export const skillsContent: TechItem[] = [
  { name: "HTML", type: "language", time: "gt_3_years" },
  { name: "CSS", type: "language", time: "gt_3_years" },
  { name: "JavaScript", type: "language", time: "gt_3_years" },
  { name: "TypeScript", type: "language", time: "gt_1_year" },
  { name: "PHP", type: "language", time: "gt_2_years" },
  { name: "Java", type: "language", time: "gt_1_year" },
  { name: "Python", type: "language", time: "gt_3_years" },

  { name: "React", type: "library", time: "gt_1_year" },
  { name: "React Native", type: "library", time: "6_months" },
  { name: "Ajax", type: "library", time: "6_months" },
  
  { name: "Visual Studio Code", type: "ide", time: "gt_3_years" },
  { name: "PyCharm", type: "ide", time: "1_year" },
  { name: "IntelliJ", type: "ide", time: "1_year" },
  { name: "Android Studio", type: "ide", time: "1_year" },

  { name: "Expo", type: "framework", time: "lt_6_months" },
  { name: "Bootstrap", type: "framework", time: "gt_2_years" },
  { name: "Flask", type: "framework", time: "gt_1_year" },
  { name: "Django", type: "framework", time: "lt_6_months" },
  { name: "Laravel", type: "framework", time: "lt_6_months" },

  { name: "MySQL", type: "database", time: "gt_3_years" },
  { name: "MariaDB", type: "database", time: "gt_3_years" },
  { name: "phpMyAdmin", type: "database", time: "gt_2_years" },

  { name: "Vercel", type: "server", time: "gt_1_year" },
  { name: "Sentora", type: "server", time: "1_year" },
  { name: "Hostinger", type: "server", time: "gt_2_years" },

  { name: "Linux", type: "os", time: "gt_3_years" },
  { name: "Windows", type: "os", time: "gt_1_year" },

  { name: "Docker", type: "devops", time: "gt_1_year" },
  { name: "n8n", type: "automation", time: "lt_6_months" },
];
