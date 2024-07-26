import { View, Text, FlatList, Button } from "react-native";
import { ApplicationBox } from "../components/application-box/application-box";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const DUMMY_DATA = [
  {
    title: "Netflix",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png",
  },
  {
    title: "Spotify",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
  },
  {
    title: "Amazon",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    title: "Google",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
  },
];

export function HomeScreen() {
  const navigation = useNavigation();
  //JS - TS - LIFECYCLE
  const [postState, setPostState] = useState<any[]>([]);

  async function getPostsFromApi() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      setPostState(result);
    } catch (error) {
      console.log("Error");
    }
  }

  useEffect(() => {
    getPostsFromApi();
  }, []);

  //JSX
  return (
    <View
      style={{
        padding: 12,
      }}
    >
      <View style={{ marginBottom: 12 }}>
        <Text>Kanal Listesi</Text>
        <Button
          title="Go To Services"
          onPress={() => {
            navigation.navigate("Services" as any);
          }}
        />
      </View>

      <View>
        {postState.length > 0 && <FlatList
          horizontal
          data={postState}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ApplicationBox title={item.title} />}
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          showsHorizontalScrollIndicator={false}
        />}
      </View>

      {/* <View
        style={{
          flexDirection: "row",
          gap: 12,
        }}
      >
        {DUMMY_DATA.map((item, index) => {
          return (
            <ApplicationBox
              key={index}
              title={item.title}
              imageUrl={item.imageUrl}
            />
          );
        })}
      </View>
      <View
        style={{
          flexDirection: "row",
          gap: 12,
        }}
      >
        {DUMMY_DATA.map((item, index) => {
          return (
            <ApplicationBox
              key={index}
              title={item.title}
              imageUrl={item.imageUrl}
              disabled={index === 1}
            />
          );
        })}
      </View> */}
    </View>
  );
}
