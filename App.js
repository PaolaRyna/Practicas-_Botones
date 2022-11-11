import 'react-native-gesture-handler';
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Tab1Screen } from './src/screens/Tab1Screen';
import { View,Text, StyleSheet, Pressable, Modal, FlatList, Alert } from 'react-native'


export const App = () => {

  return (

    <SafeAreaProvider>
            <Tab1Screen />
    </SafeAreaProvider>


  )

}

export default App;