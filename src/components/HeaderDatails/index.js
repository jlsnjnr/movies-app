import { useRouter } from "expo-router";
import { useState } from "react";
import { TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Ionicons";
import { ContainerHeaderDetails, Title } from "./styles";

const HeaderDatails = () => {
  const [isFilled, setIsFilled] = useState(false);
  const handleIsFilled = () => setIsFilled(!isFilled);

  return (
    <ContainerHeaderDetails>
      <TouchableOpacity>
        <Icon name="chevron-back-outline" size={28} color="#67686D" />
      </TouchableOpacity>
      <Title>Datails</Title>
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