import { StyleSheet, Text, View, Alert, Button, ScrollView, ordered, Image, FlatList, TouchableOpacity, Modal,} from 'react-native';
import React, { useState } from 'react';
import {Products} from './Products.js';

const [isDisplayed, setIsDisplayed] = useState(false);
    const [modal, setModal] = useState(false);
    // Alert.alert('bienvenue');
    // let menu=products.map(product=>
    //     (
    //         <View key={Math.random()}>
    //             <Text style={styles.card}>{product.name}</Text>
    //         </View>
    //     ))

    function ModalProds() {
    return (
            <View style={styles.container}>
                <Image source={require('./assets/logos/l1.jpeg')} style={{ width: 80, height: 80 }} />
                <Text style={styles.title}>Nos produits</Text>
                {
                    ordered ? (<Text>Commande en cours</Text>) : (<Text>Vous devez passer commande</Text>)
                }
                <View>
                    <Button onPress={()=>setOrdered(true)} title="Passer ma commande" color="#006341" style={styles.boutbout}></Button>
                </View>
                <View>
                    {<Products/>}
                </View>
                <View style={{marginTop:40, marginBottom:150}}>
                    {
                        isDisplayed ? (<Text>Que souhaitez vous boire?</Text>):(<Text>Commencez par ouvrir le menu !</Text>)
                    }
                    <Button onPress={()=>setIsDisplayed(prevState=>!prevState)} title={isDisplayed ? "fermer le menu" : "ouvrir le menu"} color='#006341'></Button>
                    {isDisplayed && 
                    <FlatList data={products} renderItem={(item)=>
                        <View key={Math.random()}>
                            <TouchableOpacity
                        onPress={()=>console.log(item.item.props)}>
                            <View style={styles.card}>
                                <Text style={styles.cardTitle}>{item.item.name}</Text>
                                {/* <Text style={styles.cardTitle}>{products.name}</Text> */}
                            </View>
                    </TouchableOpacity>
                        </View>}
                        style={{width:'100%'}}
                        keyExtractor={item=>Math.random()}
                    />}
                    {/* <TouchableOpacity
                    onPress={()=>console.log('pressé')}
                    style={{width:'40%',backgroundColor:'#006341', paddingHorizontal:15,paddingVertical:5}}>
                        <Text style={{color:'#fff'}}>Pressé</Text>
                    </TouchableOpacity> */}
                    
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        padding: 20,
        // borderBottomWidth: 1,
        // borderColor: '#A7000C',
        // color: '#111111',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        color: '#111111',
        marginBottom: 150,
    },
    cardTitle: {
        width: '100%',
        backgroundColor: '#006341',
        paddingHorizontal: 15,
        paddingVertical: 5,
        color: '#fff',
        textAlign: 'center',
    },

});

export default ModalProds;