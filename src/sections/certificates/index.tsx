import { useState } from "react";
import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import SectionTitle from "../../components/SectionTitle";
import type { SectionsProps } from "../../App";
import { contents } from "../../content/languages/content";
import { certificatesContent } from "../../content/certificatesContent";
import CertificateCard from "../../components/CertificateCard";

function Certificates({ language }: SectionsProps) {
  const content = contents[language].certificates;
  const [current, setCurrent] = useState(0);

  const cardsData = certificatesContent.map((certificate) => ({
    ...certificate,
    ...content.items[certificate.id],
  }));

  return (
    <div className="certificates" id="certificates">
      <SectionTitle title={content.title}/>

      <div className="carousel">
        <Carousel
          showArrows
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop
          emulateTouch
          onChange={setCurrent}
        >
          {cardsData.map((card) => (
            <div key={card.id}>
              <CertificateCard {...card} buttonText={content.button} />
            </div>
          ))}
        </Carousel>
      </div>

      <p className="certificates-counter">
        {current + 1} {content.of} {cardsData.length}
      </p>
    </div>
  );
}

export default Certificates;
