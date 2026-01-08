const MovieCard = ({movie}) => {
	const posterUrl = movie.poster_path
		? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
		: `https://via.placeholder.com/500x750?text=No+Image`;

	return (
		<div className="group rounded-2xl overflow-hidden shadow-lg">
			{/* Poster */}
			<img
				className="w-full h-96 object-cover group-hover:scale-110 duration-300"
				src={posterUrl}
				alt={movie.title}
			/>
			{/* Overlay */}
			<div>
				<h2 className="text-xl font-bold text-white mb-2">{movie.title}</h2>
				<p className="text-gray-300 mb-4">
					{movie.release_date ? movie.release_date.substring(0, 4) : "N/A"}
				</p>
				{/* Btns */}
				<div className="flex gap-2">
					<button className="btn btn-sm btn-primary">Details</button>
					<button className="btn btn-sm">Add to Favorites</button>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
