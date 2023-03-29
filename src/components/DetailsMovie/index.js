import Icon from "react-native-vector-icons/Ionicons";
import { PContainerH } from "../../../app/movie/styles";
import { ContainerDatails, ContainerIcons, TitleDetails } from "./styles";

const DetailsMovie = ({ movie, date, genero }) => {
  return (
    <PContainerH>
      <ContainerDatails>
        <ContainerIcons>
          <Icon name="calendar-outline" size={18} color="#92929D" />
          <TitleDetails>{date}</TitleDetails>
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
  )
}

export default DetailsMovie;