import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { Button, Icon } from "react-native-elements";
import RadioButtonRN from "radio-buttons-react-native";
import { auth } from "../../firebase";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    navigation.navigate("SMSCode");
  };

  const navigateLogin = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Register your account!</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="First Name" style={styles.input} />
        <TextInput placeholder="Last Name" style={styles.input} />

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
        <Text style={styles.role}>Who you are?</Text>
        <RadioButtonRN
          data={[
            {
              id: "1",
              label: "Doctor",
            },
            {
              id: "2",
              label: "Patient",
            },
          ]}
          boxStyle={{ borderWidth: 0 }}
          textStyle={{ fontSize: 15, fontWeight: 'bold' }}
          circleStyle={{ size: 14 }}
          icon={<Icon name="check-circle" size={25} color="#2c9dd1" />}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          containerStyle={styles.button}
          buttonStyle={[styles.button, styles.buttonOutline]}
          onPress={handleSignUp}
          title="Register"
          titleStyle={styles.buttonOutlineText}
        />
        <View style={styles.textContainer}>
          <Text>Already have account?</Text>
          <Button
            type="clear"
            title="Log In"
            titleStyle={styles.text}
            onPress={navigateLogin}
          />
        </View>
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
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 15,
  },
  role: {
    marginTop: 10,
  },
});

export default SignUpScreen;
