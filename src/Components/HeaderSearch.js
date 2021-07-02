import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../Const/COLORS';
import Countries from '../Const/Countries';

const HeaderSearch = ({setLocation, location, setLoading, save}) => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const searchResult = Countries.filter((item) => {
    const formatedCity = item
      .replace(/[â]/g, 'a')
      .replace(/[șȘ]/g, 's')
      .replace(/[ă]/g, 'a')
      .replace(/[Î]/g, 'i')
      .replace(/[Țț]/g, 't')
      .replace(/[_-]/g, ' ')
      .toLowerCase();
    const formatedLocation = location
      .replace(/[â]/g, 'a')
      .replace(/[șȘ]/g, 's')
      .replace(/[ă]/g, 'a')
      .replace(/[Î]/g, 'i')
      .replace(/[Țț]/g, 't')
      .replace(/[_-]/g, ' ')
      .toLowerCase();

    return formatedCity.indexOf(formatedLocation) >= 0;
  });
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardOpen(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardOpen(false);
    });
    return () => {
      // Keyboard.removeAllListeners();
    };
  }, []);

  return (
    <View style={[styles.container, !keyboardOpen && styles.inactiveContainer]}>
      <View style={styles.content}>
        <TextInput
          selectTextOnFocus
          value={location}
          style={styles.input}
          onChangeText={(text) => {
            setLocation(text);
          }}
          placeholder="CITY"
        />
        <Icon name="search" color="#403D56" style={styles.icon} />
      </View>
      {keyboardOpen && (
        <View>
          {searchResult.map((item, index) => {
            if (index < 4) {
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    setLocation(item);
                    Keyboard.dismiss();
                    setLoading(true);
                    save(item);
                  }}>
                  <Text style={styles.text}>{item}</Text>
                </Pressable>
              );
            } else {
              return null;
            }
          })}
        </View>
      )}
    </View>
  );
};

export default HeaderSearch;

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderRadius: 30,
    borderColor: COLORS.textDark,
    height: 180,
  },
  inactiveContainer: {
    height: 55,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
  },
  icon: {
    fontSize: 25,
  },
  input: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 15,
    paddingVertical: 5,
    flex: 1,
    color: COLORS.textDark,
  },
  text: {
    marginLeft: 15,
    fontSize: 24,
    height: 30,
  },
});
