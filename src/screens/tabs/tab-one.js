import React, { Component } from "react";

//Imported Libraries
import {
  Alert,
  View,
  ActivityIndicator,
  TextInput,
  ScrollView,
  RefreshControl,
  YellowBox,
  Dimensions
} from "react-native";
import { Container, Content, List, Icon } from "native-base";


//Imported Components
import DataItem from "../../components/newsItem";
import Modal from "../../components/modal";

import { getArticles } from "../../service/news";

export default class TabThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      setModalVisible: false,
      modalArticleData: {},
      searchText: "",
      selectedId: -1,
      data: [],
      refreshing: false,
      filteredData: [],
    };
  }

  _onRefresh = () => {
    this.setState({ refreshing: true });
    getArticles().then(() => {
      this.setState({ refreshing: false });
    });
  };

  handleItemDataOnPress = (articleData) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: articleData,
    });
  };

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {},
    });
  };

  search = (searchText) => {
    this.setState({ searchText: searchText });

    let filteredData = this.state.data.filter(function (item) {
      return (
        item.title.includes(searchText) || item.source.name.includes(searchText)
      );
    });

    this.setState({ filteredData: filteredData });
  };


  UNSAFE_componentWillMount(){
    this._onRefresh()
  }
 
  handleData = () => {
    getArticles().then(
      (data) => {
        this.setState({
          isLoading: false,
          data: data,
        });
      },
      (error) => {
        Alert.alert("Error", "Something went wrong!");
      }
    );
  };

  componentDidMount() {
    this.handleData()
    YellowBox.ignoreWarnings(["VirtualizedLists should never be nested" ,"Can't open url: about:srcdoc"]);
  }

   
  
  render() {
   const windowHeight = Dimensions.get('window').height;
    let view = this.state.isLoading ? (
      <View style={{ flex:1 ,justifyContent:"center", alignItems:"center", marginTop:windowHeight/4}}>
      <ActivityIndicator
        size="large"
        animating={this.state.isLoading}
        color="#5a0a6e"
      />
    </View>
    ) : (
      <View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              borderWidth: 0.6,
              borderColor: "#9132a8",
              height: 40,
              borderRadius: 12,
              margin: 2,
            }}
          >
            <Icon
              name="ios-search"
              style={{
                color: "#9132a8",
                fontSize: 20,
                padding: 10,
              }}
            />
            <TextInput
              style={{ flex: 1 }}
              onChangeText={(text) => this.search(text)}
              value={this.state.searchText}
              underlineColorAndroid="transparent"
              placeholder="Cari Berita & Sumber"
            />
          </View>
        </View>
        <View>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            }
          >
        <List
          dataArray={
            this.state.filteredData && this.state.filteredData.length > 0
              ? this.state.filteredData
              : this.state.data
          }
          keyExtractor={(item, index) => `item-${item.title}`}
          renderRow={(item) => {
            return (
              <DataItem
                onPress={this.handleItemDataOnPress}
                data={item}
                keyExtractor={(item) => item.id}
              />
            );
          }}
        />
      </ScrollView>
      </View>
      </View>
    );
    return (
      <Container>
        <Content>{view}</Content>
        <Modal
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
        />
      </Container>
    );
  }
}
