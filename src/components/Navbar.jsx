import { Link } from "react-router-dom";
import { useState } from "react";
import { getSearchMovie } from "../service/getMovie";

/* eslint-disable react/prop-types */
export default function Navbar() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
                                            
  function searchMovie(event) {
    setSearch(event.target.value);
    getSearchMovie(setResult, search);
    console.log(search);
  }

  function onSubmitEvent(event){
    event.preventDefault()
    window.location.href = `/search/${search}`
  }

  return (
    <nav className="w-full bg-white right-0 left-0 top-0 relative shadow-xl">
      <div className="container px-5 mx-auto flex items-center py-2 justify-between">
        <div>
          <h2 className="font-playFair font-bold italic text-3xl mb-1 text-primer md:text-4xl ">
            SenaMovie
          </h2>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/5 px-2 py-[5px] bg-white border-2 border-secondary rounded-md flex items-center">
          <div className="w-8 mr-2">
            <img src="../images/search.svg" className="" alt="" />
          </div>
          <form action="" onSubmit={onSubmitEvent}>
            <input
              value={search}
              onChange={searchMovie}
              type="text"
              placeholder="Search"
              className="w-full bg bg-transparent outline-none   text-[#5f6c7b] text-base md:text-lg "
            />
          </form>
        </div>
      </div>
      {search.length > 0 && (
        <div className="absolute top-full right-8 w-64 md:w-72 shadow-lg z-[999] bg-white rounded-md px-3 py-2">
          {result.length == 0 ? (
            <h4 className="text-slate-600 text-base text-center">Not Found</h4>
          ) : (
            <ul>
              {result.slice(0, 5).map((movie) => (
                <li
                  key={movie.id}
                  className="flex items-center my-2 py-2 border-b "
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="h-12 md:h-16 rounded-md"
                    alt=""
                  />
                  <Link
                    className="ml-4 text-slate-600 hover:text-slate-900 hover:underline"
                    to={`/detail/${movie.id}`}
                    onClick={() => setSearch('')}
                  >
                    {movie.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </nav>
  );
}
