import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { Button } from "react-native-elements";
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import { AuthSession } from 'expo';
const auth0Domain = 'dev-u2fjxxn7.us.auth0.com';
const auth0ClientId = 'rol69hFf2vOIq2GzB2coS2NxRyODg6VY';
import { auth } from "../../firebase";

const LoginScreen = ({ navigation }) => {
  const {authorize, clearSession, user} = useAuth0();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigateSignUp = () => {
    navigation.navigate("SignUpScreen");
  };

  const handleLogin = () => {
    navigation.navigate("HomeScreen");
  };

  const onLogin = async () => {
    try {
      await authorize();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* <Text style={styles.greeting}>Welcome to Doctor App!</Text> */}
        <Image
        source={require("../assets/General_Practioner_Female.png")}
        style={[styles.cardImage]}
      />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          containerStyle={styles.button}
          buttonStyle={styles.button}
          onPress={handleLogin}
          title="Login"
          titleStyle={styles.buttonText}
        />
        <Button
          containerStyle={styles.button}
          buttonStyle={[styles.button, styles.buttonOutline]}
          onPress={navigateSignUp}
          title="Register"
          titleStyle={styles.buttonOutlineText}
        />
        <Button
          containerStyle={styles.button}
          buttonStyle={[styles.button, styles.buttonOutline]}
          onPress={onLogin}
          title="auth0"
          titleStyle={styles.buttonOutlineText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  greeting: {
    fontSize: 28,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    borderColor: "green",
    borderWidth: 1,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    width: "100%",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontSize: 16,
    fontWeight: "700",
  },
  textContainer: {},
  text: {},
  card: {
    height: 200,
    width: 100
  },
  cardImage: {
    height: 200,
    width: "100%",
  },
});

export default LoginScreen;
