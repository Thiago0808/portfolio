import './style.css'
import Button from "../CardButton/index";
import Tag from '../CardTag';
import type { Language } from '../../App';
import { contents } from "../../content/languages/content";

interface CardProps {
  name: string;
  technologies: string[];
  description: string;
  image: string
  link: string;
  language: Language
}

function Card({ name, technologies, description, image, link, language }: CardProps) {
  const content = contents[language].projects;

  return (
    <div className='card-container'>
      <div className="card-inside-container">
        <div className="card-image">
          <img src={`${image}`} alt={`Print do projeto ${name}`} />
          <Button text={content.button} href={link} />
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
