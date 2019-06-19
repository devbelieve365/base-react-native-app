import React, { Component, ReactNode } from "react";
import { View, StyleSheet, Image } from "react-native";
import { resetPage } from "../../actions/nav.action";
import { connect } from "react-redux";
import { sizeWidth, sizeHeight } from "../../helpers/size.helper";
class SplashScreen extends Component {
  render(): ReactNode {
    return (
      <View style={styles.container}>
        <Image resizeMode="stretch" style={styles.image} />
      </View>
    );
  }

  componentDidMount = async () => {
    setTimeout(() => {
      this.props.resetPage("Login");
    }, 1000);
  };
}

export default connect(
  null,
  { resetPage }
)(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: sizeWidth(320),
    height: sizeHeight(568)
  }
});
