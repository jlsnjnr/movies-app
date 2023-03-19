import { Text } from "react-native"
import { Container, ContainerScroll } from "../styles"
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderDatails from "./../../src/components/HeaderDatails";

export default function Page() {
  return (
    <Container>
    <SafeAreaView style={{ marginBottom: 65 }}>
      <ContainerScroll scrollToOverflowEnabled={false}>
        <HeaderDatails />
        <Text>Oi</Text>
      </ContainerScroll>
    </SafeAreaView>
    </Container>
  )
}