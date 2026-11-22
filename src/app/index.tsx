import { Link, router } from 'expo-router';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Produto } from "./Produto";
import { useState, useEffect } from 'react';
import Cardapio from "./Cardapio";


export default function HomeScreen() {
  const [pesquisado,setPesquisa]=useState("");
  const [pedido,setPedido]=useState(Cardapio);

  useEffect(()=> {
    if(pesquisado === ""){
      setPedido(Cardapio)
    }
    else{
      setPedido(Cardapio.filter((item) => {
        return (item.descricao.toLowerCase().indexOf(pesquisado.toLowerCase())> -1)
      }))
    }
  }, [pesquisado])

  return (
    <View>
      <View className="bg-orange-500 p-1 rounded">
        <Text className='text-xl font-bold text-white'>
          OFERTA ESPECIAL
        </Text>
        <Text className='text-4xl font-bold mt-1'>
          Tá com fome de crepe?
        </Text>
        <TextInput className='border rounded text-xl mt-4 bg-white' placeholder='peça agora' onChangeText={(t) => setPesquisa(t)}/>
      </View>

      <Text className='mt-7 text-3xl font-bold mb-1'>
        Sabores
      </Text>
      <FlatList numColumns={3}  data={pedido} keyExtractor={(item,index)=> item.id.toString()} renderItem={({item}) =>
          <TouchableOpacity className="w-[30%] bg-orange-100 my-2 rounded mx-1 items-center" onPress={() => {
            router.push({pathname: "/compra", params: {descricao: item.descricao, imagem: item.imagem, preco: item.preco.toString()},})
          }}>
            <Produto {... item}/>
          </TouchableOpacity>}
        ListFooterComponent={
        <Link href="/carrinho" asChild>
          <TouchableOpacity className="bg-orange-500 rounded items-center">
            <Text className='font-bold'>
              Ir ao carrinho
            </Text>
          </TouchableOpacity>
        </Link>
        }
      /> 
    </View>
  );
}

