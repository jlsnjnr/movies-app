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

export const AboutMovie = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;

  color: #FFFFFF;

  margin: 0 0 35px 0;
`

export const ImageLogo = styled.Image`
  border-radius: 16px;
  height: 120px;
  width: 95px;
`;