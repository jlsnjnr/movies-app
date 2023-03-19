import { Container, ContainerScroll } from "../styles"
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderDatails from "./../../src/components/HeaderDatails";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Image } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function Page() {
  const [dataMovie, setDataMovie] = useState({
    banner: 'https://f.i.uol.com.br/fotografia/2023/02/28/167762500063fe86a8e4a8f_1677625000_3x2_md.jpg',
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
          <HeaderDatails />
        </SafeAreaView>
      </Container>
      <View style={styles.wrapper}> 
        <Image 
          resizeMode="cover" 
          style={styles.image} 
          source={{ uri: dataMovie.banner }} 
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 210
  },
  image: {
    flex: 1,
    width: windowWidth,
    borderRadius: 12,
  },
});