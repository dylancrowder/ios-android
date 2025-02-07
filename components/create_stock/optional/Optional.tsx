import React, { useState } from "react";
import { View, Text, TextInput, Switch, StyleSheet } from "react-native";

const OptionalForm = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 8,
    marginTop: 5,
  },
  errorText: {
    color: "red",
    fontSize: 12,
  },
});

export default OptionalForm;
