import { Text, StyleSheet, View, TextInput, Button, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import appFirebase from '../credenciales'
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Eliminé las importaciones innecesarias

const db = getFirestore(appFirebase);

export default function CreateAula(props) {
    const initialState = {
        Numero: '',
        
    };
    
    const [state, setState] = useState(initialState);

    const handleChangeText = (value, name) => {
        setState({ ...state, [name]: value });
    };

    const saveAula = async () => {
        try {
            await addDoc(collection(db, 'aula'), { ...state });
            Alert.alert('Alerta', 'Guardado con éxito');
            props.navigation.navigate('ListAu');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Añadir Aula</Text>
            
            <View style={styles.inputgroup}>
                <TextInput
                    placeholder='Numero de aula'
                    onChangeText={(value) => handleChangeText(value, 'Numero')}
                    value={state.Numero}
                />
            </View>

           


            <View>
                <Button title="Registrar Aula" onPress={saveAula} />
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
