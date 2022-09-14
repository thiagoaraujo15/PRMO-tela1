import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 


export default function Quadradinho(props) {
  return (
    <View style={styles.titleView}>
        <View style = {styles.quadrado0}>
        <Text style={styles.texto}>12:00</Text>
        <AntDesign name="cloudo" size={50} color="white" />
        <Text style={styles.subtitulo}>Now</Text>
        </View>
        <View style = {styles.quadrado1}>
        <Text style={styles.texto}>14:00</Text>
        <Feather name="cloud-drizzle" size={40} color="#477FFF" />
        <Text style={styles.subtitulo}>22°</Text>
        </View>
        <View style = {styles.quadrado1}>
        <Text style={styles.texto}>16:00</Text>
        <FontAwesome5 name="cloud-sun" size={40} color="#477FFF" />
        <Text style={styles.subtitulo}>26°</Text>
        </View>
        <View style = {styles.quadrado1}>
        <Text style={styles.texto}>18:00</Text>
        <FontAwesome5 name="cloud-sun" size={40} color="#477FFF" />
        <Text style={styles.subtitulo}>25°</Text>
        </View>
        <View style = {styles.quadrado1}>
        <Text style={styles.texto}>20:00</Text>
        <Ionicons name="sunny-sharp" size={50} color="#477FFF" />        <Text style={styles.subtitulo}>31°</Text>
        </View>
        <View style = {styles.quadrado1}>
        <Text style={styles.texto}>22:00</Text>
        <AntDesign name="cloudo" size={50} color="#477FFF" />
        <Text style={styles.subtitulo}>25°</Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  titleView: {
    flexDirection:'row',
    marginTop:1,
    gap:1,
    width: '80%',
    height: '24vh',
    alignItems: 'left',
  },
  quadrado0: {
    backgroundColor: '#477FFF',
    alignItems:'center',
    justifyContent: 'space-between',
  },
  quadrado1: {
    alignItems:'center',
    justifyContent: 'space-between',
  },
    texto: {
        marginTop: 10,
        fontSize: 19,
    },
    subtitulo: {
        fontSize: 20,
        fontWeight: 'bold',

      },
    temperatura: {
        fontSize: 40,
        color: 'white',
        
    }
});