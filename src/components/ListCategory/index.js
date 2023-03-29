import { ScrollView } from "react-native";
import api from "../../services/api";
import { ContainerListHorizontalView, TitleList, TitleListText } from "./styles";

const ListCategory = ({ setMovieCategory }) => {

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

  return (
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
  );
}

export default ListCategory;