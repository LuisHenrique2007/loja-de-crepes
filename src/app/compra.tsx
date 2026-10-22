import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import{Link} from 'expo-router';

//import frango from "@/assets/crepedefrango";

export default function BuyOrPass() {
  return (
    <ScrollView style={styles.container}>
        <Text style={styles.emoji}>imagem do produto</Text>
        <Text>
            Descrição do produto
        </Text>
        <Text style={styles.precos}>
            R$ preço do produto
        </Text>
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
    backgroundColor: "#ffffff",
    paddingTop:100,
  },
    emoji: {
    fontSize: 30,
    marginBottom: 5,
  },
  precos: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 15,
  },
  botao:{
    width:"30%" ,
    backgroundColor:"#FE8C00",
    borderRadius: 6,
    alignItems:"center",

  }
});