import React, { Component } from "react";

//Imported Libraries
import {
  Dimensions,
  Modal,
  Share,
  View,
  ActivityIndicator,
  YellowBox,
  Platform,
} from "react-native";
import { WebView } from "react-native-webview";
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Right,
  Title,
  Button,
} from "native-base";

const webViewHeight = Dimensions.get("window").height - 2;

class ModalComponent extends Component {
  constructor(props) {
    super(props);
  }

  handleClose = () => {
    return this.props.onClose();
  };

  handleShare = () => {
    const { url, title } = this.props.articleData;
    message = `${title}\n\nBaca Lebih Lanjut @${url}\n Bagikan Berita Lewat Baca Berita\n`;
    return Share.share(
      { title, message, url: message },
      { dialogTitle: `Share ${title}` }
    );
  };

  displayLoading() {
    return (
      <View style={{ flex: 1, bottom: 100 }}>
        <ActivityIndicator size="large" color="#5a0a6e" />
      </View>
    );
  }
  componentDidMount() {
    YellowBox.ignoreWarnings([
      "VirtualizedLists should never be nested",
      "Can't open url: about:srcdoc",
    ]);
  }

  render() {
    const windowWidth = Dimensions.get("window").width;
    const { showModal, articleData } = this.props;
    const { url } = articleData;
    if (url != undefined) {
      return (
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={this.handleClose}
        >
          <Container
            style={{ margin: 15, marginBottom: 0, backgroundColor: "#ffff" }}
          >
            <Header style={{ backgroundColor: "#9132a8" }}>
              <Left>
                <Button onPress={this.handleClose} transparent>
                  <Icon
                    name="ios-arrow-back"
                    style={{ color: "white", fontSize: 20 }}
                  />
                </Button>
              </Left>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  left: Platform.OS == "android" ? windowWidth / 7 : null,
                }}
              >
                <Title
                  children={articleData.title}
                  style={{
                    color: "white",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                />
              </View>
              <Right>
                <Button onPress={this.handleShare} transparent>
                  <Icon name="share" style={{ color: "white", fontSize: 20 }} />
                </Button>
              </Right>
            </Header>
            <Content contentContainerStyle={{ height: webViewHeight ,flex:1 }}>
              <WebView
                source={{ uri: url }}
                style={{ flex: 1 }}
                onError={this.handleClose}
                startInLoadingState
                renderLoading={() => {
                  return this.displayLoading();
                }}
                scalesPageToFit
              />
            </Content>
          </Container>
        </Modal>
      );
    } else {
      return null;
    }
  }
}

export default ModalComponent;
