import { StyleSheet, Text, View, Button, Image, FlatList, TouchableHighlight, SafeAreaView, Platform, Alert,Modal, Dimensions } from 'react-native';
import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import  Products  from './Products.js';

const window = Dimensions.get('window');
const { width, height } = window;
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* <Text style={styles.title}>Ridershop</Text> */}
        <Image source={require('./assets/logos/l4.jpeg')} style={{width: 80, height: 80}} />
      </View>
      <View>
        {<Products />}
        
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
    color:'#111111',
  },
  title: {
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
    padding:20,
  },
  header: {
    width: '100%',
    backgroundColor: '#061B23',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;