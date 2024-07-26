import { StyleSheet, Text, View } from "react-native";
import { HomeScreen } from "./src/screens/home-screen";
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./src/navigations/RootStack";
import { useEffect, useLayoutEffect, useState } from "react";
import { LoadingScreen } from "./src/screens/loading-screen";

// Created -> (UseLayoutEffect) ->  Rendered -> Mounted -> (UseEffect) -> Unmounted -> Destroyed
// Mounted

export default function App() {
  const [isReady, setIsReady] = useState(false);

  function initApp() {
    setIsReady(true);
  }

  useEffect(() => {
    initApp();
  }, []);

  return (
    <NavigationContainer>
      {isReady ? <RootStack /> : <LoadingScreen />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
