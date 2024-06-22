import React from 'react'

import { StyleSheet, View } from "react-native";

const SafeView = props => <View style={[styles.defaultText, props.style]}>{props.children}</View>;

const styles = StyleSheet.create({
  defaultText: {
    // padding: 20,
    paddingTop: 40,
    paddingBottom: 0,
    
  },
});


export default SafeView
