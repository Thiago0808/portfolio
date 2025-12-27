import "./style.css";
import SectionTitle from "../../components/SectionTitle";
import MySQLTable from "../../components/SkillsTable";
import type { SectionsProps } from "../../App";
import { skillsContent } from "../../content/skillsContent";
import { contents } from "../../content/content";

function Skills({ language }: SectionsProps) {
  const content = contents[language].skills;

  const translatedData = skillsContent.map((tech) => ({
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
