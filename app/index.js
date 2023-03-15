import React, { useState, useEffect } from "react";

import { View, Image, Dimensions, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";

import Icon from "react-native-vector-icons/Ionicons";

import {
  Container,
  ContainerListHorizontalView,
  ContainerMovies,
  ContainerScroll,
  ContainerSearchInput,
  IconInput,
  Search,
  Title,
  TitleList,
  TitleListText,
} from "./styles";

const windowWidth = Dimensions.get("window").width;

const movies = [
  {
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1638918999/amc-cdn/production/2/movies/66900/66865/PosterDynamic/132814.jpg",
    highligthed: false,
    status: "Now playing",
  },
  {
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1675512148/amc-cdn/production/2/movies/71800/71828/Poster/325127R1.jpg",
    highligthed: false,
    status: "Upcoming",
  },
  {
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1677088614/amc-cdn/production/2/movies/72700/72732/PosterDynamic/149275.jpg",
    highligthed: false,
    status: "Upcoming",
  },
  {
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1675857809/amc-cdn/production/2/movies/72400/72429/Poster/342620R1.jpg",
    highligthed: false,
    status: "Top rated",
  },
  {
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1677081501/amc-cdn/production/2/movies/66200/66246/Poster/PIB_TheLastWish_2000x3000.jpg",
    highligthed: false,
    status: "Upcoming",
  },
  {
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1667563025/amc-cdn/production/2/movies/70400/70449/Poster/Primary_BoxCover_HD_800_1200.jpg",
    highligthed: false,
    status: "Popular",
  },
  {
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1677789940/amc-cdn/production/2/movies/68100/68120/PosterDynamic/149571.jpg",
    highligthed: false,
    status: "Popular",
  },
  {
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1675978775/amc-cdn/production/2/movies/66200/66187/PosterDynamic/148935.jpg",
    highligthed: false,
    status: "Popular",
  },
  {
    url: "https://img.melhoresfilmes.com.br/unsafe/320x480/https%3A%2F%2Fwww.melhoresfilmes.com.br%2Fstorage%2Fimgs%2Fposters%2F39690.jpg%3Ft%3D20221028001250",
    highligthed: true,
    status: "Now playing",
  },
  {
    url: "https://lumiere-a.akamaihd.net/v1/images/56015l10_bigsal_brazil_intpayoff_4x5_d4019af6.jpeg",
    highligthed: true,
    status: "Upcoming",
  },
  {
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1674064035/amc-cdn/production/2/movies/66700/66661/PosterDynamic/147995.jpg",
    highligthed: true,
    status: "Top rated",
  },
  {
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1674573057/amc-cdn/production/2/movies/69200/69205/PosterDynamic/148217.jpg",
    highligthed: true,
    status: "Now playing",
  },
  {
    url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1667397461/amc-cdn/production/2/movies/53700/53699/PosterDynamic/145397.jpg",
    highligthed: true,
    status: "Top rated",
  },
];

export default function Page() {
  const [entries, setEntries] = useState([]);
  const [highligthed, setHighligthed] = useState([]);

  const [filterMovies, setFilterMovies] = useState([]);

  useEffect(() => {
    setEntries(movies.slice(0, 12));
    const isHighligthed = movies.filter(isHighligthed => isHighligthed.highligthed)
    setHighligthed(isHighligthed);
  }, []);

  const filterNow = () => {
    const isHighligthed = movies.filter(isHighligthed => isHighligthed.status === "Now playing")
    setFilterMovies(isHighligthed);
  };

  const filterUpcoming = () => {
    const isHighligthed = movies.filter(isHighligthed => isHighligthed.status === "Upcoming")
    setFilterMovies(isHighligthed);
  };

  const filterTopRated = () => {
    const isHighligthed = movies.filter(isHighligthed => isHighligthed.status === "Top rated")
    setFilterMovies(isHighligthed);
  };

  const filterPopular = () => {
    const isHighligthed = movies.filter(isHighligthed => isHighligthed.status === "Popular")
    setFilterMovies(isHighligthed);
  };

  useEffect(() => {
    filterNow();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={{ uri: item.url }} style={styles.image} />
      </View>
    );
  };

  return (
    <Container>
      <SafeAreaView style={{ marginBottom: 65 }}>
        <ContainerScroll scrollToOverflowEnabled={false}>
          <Title>What do you want to watch?</Title>

          <ContainerSearchInput>
            <Search placeholderTextColor="#67686D" placeholder="Search" />
            <IconInput>
              <Icon name="search-outline" size={28} color="#67686D" />
            </IconInput>
          </ContainerSearchInput>

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
              <TitleList onPress={() => filterNow()}>
                <TitleListText>Now playing</TitleListText>
              </TitleList>

              <TitleList onPress={() => filterUpcoming()}>
                <TitleListText>Upcoming</TitleListText>
              </TitleList>

              <TitleList onPress={() => filterTopRated()}>
                <TitleListText>Top rated</TitleListText>
              </TitleList>

              <TitleList onPress={() => filterPopular()}>
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
