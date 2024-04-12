import { StyleSheet, Text, View, Alert, Button, ScrollView, ordered, Image, FlatList, TouchableOpacity,TouchableHighlight, Modal, } from 'react-native';
import React, { useState } from 'react';

function Products() {
    const [products, setProducts] = useState([
        {
            name: 'Casque', props: [
                'Arai',
                'Bell',
                'Dexter',
                'Hjc',
                'Ls2',
                'Nexx',
                'Scorpion exo',
                'Shark',
                'Shoei',
                'Agv',
                'Airoh',
                'All One'
            ]
        },
        {
            name: 'Gants', props: [
                'All One',
                'Alpinstars',
                'Alpinestars x Diesel',
                'Bering',
                'Dainese',
                'Dakar',
                'DMP',
                'Five',
                'Furygan',
                'Harisson',
                'Helstons',
                'Icon',
                'Ixon',
                'Klim',
                'Macna',
                'Rev\'it',
                'Route 66 by All One',
                'Segura'
            ]
        },
        {
            name: 'Pantalon Cuir', props: [
                'Alpinestars',
                'Bering',
                'Dainese',
                'DMP',
                'Furygan',
                'Ixon',
                'Rev\'it',
                'Segura'
            ]
        },
        {
            name: 'Bottes', props: [
                'Acerbis',
                'All One',
                'Alpinestars',
                'Bering',
                'Dainese',
                'Falco',
                'Forma',
                'Furygan',
                'Helstons',
                'Icon',
                'Ixon',
                'Klim',
                'Rev\'it',
                'Shot',
                'Stylmartin',
                'TCX']
        },
        {
            name: 'Basket', props: [
                'All One',
                'Alpinstars',
                'Bering',
                'Dainese',
                'DMP',
                'Falco',
                'Forma',
                'Furygan',
                'Harisson',
                'Helstons',
                'Icon',
                'Ixon',
                'Momo Design',
                'Rev\'it',
                'Segura',
                'Stylmartin',
                'TCX'
            ]
        },
        {
            name: 'Blouson Cuir', props: [
                'All One',
                'Alpinstars',
                'Bering',
                'Dainese',
                'DMP',
                'Furygan',
                'Helstons',
                'Icon',
                'Ixon',
                'Macna',
                'Rev\'it',
                'Segura'
            ]
        },
        {
            name: 'Combinaison', props: [
                'Alpinstars',
                'Bering',
                'Dainese',
                'Furygan',
                'Helstones',
                'Ixon',
                'Macna',
                'Rev\'it',
                'Segura'
            ]
        },
    ]);

    const [isDisplayed, setIsDisplayed] = useState(false);
    const [modal, setModal] = useState(false);
    
    return (
        <FlatList data={products} renderItem={(item) =>
            <TouchableHighlight
                onPress={() => {
                    Alert.alert('Votre commande', 'Vous avez commandé un ' + item.item.name,);
                }}
                activeOpacity={0.8}
                underlayColor="rgba(255, 145, 0, 0.3)"
            >
                <View key={Math.random()} style={styles.bgNavModal}>
                    <Text style={styles.products}>{item.item.name}</Text>
                </View>
            </TouchableHighlight>}
            style={{ width: '100%'}}
            keyExtractor={item => Math.random()}
        />
    );
}

const styles = StyleSheet.create({
    products: {
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#3FA7D6',
        flex: 1,
        margin: 10,
        padding: 10,
    },

    bgNavModal:{
        backgroundColor:'#412722',
        width:'100%',
        padding:5,
        flex:1,
        justifyContent:'center',
    }

});

export default Products;