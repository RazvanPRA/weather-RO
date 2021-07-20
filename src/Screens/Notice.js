import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from '../Const/COLORS';

const Notice = () => {
  const [isON, setIsON] = useState(false);
  const toggleSwitch = () => {
    setIsON((previousState) => !previousState);
    save(isON);
  };
  const save = async () => {
    try {
      const jsonValue = JSON.stringify(isON);
      await AsyncStorage.setItem('onOff', jsonValue);
    } catch (err) {
      console.log(err);
    }
  };

  const load = async () => {
    try {
      let jsonValue = await AsyncStorage.getItem('onOff');
      if (jsonValue !== null) {
        setIsON(JSON.parse(jsonValue));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    load;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>Notification Settings</Text>
      </View>
      <View style={styles.settings}>
        <Text style={styles.text}>Altceva</Text>
        <Switch onValueChange={toggleSwitch} value={isON} />
      </View>
    </View>
  );
};

export default Notice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  title: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settings: {
    flex: 3,
    alignItems: 'center',
  },
  text: {
    color: COLORS.textDark,
    fontSize: 26,
    fontWeight: 'bold',
  },
});
