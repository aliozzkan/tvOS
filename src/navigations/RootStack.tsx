import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { HomeScreen } from "../screens/home-screen";
import { ServicesScreen } from "../screens/services-screen";

const Stack = createNativeStackNavigator();

export function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header(props) {
          return (
            <View
              style={{
                backgroundColor: "red",
                padding: 20,
              }}
            >
              {props.back && <Button onPress={props.navigation.goBack} title={props.back?.title} />}
              <Text>{props.route.name}</Text>
            </View>
          );
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Services" component={ServicesScreen} />
    </Stack.Navigator>
  );
}
