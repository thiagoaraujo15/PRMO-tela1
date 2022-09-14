import { StyleSheet, Text, View } from "react-native";
import { Entypo } from '@expo/vector-icons'; 

export default function Titulo(props) {
  return (
    <View style={styles.titleView}>
      <View>
      <Entypo name="menu" size={24} color="black" />
      
      </View>
      <Text>
        <Text style={styles.titulo}>Bandung, </Text>
        <Text style = {styles.subtitulo}>Indonesia</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleView: {
    paddingTop: 16,
    width: '80%',
  },
  titulo: {
    fontSize: 20,

  },
  subtitulo: {
    opacity: 0.6,
    fontSize: 20,
  },
});
