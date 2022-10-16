import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Auth0Provider } from "react-native-auth0";
import StackNavigator from "./components/navigation/StackNavigator";

export default function App() {
  return (
    <Auth0Provider
      domain={"dev-u2fjxxn7.us.auth0.com"}
      clientId={"rol69hFf2vOIq2GzB2coS2NxRyODg6VY"}
    >
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Auth0Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
