import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {COLORS} from '../Const/COLORS';

const TheWeatherToday = () => {
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <Text style={styles.firstText}>Clear sky</Text>
        <Text style={styles.secondText}>56°C</Text>
      </View>
      <Image source={require('../../Img/02d2x.png')} style={styles.container} />
    </View>
  );
};

export default TheWeatherToday;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    paddingTop: 9,
    paddingLeft: 20,
  },
  firstText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.textDark,
    paddingBottom: 4,
  },
  secondText: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
});
