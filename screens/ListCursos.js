import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import appFirebase from '../credenciales'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'; // Cambio aquí: setDoct a setDoc
import { ListC } from "react-native-paper";

const db = getFirestore(appFirebase)

export default function ListCursos(props) {
    const [listaC, setListaC] = useState([])

    useEffect(() => {
        const getListaC = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'cursos'))
                const docs = []
                querySnapshot.forEach((doc) => {
                    const { NumeroC, descripcion, ciclo, grupo } = doc.data()
                    docs.push({
                        id: doc.id,
                        NumeroC,
                        descripcion,
                        ciclo,
                        grupo,
                    })
                })
                setListaC(docs);
            } catch (error) {
                console.log(error);
            }
        }
        getListaC()
    }, [listaC])

    return (
        <ScrollView>
            <TouchableOpacity style={styles.Boton} onPress={() => props.navigation.navigate('CreateC')}>
                <Text style={styles.TextoBoton}> Agregar Cursos</Text>
            </TouchableOpacity>

            <View>
                <Text style={styles.TextoTitulo}> Lista de Cursos</Text>
            </View>

            <View>
                {listaC.map((listC) => (
                    <TouchableOpacity key={listC.id} style={styles.BotonLista} onPress={() => props.navigation.navigate('ShowC', { cursosId: listC.id })}>
                        <Text style={styles.TextoNombre}> {listC.NumeroC}</Text>
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
