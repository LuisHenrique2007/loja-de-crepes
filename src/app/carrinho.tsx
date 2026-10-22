import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

//import frango from "@/assets/crepedefrango";

export default function EntryForm() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>
          Bom dia! Aqui será um carrinho.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
  
});