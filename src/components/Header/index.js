import { useRouter } from "expo-router";
import { useState } from "react";
import { TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Ionicons";
import { ContainerHeaderDetails, Title } from "./styles";

const Header = (props) => {
  const link = useRouter();
  const [isFilled, setIsFilled] = useState(false);
  const handleIsFilled = () => setIsFilled(!isFilled);

  const isFilledIcons = isFilled ? "bookmark" : "bookmark-outline";
  const isFilledColors = isFilled ? "#EEEEEE" : "#67686D";

  return (
    <ContainerHeaderDetails>
      <TouchableOpacity onPress={() => link.back()}>
        <Icon name="chevron-back-outline" size={28} color="#67686D" />
      </TouchableOpacity>
      <Title>{props.name}</Title>
      <TouchableOpacity onPress={() => handleIsFilled()}>
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