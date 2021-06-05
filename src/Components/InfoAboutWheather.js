import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../Const/COLORS';

const InfoAboutWheather = ({data}) => {
  const {main} = data;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <Text style={styles.textLeft}>Feels Like:</Text>
        <Text style={styles.textLeft}>
          Min: {(main.temp_min - 273.15).toFixed(1)}°C
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.textTemp}>
          {(main.feels_like - 273.15).toFixed(1)}°C
        </Text>
        <Text style={styles.text}>
          Max: {(main.temp_max - 273.15).toFixed(1)}°C
        </Text>
      </View>
    </View>
  );
};

export default InfoAboutWheather;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    marginHorizontal: 30,
  },
  text: {
    fontWeight: 'bold',
    color: COLORS.textDark,
    fontSize: 24,
  },
  textLeft: {
    fontWeight: 'bold',
    marginTop: 9,

    color: COLORS.textDark,
    fontSize: 24,
  },
  textTemp: {
    fontWeight: 'bold',

    color: COLORS.textDark,
    fontSize: 36,
  },
});
