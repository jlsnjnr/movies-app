import { Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  ContainerMoviesSearch,
  ContainerName,
  DetailsMovieSearch,
  MovieDetailSarch,
  NoteMovieSearch,
  TitleMovieSearch,
} from "../styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, PContainer } from "../movie/styles";
import { MarginH } from "./styles";
import Header from "../../src/components/Header";

export default function Page() {
  return (
    <>
      <Container>
        <SafeAreaView style={{ marginBottom: 65 }}>
          <PContainer>
            <Header name="Watch list" />
          </PContainer>
          <MarginH>
            <ContainerMoviesSearch>
              <Image
                // key={item.url}
                resizeMode="cover"
                source={{
                  uri: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1675978775/amc-cdn/production/2/movies/66200/66187/PosterDynamic/148935.jpg",
                }}
                style={{ height: 160, width: "32%", borderRadius: 10 }}
              />
              <MovieDetailSarch>
                <TitleMovieSearch>Text</TitleMovieSearch>
                <ContainerName>
                  <Icon name="star-outline" size={16} color="#FF8700" />
                  <NoteMovieSearch>Text</NoteMovieSearch>
                </ContainerName>
                <ContainerName>
                  <Icon name="apps-outline" size={16} color="#fff" />
                  <DetailsMovieSearch>Text</DetailsMovieSearch>
                </ContainerName>
                <ContainerName>
                  <Icon name="calendar-outline" size={16} color="#fff" />
                  <DetailsMovieSearch>Text</DetailsMovieSearch>
                </ContainerName>
                <ContainerName>
                  <Icon name="time-outline" size={16} color="#fff" />
                  <DetailsMovieSearch>Text</DetailsMovieSearch>
                </ContainerName>
              </MovieDetailSarch>
            </ContainerMoviesSearch>
          </MarginH>
        </SafeAreaView>
      </Container>
    </>
  );
}
