import Card from '../../components/Cards'
import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SectionTitle from '../../components/SectionTitle';

function Projects() {

  const cardsData = [
    {
      name: "FaculMatch",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      description:
        "Meu primeiro grande projeto, a FaculMatch começou como um projeto escolar, sendo um site na qual um estudante poderia através de filtros, encontrar a sua faculdade ideal. O projeto se expandiu para fora do IFSC, com domínio próprio, novas funcionalides, e agora com faculdades do país inteiro!",
      image: "/src/assets/img/projects/faculmatch.png",
      link: "https://faculmatch.com/",
    },
    {
      name: "Hello",
      technologies: ["HTML"],
      description:
        "Nsitevia localhost.",
      image: "/src/assets/img/projects/faculmatch.png",
      link: "/src/assets/img/faculmatch.png",
    },
    {
      name: "Hello",
      technologies: ["HTML"],
      description:
        "Nsitevia localhost.",
      image: "/src/assets/img/projects/faculmatch.png",
      link: "/src/assets/img/faculmatch.png",
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
