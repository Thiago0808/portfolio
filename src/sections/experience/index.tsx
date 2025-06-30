import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTitle from '../../components/SectionTitle';
import ExperienceCard from '../../components/ExperienceCard';

function Experience() {

  const cardsData = [
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
