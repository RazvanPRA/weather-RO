import React from 'react';
import {View, Dimensions, FlatList} from 'react-native';
import HourCards from './HourCards';

const CarouselMeteo = ({hourData}) => {
  console.log({hourData});

  return (
    <View>
      <FlatList
        data={hourData.hourly}
        initialNumToRender={10}
        horizontal
        decelerationRate="fast"
        snapToInterval={Dimensions.get('screen').width / 4.5}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <HourCards item={item} />}
      />
    </View>
  );
};

export default CarouselMeteo;
