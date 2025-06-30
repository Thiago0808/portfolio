import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTitle from '../../components/SectionTitle';
import ExperienceCard from '../../components/ExperienceCard';

function Experience() {

  const cardsData = [
    {
      place: 'Del Grande',
      title: "Dev Full Stack Jr",
      duration: "12/2024-Atual",
      paragraphs: [
        'Como Desenvolver Júnior na Del Grande, trabalho diariamente com Python, MySQL, React e TypeScript, em mais de 15 repositórios conectados ao GitLab e  mais de 80 de tabelas de banco de dados.',
        'Uma de minhas qualidades mais elogiadas na empresa é a atenção aos detalhes, analisando toda a quaisquer possibilidade de erro. Devido a essa atenção, consegui perceber e corrigir mais de 300 bugs.',
        'Forneci inúmeras sugestões focadas na experiência do cliente e na escalabilidade e desenvolvi em mais de 40 telas com a biblioteca Ant Design e componentização.',
        'Trabalho tanto no frontend quanto no backend, assim como em sua conexão com mais de 300 rotas, as criando, otimizando e adaptando. Também lido com mais de 10 APIs.',
        'Sou o principal desenvolvedor das seções de monitor e relatórios, devido às minhas capacidades matemáticas, de análise e de facilidade em lidar com mais de 5000 dados simultaneamente, em mais de 10 relatórios e mais de 50 tipos de dados.',
      ],
      image: "/src/assets/img/experience/dg.png",
    },
    {
      place: 'IFSC Garopaba',
      title: "Monitor de Matemática",
      duration: "08/2023-12/2023",
      paragraphs: [
        'Como monitor de matemática no IFSC, assumi dezenas de responsabilidades para apoiar o aprendizado dos mais de 25 alunos que me procuraram, fortalecendo o ambiente educacional, colaborando com a professora da disciplina para garantir a eficácia das estratégias de ensino.',
        'Colaborei na criação de apostilas, desenvolvendo recursos didáticos que auxiliaram na compreensão dos conteúdos de matemática.',
        'Desempenhei um papel essencial na comunicação efetiva com as turmas, garantindo a clareza nas informações relativas aos conteúdos e atividades programadas.',
        'Ministrei quase 60 aulas de reforço, proporcionando suporte aos alunos em diversos tópicos de matemática.',
      ],
      image: "/src/assets/img/experience-dg.png",
    },
    {
      place: 'IFSC Garopaba',
      title: "Monitor de Matemática",
      duration: "08/2023-12/2023",
      paragraphs: [
        'Como monitor de matemática no IFSC, assumi dezenas de responsabilidades para apoiar o aprendizado dos mais de 25 alunos que me procuraram, fortalecendo o ambiente educacional, colaborando com a professora da disciplina para garantir a eficácia das estratégias de ensino.',
        'Colaborei na criação de apostilas, desenvolvendo recursos didáticos que auxiliaram na compreensão dos conteúdos de matemática.',
        'Desempenhei um papel essencial na comunicação efetiva com as turmas, garantindo a clareza nas informações relativas aos conteúdos e atividades programadas.',
        'Ministrei quase 60 aulas de reforço, proporcionando suporte aos alunos em diversos tópicos de matemática.',
      ],
      image: "/src/assets/img/experience-dg.png",
    },
  ]

  return (
    <div className="experience" id="experiencia">
      <SectionTitle title={"EXPERIÊNCIA"} positioning='mid-right'/>
      <div className="experiences-div">
          {cardsData.map((card, index) => (
            <div className='experience-div' key={index}>
              <ExperienceCard {...card} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Experience
