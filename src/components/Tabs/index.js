import { useRouter, usePathname } from 'expo-router';
import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { Container, GoToIcon, GoToText } from './styles';

const Tabs = () => {
  const link = useRouter();

  const handleGoHome = () => link.push('/');
  const handleGoToWatchList = () => link.push('/watchList');
  const handleGoToSearch = () => link.push('/search');

  const nameRoute = usePathname();
  const routeActive = nameRoute === '/' ? "#0296E5" : "#67686D";
  const routeWatchList = nameRoute === '/watchList' ? "#0296E5" : "#67686D";
  const routeSearch = nameRoute === '/search' ? "#0296E5" : "#67686D";

  return (
    <Container> 
      <GoToIcon onPress={() => handleGoHome()}>
        <Icon name="home-outline" size={28} color={routeActive} />
        <GoToText style={{ color: routeActive }}>Home</GoToText>
      </GoToIcon>
      <GoToIcon onPress={() => handleGoToSearch()}>
        <Icon name="search-outline" size={28} color={routeSearch} />
        <GoToText style={{ color: routeSearch }}>Search</GoToText>
      </GoToIcon>
      <GoToIcon onPress={() => handleGoToWatchList()}>
        <Icon name="bookmark-outline" size={28} color={routeWatchList} />
        <GoToText style={{ color: routeWatchList }}>Watch list</GoToText>
      </GoToIcon>
    </Container>
  )
}

export default Tabs;