import './style.css'
import Button from "../CardButton/index";
import Tag from '../CardTag';

interface CardProps {
  name: string;
  technologies: string[];
  description: string;
  image: string
  link: string;
}

function Card({ name, technologies, description, image, link }: CardProps) {
  return (
    <div className='card-container'>
      <div className="card-inside-container">
        <div className="card-image">
          <img src={`${image}`} alt={`Print do projeto ${name}`} />
          <Button text="VER" href={link} />
        </div>

        <div className="card-info">
          <h2>{name}</h2>
          <div>
            {technologies.map((tech, index) => (
              <Tag key={index} name={tech} />
            ))}
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
