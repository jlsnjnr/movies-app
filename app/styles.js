import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background: #242A32;
  padding: 20px;
  position: relative;
`

export const ContainerScroll = styled.ScrollView``

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;

  margin-top: 12px;
`

export const ContainerSearchInput = styled.View`
  position: relative;
`

export const IconInput = styled.View`
  position: absolute;
  right: 0;
  padding-right: 15px;
  margin: 30px 0;
`

export const Search = styled.TextInput`
  margin: 24px 0;

  color: #fff;
  width: 100%;
  background-color: #3A3F47;
  height: 42px;
  border-radius: 16px;
  text-align: left;
  padding-left: 20px;

  font-weight: 400;
  font-size: 16px;
`

export const ContainerMovies = styled.View`
  align-items: center;

  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 30px;
`

export const ContainerMoviesSearch = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  gap: 20px;
  margin: 10px 0;
`

export const MovieDetailSarch = styled.View`
  margin: 30px 0;
`

export const TitleMovieSearch = styled.Text`
  font-style: normal;
  font-weight: 400;\
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
`

export const DetailsMovieSearch = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: #FFFFFF;
  align-items: center;
  gap: 10px;
`

export const NoteMovieSearch = styled.Text`
  font-style: normal;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  color: #FF8700;
  gap: 10px;
`

export const ContainerName = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 5px;
`

export const GoTo = styled.TouchableOpacity`
  height: 150px; 
  width: 30%; 
  border-radius: 10px; 
`