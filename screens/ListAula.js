import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import appFirebase from '../credenciales'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'; // Cambio aquí: setDoct a setDoc
import { ListAu } from "react-native-paper";

const db = getFirestore(appFirebase)

export default function ListAula(props) {
    const [listau, setListau] = useState([])

    useEffect(() => {
        const getListau = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'aula'))
                const docs = []
                querySnapshot.forEach((doc) => {
                    const { Numero } = doc.data()
                    docs.push({
                        id: doc.id,
                        Numero,
                        
                    })
                })
                setListau(docs);
            } catch (error) {
                console.log(error);
            }
        }
        getListau()
    }, [listau])

    return (
        <ScrollView>
            <TouchableOpacity style={styles.Boton} onPress={() => props.navigation.navigate('CreateAu')}>
                <Text style={styles.TextoBoton}> Agregar Aula</Text>
            </TouchableOpacity>

            <View>
                <Text style={styles.TextoTitulo}> Lista de Aula</Text>
            </View>

            <View>
                {listau.map((listA) => (
                    <TouchableOpacity key={listA.id} style={styles.BotonLista} onPress={() => props.navigation.navigate('ShowAu', { aulaId: listA.id })}>
                        <Text style={styles.TextoNombre}> {listA.Numero}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    Boton: {
        flex: 1,
        backgroundColor: "#54B8CA",
        height: 35,
        bordercolor: 'black',
        borderWidth: 1,
    },
    TextoBoton: {
        fontSize: 18,
        textAlign: 'center'
    },
    TextoTitulo: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
        fontSize: 15,
    },
    TextoNombre: {
        fontSize: 16,
    },
    BotonLista: {
        backgroundColor: "#DDDDDD",
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginBottom: 3,
        padding: 5,
    }
});
