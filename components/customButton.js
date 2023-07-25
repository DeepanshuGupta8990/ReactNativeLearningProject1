// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const CustomBtn = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [scaleValue, setScaleValue] = useState(1);

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   const onButtonPressIn = () => {
//     setScaleValue(0.9); // Scale down to 0.9 when the button is pressed
//   };

//   const onButtonPressOut = () => {
//     setScaleValue(1); // Return to the default size when the button is released
//   };

//   const textColor = isDarkMode ? '#ffffff' : '#000000';
//   const backgroundColor = isDarkMode ? '#000000' : '#ffffff';

//   return (
//     <View style={[styles.container, { backgroundColor }]}>
//     <Text style={[styles.text, { color: textColor, transform: [{ scale: scaleValue }] }]}>
//       Hello, Theme Toggle!
//     </Text>
//     <TouchableOpacity
//       onPress={toggleTheme}
//       onPressIn={onButtonPressIn}
//       onPressOut={onButtonPressOut}
//       style={styles.button}
//     >
//       <Text style={styles.buttonText}>Toggle Theme</Text>
//     </TouchableOpacity>
//   </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   button: {
//     marginTop: 10,
//     padding: 10,
//     backgroundColor: '#3498db',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default CustomBtn;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const CustomBtn = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scaleValue, setScaleValue] = useState(new Animated.Value(1));

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const onButtonPressIn = () => {
    // Animate the scaling down to 0.9
    Animated.timing(scaleValue, {
      toValue: 0.9,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const onButtonPressOut = () => {
    // Animate the scaling back to 1
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  const textColor = isDarkMode ? '#ffffff' : '#000000';
  const backgroundColor = isDarkMode ? '#000000' : '#ffffff';

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, {transform: [{ scale: scaleValue }] }]}>
        Hello, Theme Toggle!
      </Animated.Text>
      <TouchableOpacity
        onPress={toggleTheme}
        onPressIn={onButtonPressIn}
        onPressOut={onButtonPressOut}
        style={[styles.button,{transform: [{ scale: scaleValue }]}]}
      >
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </TouchableOpacity>
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

export default CustomBtn;
