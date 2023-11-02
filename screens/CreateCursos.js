import { Text, StyleSheet, View, TextInput, Button, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import appFirebase from '../credenciales'
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Eliminé las importaciones innecesarias

const db = getFirestore(appFirebase);

export default function CreateCursos(props) {
    const initialState = {
        NumeroC: '',
        descripcion: '',
        // programa IdPrograma:'',
        ciclo: '',
        grupo: '',
    };
    
    const [state, setState] = useState(initialState);

    const handleChangeText = (value, name) => {
        setState({ ...state, [name]: value });
    };

    const saveCursos = async () => {
        try {
            await addDoc(collection(db, 'cursos'), { ...state });
            Alert.alert('Alerta', 'Guardado con éxito');
            props.navigation.navigate('ListC');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Añadir Cursos</Text>
            
            <View style={styles.inputgroup}>
                <TextInput
                    placeholder='NumeroC'
                    onChangeText={(value) => handleChangeText(value, 'NumeroC')}
                    value={state.NumeroC}
                />
            </View>

            <View style={styles.inputgroup}>
                <TextInput
                    placeholder='Descripcion'
                    onChangeText={(value) => handleChangeText(value, 'descripcion')}
                    value={state.descripcion}
                />
            </View>
           
            <View style={styles.inputgroup}>
                <TextInput
                    placeholder='Ciclo'
                    onChangeText={(value) => handleChangeText(value, 'ciclo')}
                    value={state.ciclo}
                />
            </View>

            <View style={styles.inputgroup}>
                <TextInput
                    placeholder='Grupo'
                    onChangeText={(value) => handleChangeText(value, 'grupo')}
                    value={state.grupo}
                />
            </View>

            <View>
                <Button title="Registrar Curso" onPress={saveCursos} />
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
