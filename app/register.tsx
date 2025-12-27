import { StyleSheet, Text, View } from "react-native";

export default function RegisterScreen(){
    return (
        <View style={styles.main}>
            <Text style={styles.title}>Informe seus dados Fundamentais</Text>
        
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        paddingTop:70,
        paddingHorizontal:30
    },
    title:{
        fontSize:28
    }
})