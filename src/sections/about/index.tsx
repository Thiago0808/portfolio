import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTitle from '../../components/SectionTitle';

function About() {
  return (
    <div className="about" id="sobre-mim">
      <SectionTitle title={"SOBRE MIM"} positioning='MID-LEFT' />

      <div className="about-content">
        <div className="about-text">
          <p>
            Na minha trajetória como desenvolvedor web full-stack, destaco-me por integrar equipes em projetos vitoriosos, conquistando múltiplos prêmios em competições de caráter internacional e obtendo financiamento em razão dessas conquistas. Minha contribuição técnica foi essencial para o êxito dessas iniciativas, evidenciando minha capacidade de entrega em ambientes desafiadores e competitivos.
          </p>
        </div>

        <div className="about-image">
          <img src="/imgs/sua-imagem.png" alt="Foto de perfil" />
        </div>
      </div>
    </div>
  );
}

export default About;
