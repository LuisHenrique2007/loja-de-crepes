import { Link } from 'expo-router';
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
      <FlatList numColumns={3}  data={pedido} renderItem={({item}) =>
        <Link href="/compra" asChild>
          <TouchableOpacity className="w-[20%] bg-orange-100 my-2 rounded mx-1 items-center">
            <Produto {... item}/>
          </TouchableOpacity>
        </Link>}
      /> 
    </View>
  );
}

