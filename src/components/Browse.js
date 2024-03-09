import { useSelector } from "react-redux";
import useKannadaMovies from "../hooks/useKannadaMovies";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const gptSearch = useSelector((store) => store.gpt.gptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useKannadaMovies();

  return (
    <div>
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
