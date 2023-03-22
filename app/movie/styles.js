import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background: #242A32;
  position: relative;
`

export const PContainer = styled.View`
  padding: 20px;
`

export const PContainerH = styled.View` padding: 0 20px;`;

export const ContainerNote = styled.View`
  flex-direction: row;
  gap: 10px;
  bottom: 10px;
  right: 15px;
  position: absolute;
  background: rgba(37, 40, 54, 0.70);
  backdrop-filter: blur(30px);
  border-radius: 8px;
  padding: 6px 15px;
`

export const Note = styled.Text`
  font-weight: bold;
  color: #FF8700;
`

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 120px;
  position: relative;
  bottom: 65px;
`

export const TextBottom = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #FFFFFF;
  margin-top: 60px;
  margin-left: 10px;
`

export const ContainerDatails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 25px;
  position: relative;
  bottom: 20px;
  margin-bottom: 20px;
`

export const ContainerIcons = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
`

export const TitleDetails = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 15px;

  color: #92929D;
`

export const AboutMovie = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;

  color: #FFFFFF;
`