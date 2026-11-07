import { View,
    Text,
 } from "react-native";
import { Image } from "expo-image";

export function Produto(props) {
    const {imagem, preco, descricao} = props;
    return(
        <View className="flex-1 bg-orange-100">
            <Image source={imagem} className="w-[60%] aspect-[1/1]"/>
            <Text>
                {descricao}
            </Text>
            <Text className="text-2xl font-bold">
                R$ {preco}<Text className="text-xs font-thin">,99</Text>
            </Text>
        </View>
    );
}
