import "./style.css";
import SectionTitle from "../../components/SectionTitle";
import MySQLTable from "../../components/SkillsTable";
import type { SectionsProps } from "../../App";
import { skillsContent } from "../../content/skillsContent";
import { contents } from "../../content/languages/content";

function Skills({ language }: SectionsProps) {
  const content = contents[language].skills;

  const timeOrder: Record<string, number> = {
    lt_6_months: 1,
    "6_months": 2,
    gt_6_months: 3,
    "1_year": 4,
    gt_1_year: 5,
    "2_years": 6,
    gt_2_years: 7,
    "3_years": 8,
    gt_3_years: 9,
  };

  const sortedSkills = [...skillsContent].sort(
    (a, b) => timeOrder[b.time] - timeOrder[a.time]
  );


  const translatedData = sortedSkills.map((tech) => ({
    name: tech.name,
    type: content.types[tech.type],
    time: content.time[tech.time],
  }));

  return (
    <div className="skills" id="habilidades">
      <SectionTitle title={content.title} positioning="center" />
      <MySQLTable data={translatedData} />
    </div>
  );
}

export default Skills;
