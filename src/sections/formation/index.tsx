import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTitle from '../../components/SectionTitle';

function Education() {

  const cardsData = [
    {
      title: "Curso X",
      duration: "21-23",
      location: "Garopaba",
      subjects: ['Algoritmos e Lógicas de Programação', 'Programação Orientada a Objetos'],
      description:
        "Minha experiência foi...",
      image: "/src/assets/img/faculmatch.png",
    },
  ]

  return (
    <div className="education" id="formacao">
      <SectionTitle title={"FORMAÇÃO"}/>
      <div className="formations">
          {cardsData.map((card, index) => (
            <div key={index}>
              {/* <Card {...card} /> */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Education
