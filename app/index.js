import { Link, useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";

import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";

import Icon from "react-native-vector-icons/Ionicons";

import {
  Container,
  ContainerListHorizontalView,
  ContainerMovies,
  ContainerMoviesSearch,
  ContainerName,
  ContainerNoResults,
  ContainerScroll,
  ContainerSearchInput,
  DetailsMovieSearch,
  IconInput,
  MovieDetailSarch,
  NoteMovieSearch,
  Search,
  SubTextSorry,
  TextSorry,
  Title,
  TitleList,
  TitleListText,
  TitleMovieSearch,
} from "./styles";

const windowWidth = Dimensions.get("window").width;

export default function Page() {
  const [moviesData, setMovieData] = useState([
    {
      url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1638918999/amc-cdn/production/2/movies/66900/66865/PosterDynamic/132814.jpg",
      highligthed: false,
      status: "Now playing",
      name: "Esquema de Risco: Operação Fortune",
      nota: 9.2,
      year: 2023,
      genero: "Action",
      time: "187 minutos",
    },
    {
      url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1675512148/amc-cdn/production/2/movies/71800/71828/Poster/325127R1.jpg",
      highligthed: false,
      status: "Upcoming",
      name: "A Flauta Mágica (The Magic Flute)",
      nota: 5.1,
      year: 2021,
      genero: "Suspense",
      time: "120 minutos",
    },
    {
      url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1677088614/amc-cdn/production/2/movies/72700/72732/PosterDynamic/149275.jpg",
      highligthed: false,
      status: "Upcoming",
      name: "Southern Gospel",
      nota: 7.8,
      year: 2023,
      genero: "Gospel",
      time: "140 minutos",
    },
    {
      url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1675857809/amc-cdn/production/2/movies/72400/72429/Poster/342620R1.jpg",
      highligthed: false,
      status: "Top rated",
      name: "Louis Tomlinson: All Of Those Voices",
      nota: 5.6,
      year: 2023,
      genero: "Terror",
      time: "129 minutos",
    },
    {
      url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1677081501/amc-cdn/production/2/movies/66200/66246/Poster/PIB_TheLastWish_2000x3000.jpg",
      highligthed: false,
      status: "Upcoming",
      name: "Gato de Botas 2: O Último Pedido",
      nota: 9.5,
      year: 2023,
      genero: "Animation",
      time: "142 minutos",
    },
    {
      url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1667563025/amc-cdn/production/2/movies/70400/70449/Poster/Primary_BoxCover_HD_800_1200.jpg",
      highligthed: false,
      status: "Popular",
      name: "Triângulo da Tristeza",
      nota: 6.8,
      year: 2023,
      genero: "Romance",
      time: "142 minutos",
    },
    {
      url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1677789940/amc-cdn/production/2/movies/68100/68120/PosterDynamic/149571.jpg",
      highligthed: false,
      status: "Popular",
      name: "Unwelcome",
      nota: 9.3,
      year: 2021,
      genero: "Terror",
      time: "126 minutos",
    },
    {
      url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1675978775/amc-cdn/production/2/movies/66200/66187/PosterDynamic/148935.jpg",
      highligthed: true,
      status: "Popular",
      name: "Creed III",
      nota: 10,
      year: 2022,
      genero: "Action",
      time: "154 minutos",
    },
    {
      url: "https://img.melhoresfilmes.com.br/unsafe/320x480/https%3A%2F%2Fwww.melhoresfilmes.com.br%2Fstorage%2Fimgs%2Fposters%2F39690.jpg%3Ft%3D20221028001250",
      highligthed: true,
      status: "Now playing",
      name: "Adão Negro",
      nota: 4.6,
      year: 2023,
      genero: "Action",
      time: "120 minutos",
    },
    {
      url: "https://lumiere-a.akamaihd.net/v1/images/56015l10_bigsal_brazil_intpayoff_4x5_d4019af6.jpeg",
      highligthed: true,
      status: "Upcoming",
      name: "Thor: Amor e Trovão",
      nota: 5.5,
      year: 2022,
      genero: "Action",
      time: "134 minutos",
    },
    {
      url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1674064035/amc-cdn/production/2/movies/66700/66661/PosterDynamic/147995.jpg",
      highligthed: true,
      status: "Top rated",
      name: "65 - Ameaça Pré-Histórica",
      nota: 6.4,
      year: 2023,
      genero: "Suspense",
      time: "174 minutos",
    },
    {
      url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1674573057/amc-cdn/production/2/movies/69200/69205/PosterDynamic/148217.jpg",
      highligthed: true,
      status: "Now playing",
      name: "Pânico 6",
      nota: 7.6,
      year: 2023,
      genero: "Terror",
      time: "110 minutos",
    },
    {
      url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1667397461/amc-cdn/production/2/movies/53700/53699/PosterDynamic/145397.jpg",
      highligthed: true,
      status: "Top rated",
      name: "Avatar: O Caminho da Água",
      nota: 9.6,
      year: 2022,
      genero: "Animation",
      time: "212 minutos",
    },
  ]);

  const [highligthed, setHighligthed] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [isFocused, setIsFocused] = useState(true);
  
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");
  const [noHaveResults, setNoHaveResults] = useState(false);

  useEffect(() => {
    const isHighligthed = moviesData.filter(
      (isHighligthed) => isHighligthed.highligthed
    );
    setHighligthed(isHighligthed);
  }, []);

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

    console.log(filteredDataMovie)
    
    if (filteredDataMovie.length === 0) {
      setNoHaveResults(true);
    } else {
      setNoHaveResults(false);
    }

    setFilteredData(filteredDataMovie);

    console.log(noHaveResults)

    // console.log(filteredData)

    if(search === "") {
      setIsFocused(true);
    } else {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    filterNow("Now playing");
  }, []);

  const link = useRouter();

  const handleOpenMovie = () => link.push('/movie');

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleOpenMovie()} style={styles.slide}>
          <Image source={{ uri: item.url }} style={styles.image} />
      </TouchableOpacity>
    );
  };

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
              <View style={styles.wrapper}>
                <Carousel
                  activeSlideAlignment={"start"}
                  data={highligthed}
                  renderItem={renderItem}
                  sliderWidth={windowWidth}
                  itemWidth={200}
                />
              </View>
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

          {noHaveResults === true && (
            <ContainerNoResults>
              <Image style={{ marginBottom: 30 }} source={require('./../src/assets/no-results1.png')}/>
              <TextSorry>We are sorry, we can not find the movie :(</TextSorry>
              <SubTextSorry>Find your movie by Type title, categories, years, etc.</SubTextSorry>
            </ContainerNoResults>
          )}

          {search !== "" &&
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

const styles = StyleSheet.create({
  wrapper: {
    height: 290,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    height: "100%",
    width: 180,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
});
