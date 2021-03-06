import React from "react";
import {
  View,
  StyleSheet  
} from "react-native";
import loadAnimation from '../assets/load.json';
import LottieView from 'lottie-react-native';

export function Load () {
    return (
        <View style={styles.container}>
            <LottieView 
                source={loadAnimation}
                autoPlay
                loop
                style={styles.animation}>

            </LottieView>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    animation: {
      backgroundColor: "transparent",
      justifyContent: "center",
      alignItems: "center",
    },
  });