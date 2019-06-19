import React, { Component, ReactNode } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView
} from "react-native";
import { resetPage, navigateToPage } from "../../actions/nav.action";
import { connect } from "react-redux";
import Text from "../../components/common/text";
import { sizeWidth, sizeHeight, sizeFont } from "../../helpers/size.helper";
import Button from "../../components/common/button";
import Input from "../../components/common/input";
import { font, text } from "../../constants/app.constant";
import Api from "../../api/api";
import { saveToken } from "../../helpers/storage.helper";
import KeyboardHandlerView from "../../components/common/keyboard-handler-view";
import TouchableIcon from "../../components/common/touchable-icon";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {},
      username: text.emptyString,
      password: text.emptyString
    };
  }

  render(): ReactNode {
    const { username, password } = this.state;
    return (
      <KeyboardHandlerView behavior="padding" style={styles.container}>
        <ScrollView bounces={false}>
          <Image style={styles.logo} />
          <View style={styles.content}>
            <Input
              labelStyle={styles.label}
              label="Username"
              placeholder="Enter your username"
            />
            <Input
              labelStyle={styles.label}
              label="Password"
              secureTextEntry={true}
              placeholder="Enter your password"
              icon={
                <TouchableIcon
                  iconStyle={styles.icon}
                  source={require("../../../res/icon/visible.png")}
                />
              }
            />
            <Input
              labelStyle={styles.label}
              label="2FA"
              placeholder="Enter 2FA code"
            />
          </View>
        </ScrollView>
        <Button onPress={this.login} style={styles.signIn} text="Login" />
      </KeyboardHandlerView>
    );
  }

  componentDidMount = async () => {};

  login = async () => {
    const { username, password } = this.state;
    this.props.resetPage("Main");
  };
}

export default connect(
  null,
  { resetPage, navigateToPage }
)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004F94"
  },
  logo: {
    marginTop: sizeWidth(40),
    alignSelf: "center",
    width: sizeWidth(130),
    height: sizeWidth(78)
  },
  signIn: {
    width: sizeWidth(290),
    alignSelf: "center",
    marginVertical: sizeWidth(12)
  },
  content: {
    marginHorizontal: sizeWidth(12),
    marginTop: sizeWidth(40)
  },
  label: {
    color: "#FFFFFF"
  },
  input: {
    fontFamily: font.regular,
    padding: 0,
    margin: 0,
    color: "#1d1d26"
  },
  icon: {
    width: sizeWidth(20),
    height: sizeWidth(14)
  }
});
