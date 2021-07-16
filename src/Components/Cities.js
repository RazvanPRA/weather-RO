import React from 'react';
import {StyleSheet, Text, ScrollView, Pressable} from 'react-native';
import {COLORS} from '../Const/COLORS';

const Cities = ({favoriteCities}) => {
  return (
    <ScrollView // Sau poti folosi Flatlist
      showsVerticalScrollIndicator={false}
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      style={styles.scroll}>
      <Pressable onPress={() => {}} style={styles.arrayCities}>
        {!!favoriteCities &&
          favoriteCities.map((item) => {
            return (
              <Text style={styles.cities} key={item}>
                {item}
              </Text>
            );
          })}
      </Pressable>
    </ScrollView>
  );
};

export default Cities;

const styles = StyleSheet.create({
  arrayCities: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  cities: {
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textDark,
    borderRadius: 18,
    marginHorizontal: 4.5,
  },
});
