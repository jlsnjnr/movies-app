import { SafeAreaView } from "react-native-safe-area-context";
import HeaderDatails from "./../../src/components/HeaderDatails";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import { AboutMovie, Container, ContainerDatails, ContainerIcons, ContainerNote, LogoContainer, Note, PContainer, PContainerH, TextBottom, TitleDetails } from "./styles";
import { Text } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;

export default function Page() {
  const [dataMovie, setDataMovie] = useState({
    banner: 'https://i0.wp.com/www.lacasadeel.net/wp-content/uploads/2022/12/Creed-III-Creed-3.jpg?resize=1068%2C602&ssl=1',
    bg: 'https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1675978775/amc-cdn/production/2/movies/66200/66187/PosterDynamic/148935.jpg',
    title: 'Creed III',
    about: 'Da Metro Goldwyn Mayer Pictures chega "Creed III," primeiro filme realizado por Michael B. Jordan, que regressa ao seu papel de Adonis Creed na terceira parte deste franchise de sucesso.',
    date: 2023,
    time: '148 minutos',
    genero: 'Action',
    nota: 7.9,
  });
  
  return (
    <>
      <Container>
        <SafeAreaView style={{ marginBottom: 65 }}>
          <PContainer>
            <HeaderDatails />
          </PContainer>

          <View style={styles.wrapper}> 
            <Image 
              resizeMode="cover" 
              style={styles.image} 
              source={{ uri: dataMovie.banner }} 
            />
            <ContainerNote>
              <Icon weight="bold" name="star-outline" size={16} color="#FF8700" />
              <Note>{dataMovie.nota}</Note>
            </ContainerNote>
          </View>

          <PContainerH>
            <LogoContainer>
              <Image 
                resizeMode="cover" 
                style={styles.imageLogo} 
                source={{ uri: dataMovie.bg }} 
              />
              <TextBottom>{dataMovie.title}</TextBottom>
            </LogoContainer>
          </PContainerH>

          <PContainerH>
            <ContainerDatails>
              <ContainerIcons>
                <Icon name="calendar-outline" size={18} color="#92929D" />
                <TitleDetails>{dataMovie.date}</TitleDetails>
              </ContainerIcons>

              <ContainerIcons>
                <Icon name="time-outline" size={18} color="#92929D" />
                <TitleDetails>{dataMovie.time}</TitleDetails>
              </ContainerIcons>

              <ContainerIcons>
                <Icon name="easel-outline" size={18} color="#92929D" />
                <TitleDetails>{dataMovie.genero}</TitleDetails>
              </ContainerIcons>
            </ContainerDatails>
          </PContainerH>

          <PContainerH>
            <AboutMovie>{dataMovie.about}</AboutMovie>
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