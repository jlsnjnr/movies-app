import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import moment from "moment";
import {
  AboutMovie,
  Container,
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
import { ContainerScroll } from "../styles";

export default function Page({ navigation, route }) {
  const [movie, setMovie] = useState({});
  const [genero, setGenero] = useState("");
  const [date, setDate] = useState("");
  const segments = useSearchParams();

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get(`/movie/${segments.id}`, {
        params: {
          api_key: "28fc232cc001c31e8a031f419d0a14ca",
          language: "pt-BR",
        },
      });
      setMovie(response.data);
      setGenero(response.data.genres[0]["name"]);
      setDate(moment(response.data.release_date).format("DD/MM/YYYY"));
    }

    loadFilmes();
  }, []);

  return (
    <>
      <Container>
        <SafeAreaView style={{ marginBottom: 65 }}>
          <ContainerScroll scrollToOverflowEnabled={false}>
            <PContainer>
              <Header name="Detail" />
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

            <PContainerH><AboutMovie>{movie.overview}</AboutMovie></PContainerH>
          </ContainerScroll>
        </SafeAreaView>
      </Container>
    </>
  );
}
