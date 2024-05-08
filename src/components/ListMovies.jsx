/* eslint-disable react/prop-types */
import CardMovie from "./CardMovie";

export default function ListMovies({ movies, title }) {
  return (
    <div className="container mx-auto px-4 pt-40 lg:pt-24 md:mb-20 ">
      <div className="bg-white shadow-lg rounded-md py-8">
        <h2 className="text-center mb-12 font-playFair text-4xl font-semibold text-slate-600">
          {title}
        </h2>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {movies.length > 0 &&
            movies.map((movie) => (
              <CardMovie
                key={movie.id}
                movie={movie}
                poster_path={movie.poster_path}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
