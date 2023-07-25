// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import App1 from './App1';

// export default function App() {
//   return (
//    <SafeAreaView style={styles.container}>
//     <View>
//       <Text>
//         Hello world
//       </Text>
//       <App1/>
//     </View>
//    </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });




import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TouchableWithoutFeedbackComponent from './TouchableWithoutFeedback';
import CustomBtn from './components/customButton';

const MyComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const textColor = isDarkMode ? '#ffffff' : '#000000';
  const backgroundColor = isDarkMode ? '#000000' : '#ffffff';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.text, { color: textColor }]}>Hello, Theme Toggle!</Text>
      <TouchableOpacity onPress={toggleTheme} style={styles.button}>
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>
        Button
        </Text>
        </TouchableOpacity>
        <TouchableWithoutFeedbackComponent/>
        <CustomBtn/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyComponent;
