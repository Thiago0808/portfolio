import './style.css';

interface ImageCardProps {
  description: string;
  image: string;
}

function ImageCard({ description, image }: ImageCardProps) {
  return (
    <div className='card-container'>
      <div className="card-inside-container">
        <div className="card-image">
          <img src={image} alt={`Print do projeto`} />

          <div className="card-info">
            <p>{description}</p>
          </div>
        </div>

        {/* mantém espaço de baixo (bolinha/paginação/etc) */}
        <div className="card-footer"></div>
      </div>
    </div>
  );
}

export default ImageCard;