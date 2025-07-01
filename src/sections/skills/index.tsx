import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTitle from '../../components/SectionTitle';
import MySQLTable from '../../components/SkillsTable';

const techData = [
  // Linguagens & Tecnologias
  { name: "HTML", type: "Linguagem", time: "Mais de 2 anos" },
  { name: "CSS", type: "Linguagem", time: "Mais de 2 anos" },
  { name: "JavaScript", type: "Linguagem", time: "Mais de 2 anos" },
  { name: "TypeScript", type: "Linguagem", time: "Mais de 6 meses" },
  { name: "PHP", type: "Linguagem", time: "Mais de 2 anos" },
  { name: "Java", type: "Linguagem", time: "6 meses" },
  { name: "Python", type: "Linguagem", time: "Mais de 2 anos" },
  { name: "React", type: "Biblioteca", time: "Mais de 6 meses" },
  { name: "React Native", type: "Biblioteca", time: "Menos de 6 meses" },

  // IDEs
  { name: "Visual Studio Code", type: "IDE", time: "Mais de 2 anos" },
  { name: "PyCharm", type: "IDE", time: "1 ano" },

  // Frameworks
  { name: "Expo", type: "Framework", time: "Menos de 6 meses" },
  { name: "Bootstrap", type: "Framework", time: "Mais de 2 anos" },
  { name: "Flask", type: "Framework", time: "Mais de 6 meses" },

  // Bibliotecas
  { name: "Ajax", type: "Biblioteca", time: "6 meses" },

  // Banco de Dados
  { name: "MySQL", type: "Banco de Dados", time: "Mais de 2 anos" },
  { name: "MariaDB", type: "Banco de Dados", time: "Mais de 2 anos" },
  { name: "phpMyAdmin", type: "Gerenciador de Banco", time: "Mais de 2 anos" },

  // Servidores
  { name: "Vercel", type: "Servidor", time: "Mais de 1 ano" },
  { name: "Sentora", type: "Servidor", time: "1 ano" },
  { name: "Hostinger", type: "Servidor", time: "Mais de 1 ano" },

  // Sistemas & DevOps
  { name: "Linux", type: "Sistema Operacional", time: "Mais de 2 anos" },
  { name: "Docker", type: "DevOps", time: "Mais de 6 meses" },
];

function Skills() {

  return (
    <div className="skills" id="habilidades">
      <SectionTitle title={"HABILIDADES"} positioning='center'/>
      <MySQLTable data={techData} />
    </div>
  );
}

export default Skills
