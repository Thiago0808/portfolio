import './style.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTitle from '../../components/SectionTitle';
import ExpansiveCard from '../../components/ExpansiveCard';
import ifscImg from '../../assets/img/formation/ifsc.png';

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
        'Redes de Computadores',
        'Responsabilidade Socioambiental e Sustentabilidade',
        'Tópicos Avançados em Informática'
      ],
      description:
        "Minha experiência no IFSC Garopaba foi transformadora, sendo graças à Instituição que comecei minha carreira como programador. Lá tive toda minha base de dev, aprendendo frontend, backend, banco de dados, programação para dispositivos móveis, redes e sistemas, e informática como um todo.",
      image: ifscImg,
    },
    {
      title: "Graduação em Análise e Desenvolvimento de Sistenas",
      place: 'Instituto Federal de Santa Catarina',
      duration: "2025-2027",
      location: "Tubarão SC",
      subjects: [
        'Análise de Sistemas',
        'Banco de Dados',
        'Comunicação Técnica',
        'Desenvolvimento para Dispositivos Móveis',
        'Desenvolvimento de Sistemas Orientados a Objetos',
        'Desenvolvimento Web',
        // 'Fundamentos da Administração',
        'Interface Humano-Computador',
        'Inglês Instrumental',
        'Introdução à Programação',
        // 'LIBRAS',
        'Matemática Aplicada',
        'Organização e Arquitetura de Computadores',
        'Práticas em Desenvolvimento de Sistemas',
        'Programação Orientada a Objetos',
        'Projeto de Sistemas',
        'Redes de Computadores',
        'Segurança da Informação',
        'Sistemas Operacionais',
        'Teste de Software',
        'Tópicos em Análise e Desenvolvimento de Sistemas',
      ],
      description:
        "Após muito estudo, consegui ingressar na tão sonhada graduação. Ainda no primeiro ano, venho aprendendo muito na faculdade, compreendendo melhor bases da área de informática e adquirindo inúmeros novos conhecimentos do ramo. É sempre incrível poder aplicar no trabalho aquilo que aprendi no curso uma semana atrás.",
      image: ifscImg,
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
