import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import CarrosselComponent from "../src/components/CarrosselComponent";

import {
  Container,
  ContainerMovies,
  ContainerScroll,
  ContainerSearchInput,
  GoTo,
  IconInput,
  Search,
  Title,
} from "./styles";

import api from "../src/services/api";
import { useRouter } from "expo-router";
import ListCategory from "../src/components/ListCategory";

export default function Page() {
  const [moviesCategory, setMovieCategory] = useState([]);
  const [search, setSearch] = useState("");

  const link = useRouter();

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

  const loadFilmes = () => link.push(`/search/${search}`)

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
        </ContainerScroll>
      </SafeAreaView>
    </Container>
  );
}
