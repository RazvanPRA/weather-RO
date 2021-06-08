import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import InfoAboutWheather from '../Components/InfoAboutWeatherWeek';
import Line from '../Components/Line';
import WeatherWeek from '../Components/WeatherWeek';
import {COLORS} from '../Const/COLORS';
import Day from '../Components/Day';

const SevenDayForcast = ({route}) => {
  const {hourData} = route.params;
  console.log({hourData});
  return (
    <ScrollView style={styles.scroll}>
      {hourData &&
        hourData.daily.map((item, index) => {
          return (
            <View key={index} style={styles.container}>
              {hourData && (
                <Day hourData={hourData} index={index} style={styles.day} />
              )}

              {hourData && <WeatherWeek index={index} hourData={hourData} />}

              {hourData && (
                <InfoAboutWheather
                  style={styles.space}
                  index={index}
                  hourData={hourData}
                />
              )}
              <Line />
            </View>
          );
        })}
    </ScrollView>
  );
};

export default SevenDayForcast;

const styles = StyleSheet.create({
  scroll: {
    paddingTop: 5,
    backgroundColor: COLORS.primary,
  },
  container: {
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: COLORS.primary,
  },
});
