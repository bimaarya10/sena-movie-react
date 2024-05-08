import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getSearchMovie } from "../service/getMovie";
import ListMovies from "../components/ListMovies";
import { useParams } from "react-router-dom";
import LoadingItem from "../components/LoadingItem";
import Footer from "../components/Footer";

export default function SearchResultPage() {
  const { data } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getSearchMovie(setMovies, data, setLoading);
  }, [data]);
  return (
    <>
      <Navbar />
      {loading ? (
        <LoadingItem />
      ) : (
        <ListMovies movies={movies} title="Search Result" />
      )}
      <Footer/>
    </>
  );
}
