import { Link, useLocalSearchParams } from 'expo-router';
import {
    ScrollView,
    Text,
    TouchableOpacity,
} from "react-native";
import { Produto } from "./Produto";

//Colocar em <produto>, o produto que foi clicado.
export default function compra() {
    const { descricao } = useLocalSearchParams<{ descricao: string }>();
    const { imagem } = useLocalSearchParams<{ imagem: any }>();
    const { preco } = useLocalSearchParams<{ preco: string }>();    
    
    return (
        <ScrollView className="flex-1 bg-white">
            <Produto imagem={imagem} preco={Number(preco)} descricao={descricao} />
            <Link href="/carrinho" asChild>
            <TouchableOpacity className="bg-orange-500 rounded  mt-36 w-full items-center">
                <Text className='font-bold'>
                    + Adicionar ao carrinho
                </Text>
            </TouchableOpacity>
            </Link>
            
        </ScrollView>
    );
}