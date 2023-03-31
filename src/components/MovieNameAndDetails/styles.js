
import { Dimensions } from 'react-native';
import styled from 'styled-components';

const windowWidth = Dimensions.get("window").width;

export const Wrapper = styled.View`
  height: 210px;
  position: relative;
`

export const Image = styled.Image`
  flex: 1;
  width: ${windowWidth}px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
`;

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