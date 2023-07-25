import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const TouchableWithoutFeedbackComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scaleValue, setScaleValue] = useState(1);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const onButtonPress = () => {
    // Update the scale value when the button is pressed
    setScaleValue((prevScale) => (prevScale === 1 ? 1.5 : 1));
  };

  const textColor = isDarkMode ? '#ffffff' : '#000000';
  const backgroundColor = isDarkMode ? '#000000' : '#ffffff';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor, transform: [{ scale: scaleValue }] }]}>
        Hello, Theme Toggle!
      </Text>
      <TouchableWithoutFeedback onPress={toggleTheme}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Toggle Theme</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={onButtonPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Scale Text</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TouchableWithoutFeedbackComponent;
