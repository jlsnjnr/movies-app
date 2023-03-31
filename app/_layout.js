import { Slot } from "expo-router";
import Tabs from "../src/components/Tabs";
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

export default function App() {
  return (
    <>
      <Slot />
      <Tabs />
    </>
  );
}