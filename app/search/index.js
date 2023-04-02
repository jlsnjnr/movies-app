import { Text } from "react-native"

export default function Page(props) {
  // const icon = require('./../src/assets/no-results1.png');
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  };
  return (
   <>
    <Text>Teste</Text>
  {/* {noHaveResults ? 
      <NoResults 
        description='Find your movie by Type title, categories, years, etc ' 
        title='We are sorry, We can not find the movie :(' 
        img={icon} 
      /> : 
    (
      teste.map((item) => (
        <ContainerMoviesSearch key={item.title} onPress={() => link.push(`/movie/${item.id}`)}>
          <Image
            resizeMode="cover"
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
            }}
            style={{ height: 160, width: "32%", borderRadius: 10 }}
          />
          <MovieDetailSarch>
            <TitleMovieSearch>
              {truncateText(item.title, 24)}
            </TitleMovieSearch>
            <ContainerName>
              <Icon name="star-outline" size={16} color="#FF8700" />
              <NoteMovieSearch>{item.vote_average}</NoteMovieSearch>
            </ContainerName>
            <ContainerName>
              <Icon name="calendar-outline" size={16} color="#fff" />
              <DetailsMovieSearch>{item.release_date}</DetailsMovieSearch>
            </ContainerName>
          </MovieDetailSarch>
        </ContainerMoviesSearch>
      ))
    )}  */}
   </>
  )
}