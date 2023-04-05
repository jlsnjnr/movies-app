import { useEffect, useState } from "react";
import {
  AboutMovie,
  ImageLogo,
  LogoContainer,
  PContainer,
  PContainerH,
  TextBottom,
} from "./styles";

import api from "../../src/services/api";
import Header from "../../src/components/Header";
import MovieNameAndDetails from "../../src/components/MovieNameAndDetails";
import DetailsMovie from "../../src/components/DetailsMovie";

import { useSearchParams } from "expo-router";
import { formateDate } from "../../src/utils/formatData";
import Loading from "../../src/components/Loading";
import { api_key, language } from "../../src/services/keys";

export default function Page() {
  const [movie, setMovie] = useState({});
  const [genero, setGenero] = useState("");
  const [date, setDate] = useState("");
  const segments = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadFilmes() {
      try {
        setLoading(true);
        const response = await api.get(`/movie/${segments.id}`, {
          params: { api_key, language },
        });
        setMovie(response.data);
        setGenero(response.data.genres[0]["name"]);
        setDate(formateDate(response.data.release_date));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadFilmes();
  }, []);

  if (loading) {
    return <Loading.Loading />;
  }

  return (
    <>
      <PContainer>
        <Header movie={movie} name="Detail" />
      </PContainer>

      <MovieNameAndDetails movie={movie} />

      <PContainerH>
        <LogoContainer>
          <ImageLogo
            resizeMode="cover"
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
            }}
          />
          <TextBottom>{movie.title}</TextBottom>
        </LogoContainer>
      </PContainerH>

      <DetailsMovie date={date} genero={genero} movie={movie} />

      <PContainerH>
        <AboutMovie>{movie.overview}</AboutMovie>
      </PContainerH>
    </>
  );
}
