import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Produto } from "./Produto";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Cart } from "./cart";


export default function carrinho() {
  const { descricao } = useLocalSearchParams<{ descricao: string }>();
  const { imagem } = useLocalSearchParams<{ imagem: any }>();
  const { preco } = useLocalSearchParams<{ preco: string }>();
  const [precoTotal, setPrecoTotal] = useState(() => {
    let i = 0
    let retornar = 0
    while (i < Cart.length) {
      retornar += Cart[i].quantidade * (Cart[i].preco + 1)
    }
    return (retornar)
  });
  const [cart, setCart] = useState<any[]>(Cart);

  function remover(index: number) {
    setCart((current) => current.filter((_, itemIndex) => itemIndex !== index));
    setPrecoTotal(precoTotal - (cart[index].preco - 0.99) * cart[index].quantidade)
    cart[index].quantidade = 0
    Cart.splice(0, Cart.length, ...cart)
  }

  function addToCart(Produto: any) {
    Produto.quantidade += 1
    if (Produto.quantidade - 1 < 1) {
      setCart((current) => [...current, Produto])
      setPrecoTotal(precoTotal + Number(Produto.preco) + 0.99)
      Cart.splice(0, Cart.length, ...cart)
    } else {
      cart[Produto.id].quantidade = Produto.quantidade
      Cart.splice(0, Cart.length, ...cart)
    }
  }

  function retirarDoCarrinho(index: number) {
    if (cart[index].quantidade > 1) {
      setPrecoTotal(precoTotal - cart[index].preco - 0.99)
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
        const quantidade = cart.filter((item) => {
          descricao == item.descricao
        })[0].quantidade
        const novo = {
          id: Cart.length,
          imagem: imagem,
          preco: preco,
          descricao: descricao,
          quantidade: quantidade,
        }
        addToCart(novo)
      }
      else {
        const quantidade = 0
        const novo = {
          id: Cart.length,
          imagem: imagem,
          preco: preco,
          descricao: descricao,
          quantidade: quantidade,
        }
        addToCart(novo)
      }
    }
  }, [descricao]);

  return (
    <View className="flex-1 bg-white">
      <ScrollView>
        {cart.map((crepe) => {
          return (
            <View className="border rounded w-full h-44 flex-row flex-1 bg-orange-100 mb-2" key={crepe.descricao}>
              <TouchableOpacity className="border h-10 items-center justify-center w-10 bg-white" onPress={() => retirarDoCarrinho(crepe.id)}>
                <Text>
                  🗑️
                </Text>
              </TouchableOpacity>


              <View className="flex-1">
                <Produto imagem={crepe.imagem} preco={crepe.preco} descricao={crepe.descricao} />
              </View>


              <View className="bg-white">
                <TouchableOpacity className="border flex-1 items-center justify-center w-14" onPress={() => addToCart(cart[crepe.id])}>
                  <Text className="text-orange-500 text-3xl">
                    +
                  </Text>
                </TouchableOpacity>


                <View className="border flex-1 items-center justify-center w-14">
                  <Text>
                    {crepe.quantidade}
                    {Cart.length}
                    {crepe.id}
                  </Text>
                </View>


                <TouchableOpacity className="border flex-1 items-center justify-center w-14" onPress={() => retirarDoCarrinho(crepe.id)}>
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
        <TouchableOpacity className="bg-orange-500 w-[45%] rounded" onPress={() => {
          alert("Muito obrigado. O total deu:" + precoTotal + "\n Volte sempre!")
        }}>
          <Text className="text-Bold text-4xl">
            Ir a tela de pagamento.
            Total a pagar: {precoTotal.toFixed(2)}
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