import React, { useEffect } from "react";
import { Card, Icon } from "react-native-elements";
import {
  FlatList,
  Image,
  ImageBackground,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  LogBox,
} from "react-native";

import Email from "../subcomponents/Email";
import Separator from "../subcomponents/Separator";
import Tel from "../subcomponents/Tel";

export default function ProfileScreen({ navigation }) {
  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={{ uri: "https://i.imgur.com/rXVcgTZ.jpg" }}
        >
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={{ uri: "https://i.imgur.com/GfkNpVG.jpg" }}
            />
            <Text style={styles.userNameText}>{"Moiz Alam"}</Text>
            <View style={styles.userAddressRow}>
              <View>
                <Icon
                  name="place"
                  underlayColor="transparent"
                  iconStyle={styles.placeIcon}
                />
              </View>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                  {"Karachi"}, {"Pakistan"}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const renderTel = () => (
    <FlatList
      contentContainerStyle={styles.telContainer}
      data={[
        { id: 1, name: "Mobile", number: "+66 (089)-928-2134" },
        { id: 2, name: "Work", number: "+41 (112)-435-9887" },
      ]}
      renderItem={(list) => {
        const { id, name, number } = list.item;

        return (
          <Tel
            key={`tel-${id}`}
            index={list.index}
            name={name}
            number={number}
            onPressSms={onPressSms}
            onPressTel={onPressTel}
          />
        );
      }}
    />
  );

  const renderEmail = () => (
    <FlatList
      contentContainerStyle={styles.emailContainer}
      data={[
        { id: 1, name: "Personal", email: "moixalam@gmail.com" },
        { id: 2, name: "Work", email: "moix@work.com" },
      ]}
      renderItem={(list) => {
        const { email, id, name } = list.item;

        return (
          <Email
            key={`email-${id}`}
            index={list.index}
            name={name}
            email={email}
            onPressEmail={onPressEmail}
          />
        );
      }}
    />
  );

  const onPressTel = (number) => {
    Linking.openURL(`tel://${number}`).catch((err) =>
      console.log("Error:", err)
    );
  };

  const onPressSms = () => {
    console.log("sms");
  };

  const onPressEmail = (email) => {
    Linking.openURL(`mailto://${email}?subject=subject&body=body`).catch(
      (err) => console.log("Error:", err)
    );
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("LoginScreen");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Card containerStyle={styles.cardContainer}>
          {renderHeader()}
          {renderTel()}
          {Separator()}
          {renderEmail()}
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFF",
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  emailContainer: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {
        alignItems: "center",
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: "center",
      },
    }),
  },
  placeIcon: {
    color: "white",
    fontSize: 26,
  },
  scroll: {
    backgroundColor: "#FFF",
  },
  telContainer: {
    backgroundColor: "#FFF",
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: "center",
    flexDirection: "row",
  },
  userCityRow: {
    backgroundColor: "transparent",
  },
  userCityText: {
    color: "#A5A5A5",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  userImage: {
    borderColor: "#FFF",
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    paddingBottom: 8,
    textAlign: "center",
  },
});
