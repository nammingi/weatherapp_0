import React from 'react';
import {View} from 'react-native';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

export default function Error({condition}) {
  return (
    <View>
      <Text> Error has occured. </Text>
      <Text> condition message : {condition} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
