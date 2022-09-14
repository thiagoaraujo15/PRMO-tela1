import { StyleSheet, Text, View } from "react-native";

export default function Titulo(props) {
  return (
    <View style={styles.titleView}>
      <Text style={styles.titleStyle}>{props.texto}</Text>;
    </View>
  );
}

const styles = StyleSheet.create({
  titleView: {
    paddingTop: 16,
    alignItems: "center",
  },
  titleStyle: {
    color: "blue",
    fontSize: 22,
  },
});
