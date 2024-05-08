import { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import {
  getMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies
} from "../service/getMovie";
import ListMovies from "../components/ListMovies";
import Footer from "../components/Footer";

function App() {
  const [movies, setMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [nowPlaying, setNowPlaying] =useState([])
  const [upcoming, setUpcoming] = useState([])

  useEffect(() => {
    getMovies(setMovies);
    getTopRatedMovies(setTopMovies);
    getNowPlayingMovies(setNowPlaying)
    getUpcomingMovies(setUpcoming)
  }, []);



  return (
    <>
      <Navbar/>
      <Header />
      <ListMovies movies={movies} title={`Popular Movies`} />
      <ListMovies movies={topMovies} title={`Top Rated Movies`} />
      <ListMovies movies={nowPlaying} title={`Now Playing`}/>
      <ListMovies movies={upcoming} title={`Upcoming`}/>
      <Footer />
    </>
  );
}

export default App;
