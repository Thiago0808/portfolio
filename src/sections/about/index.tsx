import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTitle from '../../components/SectionTitle';
import aboutImg from '../../assets/img/about.jpg';
import type { SectionsProps } from '../../App';

function About({ language }: SectionsProps) {
  return (
    <div className="about" id="sobre-mim">
      <SectionTitle title={language == 'en' ? "ABOUT ME" : "SOBRE MIM"} positioning='MID-LEFT' />

      <div className="about-content">
        <div className="about-text">
          <p>
            {
            language == 'en' ? 
              "In my journey as a full-stack web developer, I have stood out by contributing to successful teams on award-winning projects, earning multiple prizes in international competitions and securing funding as a result of these achievements. My technical contributions were essential to the success of these initiatives, demonstrating my ability to deliver results in challenging and competitive environments." 
              : 
              "Na minha trajetória como desenvolvedor web full-stack, destaco-me por integrar equipes em projetos vitoriosos, conquistando múltiplos prêmios em competições de caráter internacional e obtendo financiamento em razão dessas conquistas. Minha contribuição técnica foi essencial para o êxito dessas iniciativas, evidenciando minha capacidade de entrega em ambientes desafiadores e competitivos."
            }
          </p>
        </div>

        <div className="about-image">
          <img src={aboutImg} alt={language == 'en' ? "Profile Foto" : "Foto de perfil"} />
        </div>
      </div>
    </div>
  );
}

export default About;
