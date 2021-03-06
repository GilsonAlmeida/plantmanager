import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost'

export default function App() {

//deletando notifications
//  useEffect(()=> {  
//   async function notifications(){
//     await Notifications.cancelAllScheduledNotificationsAsync();
//     console.log('deletando......')
//   }
//   notifications()

//  },[]) ;


const [fontsLoaded] = useFonts({
  Jost_400Regular,
  Jost_600SemiBold
})

if(!fontsLoaded)
  return <AppLoading/>
  
  return (
   <Routes/>
  )
}

