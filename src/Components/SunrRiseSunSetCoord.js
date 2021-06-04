import React from 'react';
import {StyleSheet, View} from 'react-native';
import Line from './Line';
import SunrRiseSunSet from './SunrRiseSunSet';
import Coords from './Coords';

const SunrRiseSunSetCoord = ({data}) => {
  return (
    <View>
      <SunrRiseSunSet data={data} />
      <Line />
      <Coords data={data} />
    </View>
  );
};

export default SunrRiseSunSetCoord;

const styles = StyleSheet.create({});
