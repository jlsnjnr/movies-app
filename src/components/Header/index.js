import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Ionicons";
import { ContainerHeaderDetails, Title } from "./styles";

const Header = (props) => {
  const link = useRouter();
  const [isFilled, setIsFilled] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);
  
  const isFilledIcons = isFilled ? "bookmark" : "bookmark-outline";
  const isFilledColors = isFilled ? "#EEEEEE" : "#67686D";
  
  const saveMovie = async () => {
    try {
      // Obtém os filmes salvos do AsyncStorage
      const jsonValue = await AsyncStorage.getItem('savedMovies');
      const currentMovies = jsonValue != null ? JSON.parse(jsonValue) : [];
  
      // Verifica se o filme atual já foi adicionado anteriormente
      const index = currentMovies.findIndex(movie => movie.id === props.movie.title);
      if (index > -1) {
        Alert.alert('Esse filme já foi adicionado!');
        return;
      }
  
      // Adiciona o novo filme à lista de filmes salvos
      const newMovies = [...currentMovies, 
        { name: props.movie.title, 
          id: props.movie.title, 
          img: props.movie.poster_path,
          nota: props.movie.vote_average,
          date: props.movie.release_date
        }
      ];

      setSavedMovies(newMovies);
  
      // Salva a nova lista de filmes no AsyncStorage
      const jsonNewMovies = JSON.stringify(newMovies);
      await AsyncStorage.setItem('savedMovies', jsonNewMovies);
  
      // Atualiza o estado do componente
      setIsFilled(true);
      Alert.alert('Filme salvo com sucesso!');
    } catch (e) {
      console.error(e);
      Alert.alert('Ocorreu um erro ao salvar o filme!');
    }
  };

  useEffect(() => {
    const checkIfMovieIsSaved = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('savedMovies');
        const currentMovies = jsonValue != null ? JSON.parse(jsonValue) : [];
        
        const isSaved = currentMovies.some(movie => movie.id === props.movie.title);
        
        if (!isSaved) {
          setIsFilled(false);
        }else {
          setIsFilled(isSaved);
        }
      } catch (e) {
        console.error(e);
      }
    }
  
    checkIfMovieIsSaved();
  }, [props.movie.title]);

  return (
    <ContainerHeaderDetails>
      <TouchableOpacity onPress={() => link.back()}>
        <Icon name="chevron-back-outline" size={28} color="#67686D" />
      </TouchableOpacity>
      <Title>{props.name}</Title>
      <TouchableOpacity onPress={() => saveMovie()}>
        <Icon 
          name={isFilledIcons} 
          size={28} 
          color={isFilledColors} 
        />
      </TouchableOpacity>
    </ContainerHeaderDetails>
  )
}

export default Header;