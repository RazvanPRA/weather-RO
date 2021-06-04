import React from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import HourCards from './HourCards';

const CarouselMeteo = ({hourData}) => {
  console.log(hourData);
  return (
    <View>
      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainerStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={Dimensions.get('screen').width / 4.5}
        decelerationRate="fast">
        {hourData &&
          hourData.hourly.map((item, index) => {
            return <HourCards item={item} key={index} />;
          })}
      </ScrollView>
    </View>
  );
};

export default CarouselMeteo;

const styles = StyleSheet.create({
  content: {},
  contentContainerStyle: {},
  hourCard: {
    padding: 0,
    borderWidth: 1,
    height: 100,
    width: 110,
  },
});
