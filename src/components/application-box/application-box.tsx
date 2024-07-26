import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Pressable,
  Alert,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

interface ApplicationBoxProps {
  title: string;
  imageUrl?: string;
  disabled?: boolean;
}

export function ApplicationBox(props: ApplicationBoxProps) {
  const Wrapper = props.disabled ? View : TouchableOpacity;

  const renderContent = () => (
    <View style={styles.container}>
      <Text>{props.title}</Text>
      {props.imageUrl && <View style={{ height: 100, width: "100%", alignItems: "center" }}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: props.imageUrl,
          }}
        />
      </View>}
    </View>
  );

  if (props.disabled) {
    return <View>{renderContent()}</View>;
  }

  return (
    <TouchableOpacity
      onPress={() => {
        Alert.alert(
          "Tıklandı",
          "Uygulama detay sayfasına yönlendiriliyorsunuz."
        );
      }}
    >
      {renderContent()}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
});
