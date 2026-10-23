import { View,
    Text,
    StyleSheet,
 } from "react-native";
import { Image } from "expo-image";

export function Produto(props) {
    const {imagem, preco, descricao} = props;
    return(
        <View style={styles.container}>
            <Image source={imagem} style={styles.imagem}/>
            <Text>
                {descricao}
            </Text>
            <Text style={styles.preco}>
                R$ {preco}
            </Text>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    imagem:{
        width: "70%",
        aspectRatio: 298 / 171,
    },
    preco:{
        fontSize: 15,
        fontWeight: "bold",
        paddingTop: "1%",
    },
});