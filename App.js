import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import AppointmentScreen from "./components/AppointmentScreen";
import DietScreen from "./components/DietScreen";
import HomeScreen from "./components/HomeScreen";
import InfoScreen from "./components/InfoScreen";
import ProfileScreen from "./components/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "md-home-outline";
            } else if (route.name === "Appointment") {
              iconName = "md-calendar-outline";
            } else if (route.name === "Info") {
              iconName = "md-information-circle-outline";
            } else if (route.name === "Diet") {
              iconName = "md-restaurant-outline";
            } else if (route.name === "Profile") {
              iconName = "md-person-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#216afc",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Appointment" component={AppointmentScreen} />
        <Tab.Screen name="Info" component={InfoScreen} />
        <Tab.Screen name="Diet" component={DietScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
