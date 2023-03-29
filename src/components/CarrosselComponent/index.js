import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import api from "../../services/api";
import { Image, Slide, Wrapper } from "./styles";

const windowWidth = Dimensions.get("window").width;

const CarrosselComponent = (props) => {
  const [moviesData, setMovieData] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("/movie/top_rated", { params: { api_key: "28fc232cc001c31e8a031f419d0a14ca", language: "pt-BR" }});
      setMovieData(response.data.results);
    }

    loadFilmes();
  }, [])

  const link = useRouter();
  const handleOpenMovie = () => link?.push('/movie');

  const renderItem = ({ item }) => {
    return (
      <Slide onPress={() => handleOpenMovie()}>
          <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} />
      </Slide>
    );
  };

  return (
    <Wrapper>
      <Carousel
        activeSlideAlignment={"start"}
        data={moviesData}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={200}
      />
    </Wrapper>
  )
}

export default CarrosselComponent;