import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

export default function Quadrado(props) {
  return (
    <View style={styles.titleView}>
      <Ionicons name="partly-sunny-sharp" size={60} color="yellow" />
        <Text style={styles.texto}>Heavy Rain</Text>
        <Text style={styles.subtitulo}>Sunday, 02 oct</Text>
        <Text style={styles.temperatura}> 24° </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  titleView: {
    paddingTop: 16,
    width: '80%',
    height: '30vh',
    marginTop: 30,
    backgroundColor: '#477FFF',
    alignItems: 'center',
  },
    texto: {
        marginTop: 20,
        color: 'white',
        fontSize: 20,
    },
    subtitulo: {
        marginTop: 5,
        opacity: 0.6,
        fontSize: 16,
        color: 'white',
      },
    temperatura: {
        marginTop: 20,
        fontSize: 60,
        color: 'white',
        fontWeight: 'bold',
        
    }
});
