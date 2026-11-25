import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Cart } from "./cart";
import { Produto } from "./Produto";


export default function carrinho() {
  const { descricao } = useLocalSearchParams<{ descricao: string }>()
  const { imagem } = useLocalSearchParams<{ imagem: any }>();
  const { preco } = useLocalSearchParams<{ preco: string }>();
  const [precoTotal, setPrecoTotal] = useState(0);
  const [cart, setCart] = useState<any[]>(Cart);
  const { comprou } = useLocalSearchParams<{ comprou: string }>();



  function remover(index: number) {
    setPrecoTotal(precoTotal - ((Number(cart[index].preco) + 0.99) * cart[index].quantidade))
    setCart((current) => current.filter((_, itemIndex) => itemIndex !== index));
    Cart.splice(0, Cart.length, ...cart)
  }

  function addToCart(Produto: any) {
    Produto.quantidade += 1
    if (Produto.quantidade - 1 < 1) {
      setCart((current) => [...current, Produto])
      setPrecoTotal(precoTotal + Number(Produto.preco) + 0.99)
      Cart.splice(0, Cart.length, ...cart)
    } else {
      cart[cart.indexOf(Produto)].quantidade = Produto.quantidade
      setPrecoTotal(precoTotal + (Number(cart[cart.indexOf(Produto)].preco) + 0.99))
      Cart.splice(0, Cart.length, ...cart)
    }
  }

  function retirarDoCarrinho(index: number) {
    if (cart[index].quantidade > 1) {
      setPrecoTotal(precoTotal - (Number(cart[index].preco) + 0.99))
      cart[index].quantidade -= 1
      Cart.splice(0, Cart.length, ...cart)
    }
    else {
      remover(index)
    }
  }

  useEffect(() => {
    if (descricao != null) {
      if (cart.filter((item) => {
        return (descricao == item.descricao)
      }).length > 0) {
        const produto = cart.filter((item) => {
          return (descricao == item.descricao)
        })[0]
        addToCart(produto)
      }
      else {
        const quantidade = 0
        const novo = {
          imagem: imagem,
          preco: preco,
          descricao: descricao,
          quantidade: quantidade,
        }
        addToCart(novo)
      }
    }
  }, [comprou]);


  return (
    <View className="flex-1 bg-white">
      <ScrollView>
        {cart.map((crepe, index) => {
          return (
            <View className="border rounded w-full h-34 flex-row flex-1 bg-orange-100 mb-2" key={crepe.descricao}>
              <TouchableOpacity className="border h-10 items-center justify-center w-10 bg-white" onPress={() => remover(index)}>
                <Text>
                  🗑️
                </Text>
              </TouchableOpacity>


              <View className="flex-1">
                <Produto imagem={crepe.imagem} preco={crepe.preco} descricao={crepe.descricao} />
              </View>


              <View className="bg-white">
                <TouchableOpacity className="border flex-1 items-center justify-center w-14" onPress={() => addToCart(crepe)}>
                  <Text className="text-orange-500 text-3xl">
                    +
                  </Text>
                </TouchableOpacity>


                <View className="border flex-1 items-center justify-center w-14">
                  <Text>
                    {crepe.quantidade}
                  </Text>
                </View>


                <TouchableOpacity className="border flex-1 items-center justify-center w-14" onPress={() => retirarDoCarrinho(index)}>
                  <Text className="text-orange-500 text-3xl">
                    -
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        })}
      </ScrollView>
      <View className="flex-row justify-between w-full">
        <Link href="/" className="bg-orange-500 w-[45%] rounded" asChild>
          <Text className="text-Bold text-4xl">
            Continuar comprando
          </Text>
        </Link>
        <TouchableOpacity className="bg-orange-500 w-[45%] rounded" onPress={() => {
          alert("Muito obrigado. O total deu:" + precoTotal.toFixed(2) + "\n Volte sempre!")
          setPrecoTotal(0)
          setCart([])
          Cart.splice(0, Cart.length, ...cart)
        }}>
          <Text className="text-Bold text-4xl">
            Ir a tela de pagamento.
            Total: {precoTotal.toFixed(2)}
          </Text>

        </TouchableOpacity>
      </View>
    </View>
  );
}