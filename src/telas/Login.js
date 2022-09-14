import { StyleSheet, View } from "react-native";
import Titulo from "../componentes/Titulo";
import Quadrado from "../componentes/quadradoAzul";
import Quadradinho from "../componentes/quadradinho";
import Previsões from "../componentes/previsões";
import Linha from "../componentes/linha";



export default function Login() {
  return (
    <View style = {styles.tela}>
      <Titulo/>
      <Quadrado/>
      <Quadradinho/>
      <Previsões/>
      <Linha/>
    </View>
  );
  
}
const styles = StyleSheet.create({
  tela: {
    alignItems: 'center',
  }});