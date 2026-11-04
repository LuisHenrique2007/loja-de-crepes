import {
    ScrollView,
    Text,
    TouchableOpacity,
} from "react-native";
import{Link} from 'expo-router';
import { Produto } from "./Produto";

//Colocar em <produto>, o produto que foi clicado.
export default function BuyOrPass() {
  return (
    <ScrollView className="flex-1 bg-white">
        <Produto imagem={require("@/assets/crepe/CrepeDeFrango.png")} preco={7} descricao={"crepe de frango"}/>
        <Link href="/carrinho">
        <TouchableOpacity className="bg-orange-500 rounded font-bold mt-36">
            <Text>
                + Adicionar ao carrinho
            </Text>
        </TouchableOpacity>
        </Link>
        
    </ScrollView>
  );
}