import React from 'react';
import {StyleSheet, Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../Const/COLORS';

const InputDays = () => {
  return (
    <View>
      {/* <Pressable style={styles.container}>
        <Text style={styles.text}>7 day forecast</Text>
        <Icon name="chevron-right" color="#403D56" style={styles.icon} />
      </Pressable> */}
    </View>
  );
};

export default InputDays;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.secondary,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textDark,
  },
  icon: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
