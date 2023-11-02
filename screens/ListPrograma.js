import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import appFirebase from '../credenciales'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'; // Cambio aquí: setDoct a setDoc
import { ListAu } from "react-native-paper";

const db = getFirestore(appFirebase)

export default function ListPrograma(props) {
    const [programas, setProgramas] = useState([])

    useEffect(() => {
        const getPrograma = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'programa'))
                const docs = []
                querySnapshot.forEach((doc) => {
                    const {infPrograma,faculta, jefePro, } = doc.data()
                    docs.push({
                        id: doc.id,
                        infPrograma,
                        faculta,
                        jefePro,
                        
                    })
                })
                setProgramas(docs);
            } catch (error) {
                console.log(error);
            }
        }
        getPrograma()
    }, [programas])

    return (
        <ScrollView>
            <TouchableOpacity style={styles.Boton} onPress={() => props.navigation.navigate('CreatePro')}>
                <Text style={styles.TextoBoton}> Agregar Programa</Text>
            </TouchableOpacity>

            <View>
                <Text style={styles.TextoTitulo}> Lista de Programa</Text>
            </View>

            <View>
                {programas.map((listPro) => (
                    <TouchableOpacity key={listPro.id} style={styles.BotonLista} onPress={() => props.navigation.navigate('ShowPro', { programaId: listPro.id })}>
                        <Text style={styles.TextoNombre}> {listPro.infPrograma}</Text>
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
