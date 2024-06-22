import React from 'react'

import { StyleSheet, Text } from "react-native";

const Div = props => <Text style={[styles.defaultText, props.style]}>{props.children}</Text>;

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: "font-regular",
   
  },
});


export default Div
