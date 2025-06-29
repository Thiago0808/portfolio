import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTitle from '../../components/SectionTitle';

function Experience() {

  const cardsData = [
    {
      place: 'IFSC Garopaba',
      title: "Monitor de Matemática",
      duration: "08/2023-12/2023",
      paragraph: [
        'Algoritmos e Lógica de Programação',
        'Banco de Dados',
        'Empreendedorismo',
        'Inglês Aplicado',
      ],
      image: "/src/assets/img/faculmatch.png",
    },
  ]

  return (
    <div className="experience" id="experiencia">
      <SectionTitle title={"EXPERIÊNCIA"} positioning='mid-right'/>
      <div className="formations">
          {cardsData.map((card, index) => (
            <div key={index}>
              {/* <ExpansiveCard {...card} /> */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Experience
