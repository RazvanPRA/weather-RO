import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const HeaderH = () => {
  const [location, setLocation] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          setLocation(text);
        }}
        placeholder="Your City"
      />
    </View>
  );
};

export default HeaderH;

const styles = StyleSheet.create({});
