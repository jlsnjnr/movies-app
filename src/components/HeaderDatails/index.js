import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Ionicons";
import { ContainerHeaderDetails } from "./styles";

const HeaderDatails = () => {
  const [isFilled, setIsFilled] = useState(false);
  const handleIsFilled = () => setIsFilled(!isFilled);
  
  const link = useRouter();
  const goBack = () => link.push('/');

  return (
    <ContainerHeaderDetails>
      <TouchableOpacity onPress={() => goBack()}>
        <Icon name="chevron-back-outline" size={28} color="#67686D" />
      </TouchableOpacity>
      <Text>Datails</Text>
      <TouchableOpacity onPress={() => handleIsFilled()}>
        <Icon 
          name={isFilled ? "bookmark" : "bookmark-outline"} 
          size={28} 
          color={isFilled ? "#EEEEEE" : "#67686D"} 
        />
      </TouchableOpacity>
    </ContainerHeaderDetails>
  )
}

export default HeaderDatails;