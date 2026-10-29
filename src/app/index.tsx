import { Link } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Image } from 'expo-image';
import { Produto } from "./Produto";


export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.banner}>
        <Text style={styles.offer}>
          OFERTA ESPECIAL
        </Text>
        <Text style={styles.title}>
          Tá com fome de crepe?
        </Text>

        <Text style={styles.bannerText}>
          Peça agora
        </Text>

        <Text style={styles.bannerText}>
          Crepezinho delícia
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        Sabores
      </Text>

      <View style={styles.categories}>

        <Link href="/login" asChild>
          <TouchableOpacity style={styles.category}>
            <Produto  imagem={require("@/assets/crepe/CrepeDeFrango.png")} preco={5} descricao={"Crepe de frango"}/>
          </TouchableOpacity>
        </Link>

        <Link href="/compra" asChild>
        <TouchableOpacity style={styles.category}>
          <Produto imagem={require("@/assets/crepe/CrepeDeChocolate.png")} preco={5} descricao={"Crepe de chocolate"}/>
        </TouchableOpacity>
        </Link>

        <Link href="/carrinho" asChild>
        <TouchableOpacity style={styles.category}>
           <Produto imagem={require("@/assets/crepe/CrepeSuíço.png")} preco={1} descricao={"Crepe suíço"}/>
        </TouchableOpacity>
        </Link>
        </View>
        <View style={styles.categories}>
          <Link href="/compra" asChild>
          <TouchableOpacity style={styles.category}>
            <Produto imagem={require("@/assets/crepe/CrepeDeDoceDeLeite.png")} preco={7} descricao={"Crepe de doce de leite"}/>
          </TouchableOpacity>
          </Link>

          <Link href="/compra" asChild>
          <TouchableOpacity style={styles.category}>
            <Produto imagem={require("@/assets/crepe/CrepeDePresunto.png")} preco={3} descricao={"Crepe de presunto"}/>
          </TouchableOpacity>
          </Link>

          <Link href="/compra" asChild>
          <TouchableOpacity style={styles.category}>
            <Produto imagem={require("@/assets/crepe/CrepeDeAveia.png")} preco={3} descricao={"Crepe de aveia"}/>
          </TouchableOpacity>
          </Link>
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

  header: {
    marginTop: 50,
    marginBottom: 25,
  },

  greeting: {
    fontSize: 16,
    color: "#666666",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 5,
  },

  banner: {
    backgroundColor: "#FE8C00",
    borderRadius: 20,
    padding: 25,
  },

  offer: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "bold",
  },

  bannerTitle: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 8,
  },

  bannerText: {
    color: "#ffffff",
    fontSize: 15,
    marginTop: 8,
  },

  button: {
    backgroundColor: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "flex-start",
  },

  buttonText: {
    color: "#FE8C00",
    fontWeight: "bold",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15,
  },

  categories: {
    flexDirection: "row",
    marginTop: 10,
  },

  category: {
    width: "20%",
    backgroundColor: "#FFF3E6",
    paddingVertical: 18,
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: "center",
  },

  emoji: {
    fontSize: 30,
    marginBottom: 5,
  },
  imagem:{
    width: "50%",
    aspectRatio: 298 / 171,
  },

});