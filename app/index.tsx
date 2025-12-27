import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function IndexScreen() {

  const route = useRouter()
  const continueApp = ()=>{
    route.push("/auth")
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={{
        fontSize: 32,
        paddingVertical: 22,
        fontWeight: "bold"
      }}>Músicos </Text>

      <Text
        style={{
          fontSize: 16,
          textAlign: "center"
        }}
      >
        App para registrar musicas, para o repertório da sua banda. Você consegue criar setlists, baseado em temas, estilos, palavras chave.
      </Text>


      <View style={{marginVertical:30}}>
        <Button title="Continuar" onPress={continueApp}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop:40,
    paddingBottom: 20,
    flex: 1,
    alignItems: "center"
    // backgroundColor:"#242424"
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
    // color:"#e1e1e1",
    // borderColor:"#e1e1e1"
  },
  button: {
    paddingVertical: 10,
    backgroundColor: "#242424",
    borderRadius: 10,
    marginVertical: 20,
    color: "#e1e1e1"
  }
})