import './style.css';

interface ImageCardProps {
  description: string;
  image: string;
}

function ImageCard({ description, image }: ImageCardProps) {
  return (
    <div className='image-card-container'>
      <div className="image-card-inside-container">
        <div className="image-card-image">
          <img src={image} alt={`Print do projeto`} />

          <div className="image-card-info">
            <p>{description}</p>
          </div>
        </div>

        {/* mantém espaço de baixo (bolinha/paginação/etc) */}
        <div className="image-card-footer"></div>
      </div>
    </div>
  );
}

export default ImageCard;