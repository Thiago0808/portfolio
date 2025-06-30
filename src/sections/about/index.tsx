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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue orci, ultricies ut nisi at, dapibus viverra lacus. Donec ut arcu id ante mollis posuere vitae eu mi. Curabitur sed diam a orci egestas rhoncus. Nunc porta felis diam, eget porta massa posuere at. Proin ac purus eleifend, volutpat metus vel, molestie urna."
          </p>
        </div>

        <div className="about-image">
          <img src="/imgs/sua-imagem.png" alt="Foto de perfil" />
          {/* substitua o src com o caminho real da imagem */}
        </div>
      </div>
    </div>
  );
}

export default About;
