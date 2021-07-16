import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import HeaderSearch from '../Components/HeaderSearch';
import TheWheatherToday from '../Components/TheWeatherToday ';
import InfoAboutWheather from '../Components/InfoAboutWheather';
import Line from '../Components/Line';
import CarouselMeteo from '../Components/CarouselMeteo';
import InputDays from '../Components/InputDays';
import SunrRiseSunSetCoord from '../Components/SunrRiseSunSetCoord';
import {COLORS} from '../Const/COLORS';
import Countries from '../Const/Countries';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Entypo';
import {ScrollView} from 'react-native-gesture-handler';
import Cities from '../Components/Cities';

const HomeScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
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
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=455d3a7930642294795fe0299dcfbcc5`,
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

  const saveCity = async (item) => {
    try {
      await AsyncStorage.setItem('location', item);
    } catch (err) {
      console.log(err);
    }
  };

  const loadCity = async () => {
    try {
      let location = await AsyncStorage.getItem('location');

      if (location !== null) {
        setLocation(location);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadCity();
  }, []);

  const [favoriteCities, setFavoriteCities] = useState([]);

  const saveFavoriteCities = async (favoriteCities) => {
    try {
      const jsonValue = JSON.stringify(favoriteCities);
      await AsyncStorage.setItem('cities', jsonValue);
    } catch (err) {
      console.log(err);
    }
  };

  const loadFavoriteCities = async () => {
    try {
      let jsonValue = await AsyncStorage.getItem('cities');

      if (jsonValue !== null) {
        setFavoriteCities(JSON.parse(jsonValue));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadFavoriteCities();
  }, []);

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <HeaderSearch
          saveCity={saveCity}
          location={location}
          setLocation={setLocation}
          setLoading={setLoading}
        />
        <View style={styles.head}>
          <Text style={styles.text}>Today</Text>
          {favoriteCities && favoriteCities.indexOf(location) === -1 ? (
            <Pressable
              onPress={() => {
                setFavoriteCities([...favoriteCities, location]);
                saveFavoriteCities([...favoriteCities, location]);
              }}
              style={styles.iconContent}>
              <Icon name="heart-outlined" color="#666666" style={styles.icon} />
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                const newFavoriteCities = [...favoriteCities];
                newFavoriteCities.splice(favoriteCities.indexOf(location), 1);
                setFavoriteCities(newFavoriteCities);
                saveFavoriteCities(newFavoriteCities);
              }}
              style={styles.iconContent}>
              <Icon name="heart" color="#ffffff" style={styles.icon} />
            </Pressable>
          )}
        </View>
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
        {hourData && (
          <InputDays data={data} hourData={hourData} navigation={navigation} />
        )}
      </View>
      <Cities setLocation={setLocation} favoriteCities={favoriteCities} />
      <View style={styles.container2}>
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
    flex: 1,
    textAlign: 'center',
  },
  icon: {
    textAlign: 'center',
    fontSize: 31,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconContent: {
    justifyContent: 'center',
  },
  scroll: {
    paddingTop: 5,
    backgroundColor: COLORS.primary,
  },
});
