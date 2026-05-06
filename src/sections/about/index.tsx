import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTitle from '../../components/SectionTitle';
import aboutImg from '../../assets/img/about.jpg';
import type { SectionsProps } from '../../App';
import { contents } from '../../content/languages/content';

function About({ language }: SectionsProps) {
  const content = contents[language].about;
  
  return (
    <div className="about" id="about">
      <SectionTitle title={content.title} positioning='MID-LEFT' />

      <div className="about-content">
        <div className="about-text">
          <p>
            {content.description}
          </p>
        </div>

        <div className="about-image">
          <img src={aboutImg} alt={content.profilePhoto} />
        </div>
      </div>
    </div>
  );
}

export default About;
