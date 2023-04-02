import { ScrollView } from "react-native";
import api from "../../services/api";
import { ContainerListHorizontalView, TitleList, TitleListText } from "./styles";

const ListCategory = ({ setMovieCategory }) => {
  const changeTo = async (text) => {
    const response = await api.get(`/movie/${text}`, {
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
        <TitleList onPress={() => changeTo('popular')}>
          <TitleListText style={{ border: '1px solid #ccc'}}>Now Playing</TitleListText>
        </TitleList>
        <TitleList onPress={() => changeTo('now_playing')}>
          <TitleListText>Popular</TitleListText>
        </TitleList>
        <TitleList onPress={() => changeTo('top_rated')}>
          <TitleListText>Top Rated</TitleListText>
        </TitleList>
        <TitleList onPress={() => changeTo('upcoming')}>
          <TitleListText>Upcoming</TitleListText>
        </TitleList>
      </ContainerListHorizontalView>
    </ScrollView>
  );
}

export default ListCategory;