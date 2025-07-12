import "./style.css";

interface ExperienceCardProps {
  title: string;
  place: string;
  duration: string;
  image: string;
  paragraphs: string[];
}

function ExperienceCard({ title, place, duration, image, paragraphs }: ExperienceCardProps) {
  return (
    <div className="experience-card-container">
      <div className="experience-card">
        <div className="top-row">
          <img src={image} alt={`${place} logo`} className="experience-img" />
          <div className="experience-header">
            <h2>{title}</h2>
            <p><strong>{place}</strong></p>
            <p><strong>{duration}</strong></p>
          </div>
        </div>

        <div className="bottom-content">
          {paragraphs.map((text, index) => (
            <p key={index}>- {text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
