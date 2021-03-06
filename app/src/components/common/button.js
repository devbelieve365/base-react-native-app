import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Text from "./text";
import { sizeFont, sizeWidth } from "../../helpers/size.helper";
import PropTypes from "prop-types";
import { font } from "../../constants/app.constant";

export default class Button extends Component {
  render() {
    const {
      disabled,
      text,
      style,
      textStyle,
      onPress,
      rightIcon,
      loading
    } = this.props;

    return (
      <TouchableOpacity
        disabled={disabled}
        style={[styles.container, style]}
        onPress={onPress}
      >
        {loading && this.renderLoading()}
        <Text numberOfLines={1} style={[styles.text, textStyle]}>
          {text}
        </Text>
        {rightIcon}
      </TouchableOpacity>
    );
  }

  renderLoading = () => {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="small" color="white" />
      </View>
    );
  };
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  textStyle: PropTypes.any,
  loading: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    height: sizeWidth(34),
    paddingHorizontal: sizeWidth(16),
    backgroundColor: "#469AD4",
    borderRadius: sizeWidth(6),
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  loading: {
    alignSelf: "center",
    position: "absolute",
    left: sizeWidth(12)
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: sizeFont(16),
    fontFamily: font.bold
  }
});
