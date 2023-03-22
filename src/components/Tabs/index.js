import { useRouter } from 'expo-router';
import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { Container, GoToIcon, GoToText } from './styles';

const Tabs = () => {
  const link = useRouter();

  const handleGoHome = () => {
    link.push('/');
  }
    
  const handleGoToWatchList = () => link.push('/watchList');

  return (
    <Container> 
      <GoToIcon onPress={() => handleGoHome()}>
        <Icon name="home-outline" size={28} color="#0296E5" />
        <GoToText style={{ color: '#0296E5' }}>Home</GoToText>
      </GoToIcon>
      <GoToIcon>
        <Icon name="search-outline" size={28} color="#67686D" />
        <GoToText>Search</GoToText>
      </GoToIcon>
      <GoToIcon onPress={() => handleGoToWatchList()}>
        <Icon name="bookmark-outline" size={28} color="#67686D" />
        <GoToText>Watch list</GoToText>
      </GoToIcon>
    </Container>
  )
}

export default Tabs;