import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity, SafeAreaView, Platform, Alert,Modal, Dimensions } from 'react-native';
import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import ModalProds from './ModalProds.js';
import Products from './Products.js';

const window = Dimensions.get('window');
const { width, height } = window;

function App() {
  const[modal, setModal]=useState(false);
  return (
    <SafeAreaView style={styles.container}
    // data={products} renderItem={(item)}
    >
      <Modal transparent={true} visible={modal} animationType="slide">
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,.5)'
          }}>
          <View style={{
            backgroundColor: '#fff',
            padding: 17,
            elevation:40,
            shadowColor: '#006341',
            shadowOpcaity: .4,
            shadowRadius: 5,
            shadowOffset: {width: 0, height: 0}
            }}>
            <TouchableOpacity onPress={()=>setModal(false)}>
              <Text style={{
                textAlignVertical: 'center',
                textAlign: 'center', 
                borderStyle: 'solid',
                borderWidth: 2,
                borderColor: '#006341',
                fontSize: 15,
                width: 30,
                height: 30,
                color: '#006341',
                marginBottom:8}}>X
              </Text>
            </TouchableOpacity>
              <Text>test</Text>
          </View>
        </View>
      </Modal>
      <View style={styles.header}>
        <Image source={require('./assets/logos/l4.jpeg')} style={{width: 80, height: 80}} />
      </View>

      <View style={styles.main}>
        {<ModalProds/>}
        <TouchableOpacity
          onPress={()=>setModal(true)}
          style={{ width: '40%', backgroundColor: '#A7000C', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 3 }}
          activeOpacity={0.8}
          >
          <Text style={{color:'white'}}>ouvrir le menu</Text>
        </TouchableOpacity>
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    color:'#111111',
  },
  header: {
    width: '100%',
    backgroundColor: '#061B23',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    // width: '100%',
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;