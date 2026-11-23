import { router, useLocalSearchParams } from 'expo-router';
import {
    ScrollView,
    Text,
    TouchableOpacity,
} from "react-native";
import { Produto } from "./Produto";


export default function compra() {
    const { descricao } = useLocalSearchParams<{ descricao: string }>();
    const { imagem } = useLocalSearchParams<{ imagem: any }>();
    const { preco } = useLocalSearchParams<{ preco: string }>();    

    return (
        <ScrollView className="flex-1 bg-white">
            <Produto imagem={imagem} preco={Number(preco)} descricao={descricao} />
            <TouchableOpacity className="bg-orange-500 rounded  mt-36 w-full items-center" onPress={()=>{
                router.push({pathname: "/carrinho", params: {imagem: imagem, preco:preco, descricao:descricao}})
            }}>
                <Text className='font-bold'>
                    + Adicionar ao carrinho
                </Text>
            </TouchableOpacity>
        </ScrollView>
    );
}