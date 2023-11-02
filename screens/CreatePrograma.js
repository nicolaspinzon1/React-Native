import { Text, StyleSheet, View, TextInput, Button, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import appFirebase from '../credenciales'
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Eliminé las importaciones innecesarias

const db = getFirestore(appFirebase);

export default function CreatePrograma(props) {
    const initialState = {
        infPrograma: '',
        faculta: '',
        jefePro: '',
        
    };
    
    const [state, setState] = useState(initialState);

    const handleChangeText = (value, name) => {
        setState({ ...state, [name]: value });
    };

    const savePro = async () => {
        try {
            await addDoc(collection(db, 'programa'), { ...state });
            Alert.alert('Alerta', 'Guardado con éxito');
            props.navigation.navigate('ListPro');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Añadir Programa</Text>
            
            <View style={styles.inputgroup}>
                <TextInput
                    placeholder='Informacion de Programa'
                    onChangeText={(value) => handleChangeText(value, 'infPrograma')}
                    value={state.infPrograma}
                />
            </View>
            <View style={styles.inputgroup}>
                <TextInput
                    placeholder='Faculta de Programa'
                    onChangeText={(value) => handleChangeText(value, 'faculta')}
                    value={state.faculta}
                />
            </View>
            <View style={styles.inputgroup}>
                <TextInput
                    placeholder='Jefe de Programa'
                    onChangeText={(value) => handleChangeText(value, 'jefePro')}
                    value={state.jefePro}
                />
            </View>

           


            <View>
                <Button title="Registrar Programa" onPress={savePro} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    titulo: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 12,
        marginBottom: 20,
    },
    inputgroup: {
        flex: 1,
        padding: 0,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
});
