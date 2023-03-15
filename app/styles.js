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

export const ContainerListHorizontalView = styled.View`
  margin: 30px 0;
  flex-direction: row;
  gap: 30px;
`

export const TitleList = styled.TouchableOpacity`
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;

  color: #FFFFFF;
`

export const TitleListText = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;

  color: #FFFFFF;
`

export const ContainerMovies = styled.View`
  align-items: center;

  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
`