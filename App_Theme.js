import { View, Text, Button, Switch, useColorScheme } from "react-native";
import { useState } from "react";
import { styles } from "./components/Container";

let userFunction = (userName) => {
  return userName.firstName + " " + userName.lastName;
};

export default function App() {
  let count = 0;
  const userObj = { firstName: "Kanwal", lastName: "Yousaf" };
  const isDarkTheme = useColorScheme === "dark"; //false
  const [isDark, setIsDark] = useState(isDarkTheme); //isDark = false

  return (
    <View
      style={[
        styles.viewContainer,
        isDark ? styles.darkTheme : styles.lightTheme,
      ]}
    >
      <Text
        style={[
          styles.textHeadContainer,
          isDark ? styles.darkTheme : styles.lightTheme,
        ]}
      >
        SE-348 : Mobile Application Development
      </Text>
      <Text
        style={[
          styles.textBodyContainer,
          isDark ? styles.darkTheme : styles.lightTheme,
        ]}
      >
        Hello {userFunction(userObj)}
        <br />
        <br />
        <Button
          style={[styles.buttonContainer]}
          title="Change Theme"
          onPress={() => {
            count++;
            console.log(count);
          }}
        />
      </Text>
      <Switch
        value={isDark}
        onValueChange={() => {
          const newTheme = !isDark;
          setIsDark(newTheme);
        }}
      />
    </View>
  );
}
