import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

import userImg from '../assets/usuario.png'
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Header() {
    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@plantmanager:user');
            console.log('user',user)
            setUserName(user||'');
        }
        loadStorageUserName();
    },[]);

    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.greetings}>Olá,</Text>
                <Text style={styles.userName}>{userName}</Text>            
            </View>            
            <Image source={userImg} style={styles.image} />
        </View>

        
    )
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: getStatusBarHeight(),
      
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
    greetings: {
      fontSize: 32,
      color: colors.heading,
      fontFamily: fonts.text,
    },
  
    userName: {
      fontSize: 32,
      fontFamily: fonts.heading,
      color: colors.heading,
      lineHeight: 40,
    },
  });
