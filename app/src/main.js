import React, { Component } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  NetInfo,
  BackHandler,
  SafeAreaView
} from "react-native";
import { AppNavigator } from "./navigators/app.navigator";
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import { connect } from "react-redux";

class Main extends Component {
  shouldCloseApp = () => {
    return this.props.nav.index === 0;
  };

  handleBackPress = () => {
    if (this.shouldCloseApp()) {
      return false;
    }
    this.props.dispatch(NavigationActions.back({}));
    return true;
  };

  componentDidMount = () => {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  };

  componentWillUnmount = () => {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#04508A"
          hidden={false}
          barStyle="light-content"
        />
        <SafeAreaView style={styles.body}>
          <AppNavigator
            navigation={addNavigationHelpers({
              dispatch: dispatch,
              state: nav
            })}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const statusBarHeight = Platform.OS === "ios" ? 20 : 0;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(31, 39, 43)"
  },
  statusBar: {
    height: statusBarHeight,
    backgroundColor: "rgb(31, 39, 43)"
  },
  body: {
    flex: 1,
    backgroundColor: "#04508A"
  }
});

export default connect(
  state => ({
    nav: state.nav
  }),
  null
)(Main);
