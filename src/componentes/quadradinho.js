import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function Quadradinho(props) {
    return (
        <View style={styles.titleView}>
            <View style={styles.quadrado1}>
                <FontAwesome5 name="wind" size={24} color="white" />
                <View style={styles.texto}>
                    <Text style={styles.texto}>WIND</Text>
                    <Text style={styles.subtitulo}>19.2km/j</Text>
                </View>
            </View>
            <View style={styles.quadrado1}>
                <FontAwesome5 name="thermometer-full" size={24} color="white" />
                <View>
                <Text style={styles.texto}>FEELS LIKE</Text>
                <Text style={styles.subtitulo}>25°</Text>
                </View>
                
            </View>
            <View style={styles.quadrado1}>
                <Feather name="sun" size={24} color="white" />
                <View>
                <Text style={styles.texto}>INDEX UV</Text>
                <Text style={styles.subtitulo}>2</Text>
                </View>
            </View>
            <View style={styles.quadrado1}>
                <Fontisto name="heartbeat-alt" size={24} color="white" />
                <View><Text style={styles.texto}>PRESSURE</Text>
                <Text style={styles.subtitulo}>1014 mbar</Text></View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    titleView: {
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        marginTop: 1,
        gap: 1,
        width: '80%',
        height: '24vh',
        alignItems: 'left',
    },
    quadrado1: {
        backgroundColor: '#477FFF',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection:'row',
    },
    texto: {
        color: 'white',
        fontSize: 19,
        opacity: 0.6,
    },
    subtitulo: {
        fontSize: 20,
        color: 'white',
    }, 
    titulo: {
        fontSize: 20,
        color: 'white',
    },
    temperatura: {
        fontSize: 40,
        color: 'white',

    }
});
