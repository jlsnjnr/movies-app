import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView } from "react-native";

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

export default function Page() {
  const [moviesData, setMovieData] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/genre/movie/list", {
        params: {
          api_key: "28fc232cc001c31e8a031f419d0a14ca",
          language: "pt-BR",
          // page: 1,
        }
      })

      setMovieData(response.data)
    }

    loadFilmes();
  }, [])

  console.log(JSON.stringify(moviesData, null, 2))

  const [filterMovies, setFilterMovies] = useState([]);
  const [isFocused, setIsFocused] = useState(true);
  
  const [filteredData, setFilteredData] = useState([]);
  const [filteredDataSearch, setFilteredDataSearch] = useState(false);

  const [search, setSearch] = useState("");
  const [noHaveResults, setNoHaveResults] = useState(false);

  const filterNow = (text) => {
    const isHighligthed = moviesData.filter(
      (isHighligthed) => isHighligthed.status === text
    );
    setFilterMovies(isHighligthed);
  };

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
    
    if(search === "") {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }

    setSearch("")
  };

  useEffect(() => {
    filterNow("Now playing");
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  };

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
                  <TitleList onPress={() => filterNow("Now playing")}>
                    <TitleListText>Now playing</TitleListText>
                  </TitleList>

                  <TitleList onPress={() => filterNow("Upcoming")}>
                    <TitleListText>Upcoming</TitleListText>
                  </TitleList>

                  <TitleList onPress={() => filterNow("Top rated")}>
                    <TitleListText>Top rated</TitleListText>
                  </TitleList>

                  <TitleList onPress={() => filterNow("Popular")}>
                    <TitleListText>Popular</TitleListText>
                  </TitleList>
                </ContainerListHorizontalView>
              </ScrollView>

              <ContainerMovies>
                {filterMovies.map((url) => (
                  <Image
                    key={url.url}
                    resizeMode="cover"
                    source={{ uri: url.url }}
                    style={{ height: 150, width: "30%", borderRadius: 10 }}
                  />
                ))}
              </ContainerMovies>
            </>
          )}

          {noHaveResults === true && <NoResults />}

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
          ))}

        </ContainerScroll>
      </SafeAreaView>
    </Container>
  );
}