import { Dimensions } from 'react-native';
import styled from 'styled-components';

const windowWidth = Dimensions.get("window").width;

export const Container = styled.View`
  background: #242A32;
  position: absolute;
  bottom: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: ${windowWidth};
  padding: 15px 20px;
  border-top-color: #0296E5;
  border-top-width: 1px;
`

export const GoToIcon = styled.TouchableOpacity`
  align-items: center;
  justify-cntent: center;
  width: 70px;
`
export const GoToText = styled.Text`
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  font-weight: 500;
  color: #67686D;
`