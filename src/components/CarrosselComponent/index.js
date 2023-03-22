import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import Carousel from "react-native-snap-carousel";

const windowWidth = Dimensions.get("window").width;

const CarrosselComponent = (props) => {
  const [moviesData, setMovieData] = useState([
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
      url: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1667397461/amc-cdn/production/2/movies/53700/53699/PosterDynamic/145397.jpg",
      highligthed: true,
      status: "Top rated",
      name: "Avatar: O Caminho da Água",
      nota: 9.6,
      year: 2022,
      genero: "Animation",
      time: "212 minutos",
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
  ]);

  const link = useRouter();
  const handleOpenMovie = () => link?.push('/movie');

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleOpenMovie()} style={styles.slide}>
          <Image source={{ uri: item.url }} style={styles.image} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Carousel
        activeSlideAlignment={"start"}
        data={moviesData}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={200}
      />
    </View>
  )
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

export default CarrosselComponent;