import React, { Component, ReactNode } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator
} from "react-native";
import { resetPage, navigateToPage } from "../../actions/nav.action";
import Text from "../../components/common/text";
import { connect } from "react-redux";
import { sizeWidth, sizeFont } from "../../helpers/size.helper";
import { font, text } from "../../constants/app.constant";
import Api from "../../api/api";
import Toolbar from "../../components/common/toolbar";
import TouchableIcon from "../../components/common/touchable-icon";
import Setting from "./setting";
class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {};

  render(): ReactNode {
    return (
      <View style={styles.container}>
        <Toolbar
          right={
            <TouchableIcon
              onPress={() => this.props.navigateToPage("Qr")}
              source={require("../../../res/icon/qr-code.png")}
            />
          }
          center={<Text style={styles.title}>Settings</Text>}
        />
        <ScrollView bounces={false}>
          <Text style={styles.label}>Profile settings</Text>
          <Setting
            onPress={() => this.props.navigateToPage("Profile")}
            label="Profile &amp; Security"
          />
          <Text style={styles.label}>Wallet settings</Text>
          <Setting
            onPress={() => this.props.navigateToPage("WalletAddress")}
            label="Wallet address"
          />
          <Text style={styles.label}>App settings</Text>
          <Setting
            onPress={() => this.props.navigateToPage("Notifications")}
            label="Notifications"
          />
          <View style={styles.separator} />
          <View style={styles.row}>
            <Text style={styles.text}>Version</Text>
            <Text style={styles.version}>Beta</Text>
          </View>
          <View style={styles.separator} />
          <Setting
            onPress={() => this.props.navigateToPage("Terms")}
            label="Terms &amp; Conditions"
          />
        </ScrollView>
      </View>
    );
  }
}

export default connect(
  null,
  { resetPage, navigateToPage }
)(SettingsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    color: "white",
    fontSize: sizeFont(18),
    fontFamily: font.bold
  },
  label: {
    fontSize: sizeFont(13),
    color: "#6D6D72",
    paddingHorizontal: sizeWidth(12),
    paddingTop: sizeWidth(14),
    backgroundColor: "#EFEFF3",
    paddingBottom: sizeWidth(10)
  },
  row: {
    paddingHorizontal: sizeWidth(12),
    height: sizeWidth(44),
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontSize: sizeFont(15),
    flex: 1,
    fontFamily: font.regular
  },
  version: {
    fontSize: sizeFont(15),
    color: "#A0B1B7",
    marginLeft: sizeWidth(12),
    fontFamily: font.regular
  },
  separator: {
    backgroundColor: "#95989A",
    height: StyleSheet.hairlineWidth,
    marginHorizontal: sizeWidth(12)
  }
});
