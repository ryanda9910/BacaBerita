import React, { Component } from "react";

//Imported Libraries
import {
  Header,
  Left,
  Body,
  Right,
  Title,
  Tab,
  TabHeading,
  Icon,
  Tabs,
  Text,
  Container,
} from "native-base";
import { View, Image, Dimensions, Platform } from "react-native";

//Imported Components
import TabNewsOne from "./tabs/tab-one";
import TabNewsTwo from "./tabs/tab-two";
import TabNewsThree from "./tabs/tab-three";

export default class TabScreen extends Component {
  render() {
    const windowWidth = Dimensions.get("window").width;
    return (
      <Container>
        <Header style={{ backgroundColor: "#9132a8" }} hasTabs>
          <View
            style={{ flex: 1, justifyContent: "center", left: windowWidth / 4.5 }}
          >
            <Body
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <Image
                source={require("../../assets/logo.png")}
                style={{ width: 25, height: 25, margin: 10 }}
              />
              <Title style={{ color: "white", margin: 8 , fontFamily:"Lobster" ,fontSize:20}}>Baca Berita</Title>
            </Body>
          </View>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: "white" }}>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "#9132a8" }}>
                <Icon name="md-trending-up" style={{ color: "#ffffff" }} />
                <Text style={{ color: "#ffffff" }}>Populer</Text>
              </TabHeading>
            }
          >
            <TabNewsOne />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "#9132a8" }}>
                <Icon name="md-wallet" style={{ color: "#ffffff" }} />
                <Text style={{ color: "#ffffff" }}>Bisnis</Text>
              </TabHeading>
            }
          >
            <TabNewsTwo />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: "#9132a8" }}>
                <Icon name="md-bulb" style={{ color: "#ffffff" }} />
                <Text style={{ color: "#ffffff" }}>Teknologi</Text>
              </TabHeading>
            }
          >
            <TabNewsThree />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
