import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
import {COLORS} from '../Const/COLORS';

const SunrRiseSunSet = ({data}) => {
  console.log({data});
  const {sys} = data;
  const sunrise = moment(sys.sunrise * 1000).format('hh:mm');
  const sunset = moment(sys.sunset * 1000).format('hh:mm');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sunrise: {sunrise && sunrise}am</Text>
      <Text style={styles.text}>Sunset: {sunset && sunset}pm</Text>
    </View>
  );
};

export default SunrRiseSunSet;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: COLORS.textDark,
  },
});
