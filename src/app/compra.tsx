import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import{Link} from 'expo-router';
import { Produto } from "./Produto";

//Colocar em <produto>, o produto que foi clicado.
export default function BuyOrPass() {
  return (
    <ScrollView style={styles.container}>
        <Produto imagem={require("@/assets/crepe/CrepeDeFrango.png")} preco={7} descricao={"crepe de frango"}/>
        <Link href="/carrinho">
        <TouchableOpacity style={styles.botao}>
            <Text>
                + Adicionar ao carrinho
            </Text>
        </TouchableOpacity>
        </Link>
        
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFF3E6",
    paddingTop:100,
  },
  botao:{
    width:"30%" ,
    backgroundColor:"#FE8C00",
    borderRadius: 6,
    alignItems:"center",
    fontWeight:"bold",
    marginTop:100,
  },
});