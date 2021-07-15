import React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import HourCards from './HourCards';

const CarouselMeteo = ({hourData}) => {
  return (
    <View>
      <ScrollView
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
