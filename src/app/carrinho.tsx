import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Produto } from "./Produto";
import {Link} from "expo-router";
import {ProdutoCarrinho} from "./ProdutoCarrinho";

export default function carrinho() {
  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="border rounded w-full h-44 flex-row flex-1 bg-orange-100 mb-2">
          <TouchableOpacity className="border h-10 items-center justify-center w-10 bg-white">
            <Text>
              🗑️
            </Text>
          </TouchableOpacity>


          <View className="flex-1">
            <Produto imagem={require("@/assets/crepe/CrepeSuíço.png")} preco={1} descricao={"Crepe suíço"} />
          </View>


          <View className="bg-white">
            <TouchableOpacity className="border flex-1 items-center justify-center w-14">
              <Text className="text-orange-500 text-3xl">
                +
              </Text>
            </TouchableOpacity>


            <View className="border flex-1 items-center justify-center w-14">
              <Text>
                1
              </Text>
            </View>


            <TouchableOpacity className="border flex-1 items-center justify-center w-14">
              <Text className="text-orange-500 text-3xl">
                -
              </Text>
            </TouchableOpacity>
          </View>
        </View>

      <ProdutoCarrinho imagem={require("@/assets/crepe/CrepeSuíço.png")} preco={1} descricao={"Crepe suíço"}/>

      </ScrollView>
      <View className="flex-row justify-between w-full">
        <TouchableOpacity className="bg-orange-500 w-[45%] rounded">
          <Text className="text-Bold text-4xl">
            Ir a tela de pagamento
          </Text>
        </TouchableOpacity>


        <Link href={"./"}>
        <TouchableOpacity className="bg-orange-500 w-[45%] rounded">
          <Text className="text-Bold text-4xl">
            Continuar comprando
          </Text>
        </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}