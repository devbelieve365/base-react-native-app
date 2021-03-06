import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { sizeFont, sizeHeight, sizeWidth } from "../../helpers/size.helper";
import Text from "./text";

export default class Toolbar extends Component {
  static propTypes = {
    left: PropTypes.object,
    center: PropTypes.object,
    right: PropTypes.object
  };

  render() {
    const { left, center, right } = this.props;
    return (
      <View>
        <View style={styles.statusBar} />
        <View style={styles.container}>
          <View style={styles.left}>{left}</View>
          <View style={styles.center}>{center}</View>
          <View style={styles.right}>{right}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#04508A"
  },
  container: {
    height: sizeHeight(52),
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#04508A",
    alignItems: "center"
  },
  left: {
    width: sizeWidth(50),
    justifyContent: "center",
    alignItems: "center"
  },
  right: {
    width: sizeWidth(50),
    justifyContent: "center",
    alignItems: "center"
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
