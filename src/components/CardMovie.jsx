import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function CardMovie({ movie, poster_path }) {
  return (
    <Link to={`/detail/${movie.id}`}>
      <div className="bg-slate-900 cursor-pointer w-40 :h-56  rounded-lg overflow-hidden shadow-lg hover:scale-110 transition-transform">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          className="w-full h-full"
          alt={`Poster`}
        />
      </div>
    </Link>
  );
}
