import "./MovieCard/MovieCard.css";

export const MovieCard = ({ movie }) => {
  const { name, genre, imdb_rating, duration, img_link } = movie;
  return (
    <div className="card-container">
      <div className="card-img-container">
        <img className="card-img" src={img_link} alt="movie-card" />
        <div className="card-details">
          <div>
            <span className="title">{name}</span>
          </div>
          <div>
            <span className="genra">Genra: {genre} </span>
          </div>
          <div className="ratings">
            <span>Rating: {imdb_rating}</span>
            <span>{duration} mins</span>
          </div>
        </div>
      </div>
    </div>
  );
};
