import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import propTypes from 'prop-types';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
  Haze: {
    iconName: 'weather-hail',
    gradient: ['#aa4b6b', '#3b8d99'],
    title: 'Haze',
    subtitle: 'I wanna stay at home.',
  },
  Rain: {
    iconName: 'weather-rainy',
    gradient: ['#00C6FB', '#005BEA'],
    title: 'Rain',
    subtitle: 'Should stay inside or take umbrella',
  },
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#373B44', '#4286f4'],
    title: 'Thunderstorm',
    subtitle: 'DO STAY HOME',
  },
  Drizzle: {
    iconName: 'weather-hail',
    gradient: ['#89F7FE', '#66A6FF'],
    title: 'Drizzle',
    subtitle: "Let's watch NETFLIX",
  },
  Snow: {
    iconName: 'weather-snowy',
    gradient: ['#7DE2FC', '#B9B6E5'],
    title: 'Snow',
    subtitle: 'GO OUT BUILD A SNOWMAN',
  },
  Atmosphere: {
    iconName: 'weather-hail',
    gradient: ['#89F7FE', '#66A6FF'],
    title: 'Atmosphere',
    subtitle: 'Breath free',
  },
  Clear: {
    iconName: 'weather-clear',
    gradient: ['#2980B9', '#6DD5FA'],
    title: 'Clear',
    subtitle: 'Go and take picture with whom love',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#D7D2CC', '#304352'],
    title: 'Clouds',
    subtitle: 'It is so gloomy, right?',
  },
  Mist: {
    iconName: 'weather-hail',
    gradient: ['#4DA0B0', '#D39D38'],
    title: 'Haze',
    subtitle: 'Watch your back..!',
  },
};

export default function Weather({temp, condition}) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle='light-content' />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color='white'
        />
        <Text style={styles.temp}>{temp}ºC</Text>
      </View>
      <View style={({...styles.halfContainer}, {...styles.textContainer})}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          Now, {weatherOptions[condition].subtitle}
        </Text>
        <Text>
          for Debug> weatherOptions[condition].iconName :
          {weatherOptions[condition].iconName}
        </Text>
        <Text>condition: {condition}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  condition: propTypes.oneOf([
    'Thunderstorm',
    'Rain',
    'Drizzle',
    'Snow',
    'Atmosphere',
    'Clear',
    'Clouds',
    'Haze',
    'Mist',
    'Smoke',
    'Dust',
  ]),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 32,
    color: 'white',
    fontWeight: '500',
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    marginBottom: 30,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
});
