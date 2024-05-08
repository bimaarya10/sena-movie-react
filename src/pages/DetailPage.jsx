import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie } from "../service/getMovie";
import Navbar from "../components/Navbar";
import LoadingItem from "../components/LoadingItem";
import Footer from "../components/Footer";

export default function DetailPage() {
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetailMovie(id, setDetailMovie, setLoading);
  }, [id, detailMovie]);

  return (
    <>
      <Navbar />
      {loading ? (
        <LoadingItem />
      ) : (
        <div className="mx-auto container px-16 mt-4  py-10 flex  flex-col items-center bg-white shadow-lg rounded-lg">
          <h1 className="text-xl sm:text-2xl font-playFair font-bold text-slate-800 md:text-4xl mb-5">
            Movie Detail
          </h1>
          <img
            src={`https://image.tmdb.org/t/p/w500/${detailMovie.backdrop_path}`}
            alt=""
            className="rounded-md"
          />
          <h2 className="font-playFair text-slate-700 my-4 text-center text-2xl sm:text-3xl font-semibold">
            {detailMovie.title} (
            {new Date(detailMovie.release_date).getFullYear()})
          </h2>
          <p className="max-w-xl text-center text-slate-700 lg:text-lg">
            {detailMovie.overview}
          </p>

          <p className="mt-2 font-semibold text-lg">
            Rate : ⭐{Math.round(detailMovie.vote_average * 10) / 10}
          </p>
        </div>
      )}

      <Footer/>
    </>
  );
}
