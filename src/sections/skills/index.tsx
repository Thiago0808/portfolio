import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTitle from '../../components/SectionTitle';
import MySQLTable from '../../components/SkillsTable';

const techData = [
  // Linguagens & Tecnologias
  { name: "HTML", type: "Linguagem", time: "Mais de 1 ano" },
  { name: "CSS", type: "Linguagem", time: "Mais de 1 ano" },
  { name: "JavaScript", type: "Linguagem", time: "Mais de 1 ano" },
  { name: "TypeScript", type: "Linguagem", time: "Mais de 1 ano" },
  { name: "PHP", type: "Linguagem", time: "Mais de 1 ano" },
  { name: "Java", type: "Linguagem", time: "Mais de 1 ano" },
  { name: "Python", type: "Linguagem", time: "Mais de 1 ano" },
  { name: "React", type: "Biblioteca", time: "Mais de 1 ano" },
  { name: "React Native", type: "Biblioteca", time: "Mais de 1 ano" },

  // IDEs
  { name: "Visual Studio Code", type: "IDE", time: "Mais de 1 ano" },
  { name: "PyCharm", type: "IDE", time: "Mais de 1 ano" },

  // Frameworks
  { name: "Expo", type: "Framework", time: "Mais de 1 ano" },
  { name: "Bootstrap", type: "Framework", time: "Mais de 1 ano" },
  { name: "Flask", type: "Framework", time: "Mais de 1 ano" },

  // Bibliotecas
  { name: "Ajax", type: "Biblioteca", time: "Mais de 1 ano" },

  // Banco de Dados
  { name: "MySQL", type: "Banco de Dados", time: "Mais de 1 ano" },
  { name: "MariaDB", type: "Banco de Dados", time: "Mais de 1 ano" },
  { name: "phpMyAdmin", type: "Gerenciador de Banco", time: "Mais de 1 ano" },

  // Servidores
  { name: "Vercel", type: "Servidor", time: "Mais de 1 ano" },
  { name: "Sentora", type: "Servidor", time: "Mais de 1 ano" },
  { name: "Hostinger", type: "Servidor", time: "Mais de 1 ano" },

  // Sistemas & DevOps
  { name: "Linux", type: "Sistema Operacional", time: "Mais de 1 ano" },
  { name: "Docker", type: "DevOps", time: "Mais de 1 ano" },
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
