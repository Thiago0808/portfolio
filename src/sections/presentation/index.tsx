import './style.css';
import SectionTitle from '../../components/SectionTitle';
import type { SectionsProps } from '../../App';
import { contents } from '../../content/languages/content';

import videoBr from '../../assets/video/presentationBr.mp4';
import videoEn from '../../assets/video/presentationEn.mp4';

function Presentation({ language }: SectionsProps) {
  const content = contents[language].presentation;

  const videoSource = language === 'en' ? videoEn : videoBr;

  return (
    <section className="presentation" id="apresentacao">
      <SectionTitle title={content.title} positioning="MID-LEFT" />

      <div className="presentation-content">
        <video
          className="presentation-video"
          src={videoSource}
          controls
        />
      </div>
    </section>
  );
}

export default Presentation;