import { Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useState, useEffect } from "react";
import {
  ContainerMoviesSearch,
  ContainerName,
  ContainerScroll,
  DetailsMovieSearch,
  MovieDetailSarch,
  NoteMovieSearch,
  TitleMovieSearch,
} from "../styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, PContainer } from "../movie/styles";
import { ContainerHeaderDetails, MarginH, Title } from "./styles";
import Header from "../../src/components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";
import { TouchableOpacityBase } from "react-native";

export default function Page() {
  const [movie, setMovie] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);

  const removeMovie = async (movieName) => {
    try {
      const updatedMovies = savedMovies.filter((movie) => movie.name !== movieName);
      await AsyncStorage.setItem('savedMovies', JSON.stringify(updatedMovies));
      setSavedMovies(updatedMovies);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    const getSavedMovies = async () => {
      try {
        const movies = await AsyncStorage.getItem('savedMovies');
        if (movies !== null) {
          setSavedMovies(JSON.parse(movies));
        }
      } catch (e) {
        console.error(e);
      }
    }

    getSavedMovies();
  }, [])

  console.log(savedMovies)

  return (
    <>
      <Container>
        <SafeAreaView style={{ marginBottom: 90 }}>
          <ContainerScroll scrollToOverflowEnabled={false}>
            <PContainer>
              <ContainerHeaderDetails>
                <TouchableOpacity onPress={() => link.back()}>
                  <Icon name="chevron-back-outline" size={28} color="#67686D" />
                </TouchableOpacity>
                <Title>Watch list</Title>
              </ContainerHeaderDetails>
            </PContainer>
            <MarginH>
              {savedMovies.map((movie) => (
                <ContainerMoviesSearch >
                  <TouchableOpacity onPress={() => removeMovie(movie.name)}>
                    <Icon name="trash-outline" size={20} color="#FF8700" />
                  </TouchableOpacity>
                  <Image
                    resizeMode="cover"
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500/${movie.img}`,
                    }}
                    style={{ height: 160, width: "32%", borderRadius: 10 }}
                  /> 
                  <MovieDetailSarch>
                    <TitleMovieSearch>
                      {movie.name}
                    </TitleMovieSearch>
                    <ContainerName>
                      <Icon name="star-outline" size={16} color="#FF8700" />
                      <NoteMovieSearch>{movie.nota}</NoteMovieSearch>
                    </ContainerName>
                    <ContainerName>
                      <Icon name="calendar-outline" size={16} color="#fff" />
                      <DetailsMovieSearch>{movie.date}</DetailsMovieSearch>
                    </ContainerName>
                  </MovieDetailSarch>
                </ContainerMoviesSearch>
              ))}
            </MarginH>
          </ContainerScroll>
        </SafeAreaView>
      </Container>
    </>
  );
}
