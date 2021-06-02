import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderH from '../Components/HeaderH';
import {COLORS} from './../Const/COLORS';

const HomeScreen = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=Brasov&appid=455d3a7930642294795fe0299dcfbcc5',
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.body}>
      <HeaderH></HeaderH>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingTop: 27,
    paddingLeft: 27,
  },
  text: {
    color: COLORS.textDark,
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
