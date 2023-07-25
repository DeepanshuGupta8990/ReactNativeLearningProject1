import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import App2 from './App2';

export default function App1(){
    return(
        <View>
           <Text style={styles.text}> This ggggis App1 </Text>
           <App2/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
        transform: [
            { translateX: 50 },
            { translateY: 20 },
            { scaleX: 1.5 },
            { scaleY: 0.8 },
            // { rotate: '45deg' },
          ],
      },
  });
  