import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../Const/COLORS';

const Coords = ({data}) => {
  console.log({data});
  const {coord} = data;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lat: {coord.lat}</Text>
      <Text style={styles.text}>Lon: {coord.lon}</Text>
    </View>
  );
};

export default Coords;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
});
