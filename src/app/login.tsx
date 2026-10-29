import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";


export default function EntryForm() {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text>
          Bom dia! Aqui terá uma tela de login
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