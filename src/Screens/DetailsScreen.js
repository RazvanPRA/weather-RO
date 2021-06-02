import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={styles.body}>
      <Text>Details Screen</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  body: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
