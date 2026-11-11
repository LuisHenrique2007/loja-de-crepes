import {
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Produto } from "./Produto";

import { useState } from "react";

type produtoCarrinhoProps={
    imagem: string,
    preco: number,
    descricao: string,
}



export function ProdutoCarrinho({imagem, preco, descricao}:produtoCarrinhoProps) {
    const [quantidade,setQuantidade]=useState(1);

    function excluir(){
        alert("Aqui excluirá")
    }

    function add(){
        setQuantidade(quantidade+1);
    }

    function retirar(){
        if(quantidade>1){
            setQuantidade(quantidade-1);}
        else{
            excluir()
        }
    }
    return (
        <View className="flex-1 bg-white">
            <View className="border rounded w-full h-44 flex-row flex-1 bg-orange-100 mb-2">
                <TouchableOpacity className="border h-10 items-center justify-center w-10 bg-white">
                    <Text>
                        🗑️
                    </Text>
                </TouchableOpacity>


                <View className="flex-1">
                    <Produto imagem={imagem} preco={preco} descricao={descricao} />
                </View>


                <View className="bg-white">
                    <TouchableOpacity className="border flex-1 items-center justify-center w-14" onPress={add}>
                        <Text className="text-orange-500 text-3xl">
                            +
                        </Text>
                    </TouchableOpacity>


                    <View className="border flex-1 items-center justify-center w-14">
                        <Text>
                            {quantidade}
                        </Text>
                    </View>


                    <TouchableOpacity className="border flex-1 items-center justify-center w-14" onPress={retirar}>
                        <Text className="text-orange-500 text-3xl">
                            -
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}