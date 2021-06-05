import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import HeaderSearch from '../Components/HeaderSearch';
import TheWheatherToday from '../Components/TheWeatherToday ';
import InfoAboutWheather from '../Components/InfoAboutWheather';
// import moment from 'moment';
import Line from '../Components/Line';
import CarouselMeteo from '../Components/CarouselMeteo';
import InputDays from '../Components/InputDays';
import SunrRiseSunSetCoord from '../Components/SunrRiseSunSetCoord';
import {COLORS} from '../Const/COLORS';
import Countries from '../Const/Countries';

const HomeScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  // const today = moment().format('MMMM/DD/yyyy');
  const [hourData, setHourData] = useState(null);
  const [location, setLocation] = useState('Brașov');

  useEffect(() => {
    if (data && data.coord.lon && data.coord.lat) {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=455d3a7930642294795fe0299dcfbcc5`,
      )
        .then((response) => response.json())
        .then((json) => setHourData(json))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [data]);

  useEffect(() => {
    if (Countries.includes(location)) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=455d3a7930642294795fe0299dcfbcc5`,
      )
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [location]);
  // if (isLoading) {
  //   return (
  //     <View style={styles.loudingContainer}>
  //       <ActivityIndicator color={COLORS.textDark} size="large" />
  //     </View>
  //   );
  // }

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <HeaderSearch
          location={location}
          setLocation={setLocation}
          setLoading={setLoading}
        />
        <Text style={styles.text}>Today</Text>
        {data && (
          <View>
            <Line />
            {data && <TheWheatherToday data={data} />}
            <Line />
            {data && <InfoAboutWheather data={data} />}
            <Line />
          </View>
        )}
      </View>
      {hourData && <CarouselMeteo hourData={hourData} />}
      <View style={styles.container2}>
        <InputDays />
        {data && <SunrRiseSunSetCoord style={styles.sun} data={data} />}
      </View>
    </View>
  );
  return null;
};

export default HomeScreen;

const styles = StyleSheet.create({
  loudingContainer: {
    flex: 1,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingTop: 27,
    marginHorizontal: 0,
    paddingBottom: 20,
  },
  container: {
    marginHorizontal: 24,
  },
  container2: {
    flex: 1,
    marginHorizontal: 24,
    justifyContent: 'space-between',
  },
  text: {
    color: COLORS.textDark,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 9,
    textAlign: 'center',
  },
  sun: {
    // alignSelf: ,
  },
});
