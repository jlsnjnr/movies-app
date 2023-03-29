import Icon from "react-native-vector-icons/Ionicons";
import { ContainerNote, Image, Note, Wrapper } from "./styles";

const MovieNameAndDetails = ({ movie }) => {
  return (
    <Wrapper>
      <Image
        resizeMode="cover"
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
        }}
      />
      <ContainerNote>
        <Icon
          weight="bold"
          name="star-outline"
          size={16}
          color="#FF8700"
        />
        <Note>{movie.vote_average}</Note>
      </ContainerNote>
    </Wrapper>
  )
}

export default MovieNameAndDetails;