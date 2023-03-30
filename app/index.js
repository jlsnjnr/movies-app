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
import ListCategory from "../src/components/ListCategory";
import { View } from "react-native";

export default function Page() {
  const [moviesData, setMovieData] = useState([]);
  const [moviesCategory, setMovieCategory] = useState([]);
  const [teste, setTeste] = useState([]);

  const [filterMovies, setFilterMovies] = useState([]);
  const [isFocused, setIsFocused] = useState(true);

  const [search, setSearch] = useState("");
  const [noHaveResults, setNoHaveResults] = useState(false);

  // const handleSearch = () => {
  //   const filteredDataMovie = moviesData.filter((item) =>
  //     item.name.toLowerCase().includes(search.toLowerCase())
  //   );

  //   if (filteredDataMovie.length === 0) {
  //     setNoHaveResults(true);
  //   } else {
  //     setNoHaveResults(false);
  //   }

  //   setFilteredData(filteredDataMovie);
  //   setFilteredDataSearch(true);

  //   if (search === "") {
  //     setIsFocused(true);
  //   } else {
  //     setIsFocused(false);
  //   }

  //   setSearch("");
  // };

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

  async function loadFilmes() {
    const response = await api.get("/search/movie", {
      params: {
        api_key: "28fc232cc001c31e8a031f419d0a14ca",
        language: "pt-BR",
        query: search,
      },
    });
    setTeste(response.data.results);
    setSearch("");
  }

  console.log(teste.map((post) => post.title));

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
              onSubmitEditing={() => loadFilmes()}
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
              <ListCategory setMovieCategory={setMovieCategory} />

              <ContainerMovies>
                {moviesCategory.map((url) => (
                  <GoTo
                    onPress={() => link.push(`/movie/${url.id}`)}
                    key={url.poster_path}
                  >
                    <Image
                      resizeMode="cover"
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

          {teste === '' || undefined || [] || {} && <NoResults />}

          {teste.map((item) => (
            <ContainerMoviesSearch onPress={() => link.push(`/movie/${item.id}`)}>
              <Image
                resizeMode="cover"
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                }}
                style={{ height: 160, width: "32%", borderRadius: 10 }}
              />
              <MovieDetailSarch>
                <TitleMovieSearch>
                  {truncateText(item.title, 24)}
                </TitleMovieSearch>
                <ContainerName>
                  <Icon name="star-outline" size={16} color="#FF8700" />
                  <NoteMovieSearch>{item.vote_average}</NoteMovieSearch>
                </ContainerName>
                <ContainerName>
                  <Icon name="calendar-outline" size={16} color="#fff" />
                  <DetailsMovieSearch>{item.release_date}</DetailsMovieSearch>
                </ContainerName>
              </MovieDetailSarch>
            </ContainerMoviesSearch>
          ))}

        </ContainerScroll>
      </SafeAreaView>
    </Container>
  );
}
