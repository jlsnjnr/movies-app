import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import CarrosselComponent from "../src/components/CarrosselComponent";
import NoResults from "../src/components/NoResults";

import {
  Container,
  ContainerListHorizontalView,
  ContainerMovies,
  ContainerMoviesSearch,
  ContainerName,
  ContainerScroll,
  ContainerSearchInput,
  DetailsMovieSearch,
  GoTo,
  IconInput,
  MovieDetailSarch,
  NoteMovieSearch,
  Search,
  Title,
  TitleList,
  TitleListText,
  TitleMovieSearch,
} from "./styles";

import api from "../src/services/api";
import { useRouter } from "expo-router";

export default function Page() {
  const [moviesData, setMovieData] = useState([]);
  const [moviesCategory, setMovieCategory] = useState([]);

  const [filterMovies, setFilterMovies] = useState([]);
  const [isFocused, setIsFocused] = useState(true);

  const [search, setSearch] = useState("");
  const [noHaveResults, setNoHaveResults] = useState(false);

  const handleSearch = () => {
    const filteredDataMovie = moviesData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    if (filteredDataMovie.length === 0) {
      setNoHaveResults(true);
    } else {
      setNoHaveResults(false);
    }

    setFilteredData(filteredDataMovie);
    setFilteredDataSearch(true);

    if (search === "") {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }

    setSearch("");
  };

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/movie/now_playing", {
        params: {
          api_key: "28fc232cc001c31e8a031f419d0a14ca",
          language: "pt-BR",
        },
      });
      setMovieCategory(response.data.results);
    }

    loadFilmes();
  }, []);

  const changeToPopular = async () => {
    const response = await api.get("/movie/popular", {
      params: {
        api_key: "28fc232cc001c31e8a031f419d0a14ca",
        language: "pt-BR",
      },
    });
    setMovieCategory(response.data.results);
  };

  const changeToNowPlaying = async () => {
    const response = await api.get("/movie/now_playing", {
      params: {
        api_key: "28fc232cc001c31e8a031f419d0a14ca",
        language: "pt-BR",
      },
    });
    setMovieCategory(response.data.results);
  };

  const changeToNowTopRated = async () => {
    const response = await api.get("/movie/top_rated", {
      params: {
        api_key: "28fc232cc001c31e8a031f419d0a14ca",
        language: "pt-BR",
      },
    });
    setMovieCategory(response.data.results);
  };

  const changeToUpcoming = async () => {
    const response = await api.get("/movie/upcoming", {
      params: {
        api_key: "28fc232cc001c31e8a031f419d0a14ca",
        language: "pt-BR",
      },
    });
    setMovieCategory(response.data.results);
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  const link = useRouter();

  return (
    <Container>
      <SafeAreaView style={{ marginBottom: 65 }}>
        <ContainerScroll scrollToOverflowEnabled={false}>
          <Title>What do you want to watch?</Title>

          <ContainerSearchInput>
            <Search
              onChangeText={(text) => setSearch(text)}
              value={search}
              onSubmitEditing={() => handleSearch()}
              placeholderTextColor="#67686D"
              placeholder="Search"
            />
            <IconInput>
              <Icon name="search-outline" size={28} color="#67686D" />
            </IconInput>
          </ContainerSearchInput>

          {isFocused === true && (
            <>
              <CarrosselComponent />

              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={200}
                decelerationRate="fast"
                pagingEnabled
              >
                <ContainerListHorizontalView>
                  <TitleList onPress={() => changeToNowPlaying()}>
                    <TitleListText>Now Playing</TitleListText>
                  </TitleList>
                  <TitleList onPress={() => changeToPopular()}>
                    <TitleListText>Popular</TitleListText>
                  </TitleList>
                  <TitleList onPress={() => changeToNowTopRated()}>
                    <TitleListText>Top Rated</TitleListText>
                  </TitleList>
                  <TitleList onPress={() => changeToUpcoming()}>
                    <TitleListText>Upcoming</TitleListText>
                  </TitleList>
                </ContainerListHorizontalView>
              </ScrollView>

              <ContainerMovies>
                {moviesCategory.map((url) => (
                  <GoTo onPress={() => link.push(`/movie/${url.id}`)}key={url.poster_path}>
                    <Image
                      resizeMode="cover"
                      onPress={() => console.log('hello!')}
                      source={{
                        uri: `https://image.tmdb.org/t/p/w500/${url.poster_path}`,
                      }}
                      style={{ height: 150, width: "100%", borderRadius: 10 }}
                    />
                  </GoTo>
                ))}
              </ContainerMovies>
            </>
          )}

          {/* {noHaveResults === true && <NoResults />}

          {filteredDataSearch !== "" && 
            filteredData.map((item) => (
              <ContainerMoviesSearch>
                <Image
                  key={item.url}
                  resizeMode="cover"
                  source={{ uri: item.url }}
                  style={{ height: 160, width: "32%", borderRadius: 10 }}
                />
                <MovieDetailSarch>
                  <TitleMovieSearch>
                    {truncateText(item.name, 24)}
                  </TitleMovieSearch>
                  <ContainerName>
                    <Icon name="star-outline" size={16} color="#FF8700" />
                    <NoteMovieSearch>{item.nota}</NoteMovieSearch>
                  </ContainerName>
                  <ContainerName>
                    <Icon name="apps-outline" size={16} color="#fff" />
                    <DetailsMovieSearch>{item.genero}</DetailsMovieSearch>
                  </ContainerName>
                  <ContainerName>
                    <Icon name="calendar-outline" size={16} color="#fff" />
                    <DetailsMovieSearch>{item.year}</DetailsMovieSearch>
                  </ContainerName>
                  <ContainerName>
                    <Icon name="time-outline" size={16} color="#fff" />
                    <DetailsMovieSearch>{item.time}</DetailsMovieSearch>
                  </ContainerName>
                </MovieDetailSarch>
              </ContainerMoviesSearch>
          ))} */}
        </ContainerScroll>
      </SafeAreaView>
    </Container>
  );
}
