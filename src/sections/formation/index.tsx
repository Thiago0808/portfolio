import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTitle from '../../components/SectionTitle';
import ExpansiveCard from '../../components/ExpansiveCard';

function Education() {

  const cardsData = [
    {
      title: "Curso Técnico de Informática Integrado ao Ensino Médio",
      place: 'Instituto Federal de Santa Catarina',
      duration: "2021-2023",
      location: "Garopaba SC",
      subjects: [
        'Algoritmos e Lógica de Programação',
        'Banco de Dados',
        'Empreendedorismo',
        'Inglês Aplicado',
        'Introdução à Informática',
        'Manutenção e Configuração de Computadores',
        'Programação Web',
        'Programação e Engenharia de Software',
        'Programação para Dispositivos Móveis',
        'Projeto Integrador',
        'Redes de Computadores',
        'Responsabilidade Socioambiental e Sustentabilidade',
        'Tópicos Avançados em Informática'
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue orci, ultricies ut nisi at, dapibus viverra lacus. Donec ut arcu id ante mollis posuere vitae eu mi. Curabitur sed diam a orci egestas rhoncus. Nunc porta felis diam, eget porta massa posuere at. Proin ac purus eleifend, volutpat metus vel, molestie urna.",
      image: "/src/assets/img/faculmatch.png",
    },
    {
      title: "Curso Técnico de Informática Integrado ao Ensino Médio",
      place: 'Instituto Federal de Santa Catarina',
      duration: "2021-2023",
      location: "Garopaba SC",
      subjects: [
        'Algoritmos e Lógica de Programação',
        'Banco de Dados',
        'Empreendedorismo',
        'Inglês Aplicado',
        'Introdução à Informática',
        'Manutenção e Configuração de Computadores',
        'Programação Web',
        'Programação e Engenharia de Software',
        'Programação para Dispositivos Móveis',
        'Projeto Integrador',
        'Redes de Computadores',
        'Responsabilidade Socioambiental e Sustentabilidade',
        'Tópicos Avançados em Informática'
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue orci, ultricies ut nisi at, dapibus viverra lacus. Donec ut arcu id ante mollis posuere vitae eu mi. Curabitur sed diam a orci egestas rhoncus. Nunc porta felis diam, eget porta massa posuere at. Proin ac purus eleifend, volutpat metus vel, molestie urna.",
      image: "/src/assets/img/faculmatch.png",
    },
  ]

  return (
    <div className="education" id="formacao">
      <SectionTitle title={"FORMAÇÃO"} positioning='center'/>
      <div className="formations">
          {cardsData.map((card, index) => (
            <div key={index}>
              <ExpansiveCard {...card} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Education
