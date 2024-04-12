import { StyleSheet, Text, View, Alert, Button, ScrollView, ordered, Image, FlatList, TouchableOpacity, SafeAreaView,Modal } from 'react-native';
import React, { useState } from 'react';
import Products from './Products';

function ModalProds() {
    const [ordered, setOrdered] = useState(false);
    const [isDisplayed, setIsDisplayed] = useState(false);
    const[modal, setModal]=useState(false);
    return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Nos produits</Text>
                    {
                        ordered ? (<Text>Commande en cours</Text>) : (<Text style={styles.subTitle}>Vous devez passer commande</Text>)
                    }
                <View>
                    <Button onPress={() => setOrdered(true)} title="Passer ma commande" color="#3FA7D6"></Button>
                </View>

                        <View style={{ marginTop: 40, marginBottom: 50 }}>
                            {
                                isDisplayed && (<Products/>)
                            }

<TouchableOpacity
                    onPress={() => setIsDisplayed(prevState => !prevState)}
                    style={{ width: 'auto', backgroundColor: '#A7000C', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 3 }}
                    activeOpacity={0.5}
                >
                    <Text style={{ color: '#fff', textAlign: 'center' }}>
                        {isDisplayed ? 'Fermer' : 'Menu'}</Text>
                </TouchableOpacity>
                    </View>
                </SafeAreaView>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        textAlign: 'center',
        color: '#fff',
    },
        title: {
        color: '#111111',
        fontSize: 30,
        fontWeight: 'bold',
        padding: 20,
        textAlign: 'center',
    },
    subTitle: {
        color: '#FF9100',
        fontSize: 20,
        padding: 10,
        textAlign: 'center',
    },
        btn: {
        color: '#fff',
        textAlign: 'center',
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    modals:{
        backgroundColor: '#fff',
        padding: 17,
        elevation:40,
        shadowColor: '#006341',
        shadowOpcaity: .4,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 0},
    }
});

export default ModalProds;