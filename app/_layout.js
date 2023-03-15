import { Slot } from "expo-router";
import Tabs from "../src/components/Tabs";

export default function App() {
  return (
    <>
      <Slot />
      <Tabs />
    </>
  );
}