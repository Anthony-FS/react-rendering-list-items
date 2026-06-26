import movies from "../data/movies";

export default function MovieCard() {
	return (
		<div className="movie-list">
			{movies.map((movie, index) => (
				<article className="movie-card" key={`${movie.title}-${index}`}>
					<img className="movie-image" src={movie.image} alt={movie.title} />
					<div className="movie-content">
						<h3 className="movie-title">Title: {movie.title}</h3>

						<div className="movie-meta">
							<div className="movie-year">Year: {movie.year}</div>
							<div className="movie-runtime">Runtime: {movie.runtime}</div>
						</div>

						<div className="movie-genres">
							<strong>Genres:</strong>
							{movie.genres.map((genre, index) => (
								<span className="genre-pill" key={`${genre}-${index}`}>
									{genre}
								</span>
							))}
						</div>

						<div className="movie-stats">
							<div>IMDB Ratings: {movie.imdbRating}</div>
							<div>IMDB Votes: {movie.imdbVotes}</div>
						</div>
					</div>
				</article>
			))}
		</div>
	);
}

