import { StyleSheet, Text, View } from "react-native";

export default function Quadrado(props) {
    return (
        <View style={styles.titleView}>
            <Text style={styles.titulo}> Today</Text>
            <View>
                <Text style={styles.subtitulo}>Next 7 Days  &#62;</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleView: {
        paddingTop: 16,
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    titulo: {
        fontSize: 20,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
    },
    subtitulo: {
        fontSize: 16,
        color: 'gray',
        alignSelf: 'flex-end',
    },
});
