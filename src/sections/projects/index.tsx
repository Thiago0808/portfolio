import Card from '../../components/Cards'
import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SectionTitle from '../../components/SectionTitle';

function Projects() {

  const cardsData = [
    {
      name: "FaculMatch",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
      description:
        "Meu primeiro grande projeto, a FaculMatch começou como um projeto escolar, sendo um site na qual um estudante poderia através de filtros, encontrar a sua faculdade ideal. O projeto se expandiu para fora do IFSC, novas funcionalides e faculdades do país inteiro!",
      image: "/src/assets/img/projects/faculmatch.png",
      link: "https://faculmatch.com/",
    },
    {
      name: "Timeline",
      technologies: ["React", "TypeScript"],
      description:
        "A Linha do Tempo é um projeto onde apresento todos os meus pequenos projetos em um único repositório, focando principalmente nos projetos do meu curso técnico, mas também em meus projetos de treinamento, e futuros projetos da minha graduação.",
      image: "/src/assets/img/projects/timeline.png",
      link: "https://thiagomartins.dev/timeline",
    },
    {
      name: "WayStation",
      technologies: ["React Native", "TypeScript", "CSS", "Expo"],
      description:
        "Trabalhei no frontend, sendo o responsável pela integração com o backend, via endpoints. Trabalhando com expo, também realizei o controle de versões do aplicativo. O app ainda não está pronto, então o botão direciona a um website falando sobre.",
      image: "/src/assets/img/projects/waystation.png",
      link: "https://waystation.com.br/",
    },
    {
      name: "CodeSnape",
      technologies: ["HTML", "CSS", "PHP", "SQL", "Bootstrap"],
      description:
        "Neste projeto, você é capaz de armazenar trechos de código, para ter rápido acesso. Possui sistema de contas, e um CRUD completo dos trechos, sendo possível selecionar suas linguagens, assim como criar e aplicar tags aos trechos.",
      image: "/src/assets/img/projects/codesnape.png",
      link: "https://thiagomartins.dev/codesnape",
    },
    {
      name: "Reptors Timequake",
      technologies: ["HTML", "CSS", "JavaScript", "Vercel"],
      description:
        "Este projeto foi parte de uma Game Jam, com temas de terror, dinossauro e viagem no tempo. Feito em 2 semanas, se trata de um jogo de sobrevivência baseado em escolhas, no qual o jogador precisa chegar ao último dia para voltar para o presente.",
      image: "/src/assets/img/projects/reptors.png",
      link: "https://reptors-timequake.vercel.app/",
    },
  ]

  return (
    <div className="projects" id="projetos">
      <SectionTitle title={"PROJETOS"} positioning='mid-left'/>
      <div className="carousel">
        <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={false}
          emulateTouch={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="arrow arrow-prev"
              >
                ‹
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="arrow arrow-next"
              >
                ›
              </button>
            )
          }
        >
          {cardsData.map((card, index) => (
            <div key={index}>
              <Card {...card} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Projects
