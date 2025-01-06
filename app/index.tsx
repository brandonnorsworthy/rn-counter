import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const [counter, setCounter] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.mainContainer}>
        <Button title="Increment" onPress={() => setCounter(counter + 1)} />
        <Text>{counter}</Text>
        <Button title="Decrement" onPress={() => setCounter(counter - 1)} />
      </View>
      <Button title="Reset" onPress={() => setCounter(0)} />
    </View>
  );
}

const styles = {
  mainContainer: {
    justifyContent: "center" as const,
    alignItems: "center" as const,
    flexDirection: "row" as const,
  }
}