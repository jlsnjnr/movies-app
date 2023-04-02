
import api from "../../src/services/api";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
import NoResults from "../../src/components/NoResults";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, ContainerMoviesSearch, ContainerName, ContainerScroll, ContainerSearchInput, DetailsMovieSearch, IconInput, MovieDetailSarch, NoteMovieSearch, Search, Title, TitleMovieSearch } from "./styles";
import { Image } from "react-native";

export default function Page() {
  const [teste, setTeste] = useState([]);
  const [noHaveResults, setNoHaveResults] = useState(false);
  const [search, setSearch] = useState("");

  const segments = useSearchParams();
  const link = useRouter();

  async function loadFilmes() {
    const response = await api.get("/search/movie", {
      params: {
        api_key: "28fc232cc001c31e8a031f419d0a14ca",
        language: "pt-BR",
        query: segments.id,
      },
    });

    setTeste(response.data.results);

    if (response.data.results.length === 0) {
      setNoHaveResults(true);
    } else {
      setNoHaveResults(false);
    }

    setSearch("");
  }

  async function loadFilmesSearch() {
    const response = await api.get("/search/movie", {
      params: {
        api_key: "28fc232cc001c31e8a031f419d0a14ca",
        language: "pt-BR",
        query: search,
      },
    });

    setTeste(response.data.results);

    if (response.data.results.length === 0) {
      setNoHaveResults(true);
    } else {
      setNoHaveResults(false);
    }

    setSearch("");
  }

  useEffect(() => {
    loadFilmes();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  const icon = require('./../../src/assets/no-results1.png');

  return (
   <>
    <Container>
      <SafeAreaView style={{ marginBottom: 65 }}>
        <ContainerScroll scrollToOverflowEnabled={false}>
          <Title>What do you want to watch?</Title>

          <ContainerSearchInput>
            <Search
              onChangeText={(text) => setSearch(text)}
              value={search}
              onSubmitEditing={() => loadFilmesSearch()}
              placeholderTextColor="#67686D"
              placeholder="Search"
            />
            <IconInput>
              <Icon name="search-outline" size={28} color="#67686D" />
            </IconInput>
          </ContainerSearchInput>



          {noHaveResults ? 
            <NoResults 
              description='Find your movie by Type title, categories, years, etc ' 
              title='We are sorry, We can not find the movie :(' 
              img={icon} 
            /> : 
          (
            teste.map((item) => (
              <ContainerMoviesSearch key={item.title} onPress={() => link.push(`/movie/${item.id}`)}>
                <Image
                  resizeMode="cover"
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                  }}
                  style={{ height: 160, width: 120, borderRadius: 10 }}
                />
                <MovieDetailSarch>
                  <TitleMovieSearch>
                    {truncateText(item.title, 25)}
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
            ))
          )}
          
        </ContainerScroll>
      </SafeAreaView>
    </Container>
   </>
  )
}