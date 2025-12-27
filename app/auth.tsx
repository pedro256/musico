



import { useRouter } from "expo-router";

import { useState } from "react";
import { ActivityIndicator, Button, StyleSheet, Text, TextInput, View } from "react-native";
/* eslint-disable import/order */
import firebaseAuth from "@react-native-firebase/auth";
import { FirebaseError } from "firebase/app";
/* eslint-disable import/order */
export default function AuthScreen() {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const route = useRouter()

    function goToRegister() {
        route.push("/register");
    }

    async function authenticate(){
        setLoading(true);
        try {
            await firebaseAuth().signInWithEmailAndPassword(
                email,password
            )
        } catch (e) {
            const error = e as FirebaseError;
            alert('Sign in failed: ' + error.message);
        } finally {
			setLoading(false);
		}
        
    }

    return (
        <View
            style={styles.container}
        >
            <View>
                <Text style={{
                    fontSize: 26,
                    paddingVertical: 22,
                    // color:"#fff"
                }}>Informe seu Login</Text>
            </View>
            <Text>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <Text>Senha:</Text>
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
            />
            {
                loading ? (
                    <ActivityIndicator size="small" />
                ) : (
                    <View>
                        <View style={styles.button}>
                            <Button color="#e1e1e1" title="Entrar" />
                        </View>
                        <View style={styles.button}>
                            <Button color="#e1e1e1" title="Registrar" />
                        </View>
                    </View>

                )
            }
            <View style={{ flex: 2 }}>
                <Text>Ainda não está cadastrado?</Text>
                <Button title="Cadastre-se !" onPress={goToRegister} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 40,
        flex: 1,
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