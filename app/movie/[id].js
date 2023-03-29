import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import { AboutMovie, Container, ContainerDatails, ContainerIcons, ContainerNote, LogoContainer, Note, PContainer, PContainerH, TextBottom, TitleDetails } from "./styles";

import Icon from "react-native-vector-icons/Ionicons";
import Header from "../../src/components/Header";
import api from "../../src/services/api";
import { useSearchParams, useSegments } from "expo-router";

const windowWidth = Dimensions.get("window").width;

export default function Page({ navigation, route }) {
  const [movie, setMovie] = useState({});
  const [genero, setGenero] = useState('');
  const segments = useSearchParams();

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get(`/movie/${segments.id}`, {
        params: {
          api_key: "28fc232cc001c31e8a031f419d0a14ca",
          language: "pt-BR",
        },
      });
      setMovie(response.data);
      setGenero(response.data.genres[0]['name']);
    }

    loadFilmes();
  }, []);

  return (
    <>
      <Container>
        <SafeAreaView style={{ marginBottom: 65 }}>
          <PContainer>
            <Header name="Detail" />
          </PContainer>

          <View style={styles.wrapper}> 
            <Image 
              resizeMode="cover" 
              style={styles.image} 
              source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` }} 
            />
            <ContainerNote>
              <Icon weight="bold" name="star-outline" size={16} color="#FF8700" />
              <Note>{movie.vote_average}</Note>
            </ContainerNote>
          </View>

          <PContainerH>
            <LogoContainer>
              <Image 
                resizeMode="cover" 
                style={styles.imageLogo} 
                source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}  
              />
              <TextBottom>{movie.title}</TextBottom>
            </LogoContainer>
          </PContainerH>

          <PContainerH>
            <ContainerDatails>
              <ContainerIcons>
                <Icon name="calendar-outline" size={18} color="#92929D" />
                <TitleDetails>{movie.release_date}</TitleDetails>
              </ContainerIcons>

              <ContainerIcons>
                <Icon name="time-outline" size={18} color="#92929D" />
                <TitleDetails>{movie.runtime} minutos</TitleDetails>
              </ContainerIcons>

              <ContainerIcons>
                <Icon name="easel-outline" size={18} color="#92929D" />
                  <TitleDetails>{genero}</TitleDetails>
              </ContainerIcons>
            </ContainerDatails>
          </PContainerH>

          <PContainerH>
            <AboutMovie>{movie.overview}</AboutMovie>
          </PContainerH>
        </SafeAreaView>
      </Container>
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 210,
    position: 'relative',
  },
  image: {
    flex: 1,
    width: windowWidth,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  imageLogo: {
    borderRadius: 16,
    height: 120,
    width: 95,
  },
});