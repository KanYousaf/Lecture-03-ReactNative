import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Row from "./components/Row";
import Column from "./components/Column";
import Box from "./components/Box";
import styles from "./components/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <Row>
        <Column>
          <Box>#1</Box>
          <Box>#2</Box>
          <Box>#3</Box>
          <Box>#4</Box>
          <Box>#5</Box>
          <Box>#6</Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>#7</Box>
          <Box>#8</Box>
          <Box>#9</Box>
          <Box>#10</Box>
          <Box>#11</Box>
          <Box>#12</Box>
        </Column>
      </Row>
    </View>
  );
}
