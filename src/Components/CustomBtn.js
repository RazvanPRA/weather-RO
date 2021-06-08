import React from 'react';
import {StyleSheet, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const CustomBtn = () => {
  const {goBack} = useNavigation();
  return (
    <Pressable style={styles.sizeImg} onPress={goBack}>
      <Icon name="chevron-left" size={30} color="#403D56" style={styles.icon} />
    </Pressable>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  sizeImg: {
    marginLeft: 15,
  },
});
