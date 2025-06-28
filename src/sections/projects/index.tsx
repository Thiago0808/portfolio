import Card from '../../components/Cards'
import './index.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import SectionTitle from '../../components/SectionTitle';

function Projects() {

  const cardsData = [
    {
      name: "Hello World",
      technologies: ["HTML"],
      description:
        "Não poderia ser diferente! Para qualquer dev, o primeiro passo é sempre esse. Com HTML puro, esse foi o primeiro site que desenvolvi. O objetivo principal era entender os fundamentos de um site — como as tags <title>, <p>, <h1> — e os conceitos básicos do processo de desenvolvimento, como o uso do VS Code, Go Live e execução local via localhost.",
      image: "/src/assets/img/faculmatch.png",
      link: "/src/assets/img/faculmatch.png",
    },
    {
      name: "Hello",
      technologies: ["HTML"],
      description:
        "Não poderia ser diferente! Para qualquer dev, o primeiro passo é sempre esse. Com HTML puro, esse foi o primeiro site que desenvolvi. O objetivo principal era entender os fundamentos de um site — como as tags <title>, <p>, <h1> — e os conceitos básicos do processo de desenvolvimento, como o uso do VS Code, Go Live e execução local via localhost.",
      image: "/src/assets/img/faculmatch.png",
      link: "/src/assets/img/faculmatch.png",
    },
  ]

  return (
    <div className="projects">
      <SectionTitle title={"Projetos"}/>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={false}
        emulateTouch={true}
      >
        {cardsData.map((card, index) => (
          <div key={index}>
            <Card {...card} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Projects
