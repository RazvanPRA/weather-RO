import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {COLORS} from '../Const/COLORS';
import moment from 'moment';

const HourCards = ({item}) => {
  const {temp, weather, dt} = item;
  const weatherIcon = weather[0].icon;
  const formatedTime = moment(dt * 1000).format('HH:mm');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{(temp - 273.15).toFixed(1)}°C</Text>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`,
        }}
        style={styles.img}
      />
      <Text style={styles.text}>{formatedTime}</Text>
    </View>
  );
};

export default HourCards;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: Dimensions.get('screen').width / 4.5,
  },
  text: {
    margin: 3,
    color: COLORS.textDark,
    fontSize: 18,
    fontWeight: 'bold',
  },
  img: {
    width: '100%',
    aspectRatio: 1.9,
  },
});
