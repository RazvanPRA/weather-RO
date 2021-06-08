import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
import {COLORS} from '../Const/COLORS';

const Day = ({hourData, index}) => {
  const {daily} = hourData;
  const Day = moment(daily[index].dt * 1000).format('dddd D.MMMM');
  return (
    <View>
      <Text style={styles.text}>{Day}</Text>
    </View>
  );
};

export default Day;

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: COLORS.textDark,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
