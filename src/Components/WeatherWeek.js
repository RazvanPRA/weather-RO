import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {COLORS} from '../Const/COLORS';

const TheWeatherToday = ({hourData, index}) => {
  const {daily} = hourData;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <Text style={styles.firstText}>
          {daily[index].weather[0].description.charAt(0).toUpperCase() +
            daily[index].weather[0].description.slice(1)}
        </Text>
        <Text style={styles.secondText}>
          {(daily[index].temp.day - 273.15).toFixed(1)} °C
        </Text>
      </View>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${daily[index].weather[0].icon}@2x.png`,
        }}
        style={styles.container}
      />
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
    flex: 1,
    resizeMode: 'contain',
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
