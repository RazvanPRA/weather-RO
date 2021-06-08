import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import InfoAboutWheather from '../Components/InfoAboutWeatherWeek';
import Line from '../Components/Line';
import WeatherWeek from '../Components/WeatherWeek';
import {COLORS} from '../Const/COLORS';
import CarouselMeteo from '../Components/CarouselMeteo';
import Day from '../Components/Day';

const SevenDayForcast = ({route}) => {
  const {hourData} = route.params;
  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.container}>
          {hourData && <Day hourData={hourData} style={styles.day} />}
          <Line />
          {hourData && <WeatherWeek hourData={hourData} />}
          <Line />
          {hourData && <InfoAboutWheather hourData={hourData} />}
          <Line />
        </View>
        {hourData && <CarouselMeteo hourData={hourData} />}
      </View>
    </ScrollView>
  );
};

export default SevenDayForcast;

const styles = StyleSheet.create({
  body: {flex: 1, backgroundColor: COLORS.primary},
  container: {
    marginHorizontal: 24,
  },
});
