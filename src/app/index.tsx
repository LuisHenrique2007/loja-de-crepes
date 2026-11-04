import { Link } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Produto } from "./Produto";


export default function HomeScreen() {
  return (
    <ScrollView className='flex-1 bg-white'>
      <View className="bg-orange-500 p-1 rounded">
        <Text className='text-xl font-bold text-white'>
          OFERTA ESPECIAL
        </Text>
        <Text className='text-4xl font-bold mt-1'>
          Tá com fome de crepe?
        </Text>

        <Text className='text-white text-xl mt-4'>
          Peça agora
        </Text>
      </View>

      <Text className='mt-7 text-3xl font-bold mb-1'>
        Sabores
      </Text>

      <View className='flex-row p-1'>

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
        <View className='flex-row p-1'>
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

  category: {
    width: "20%",
    backgroundColor: "#FFF3E6",
    paddingVertical: 18,
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: "center",
  },

});