import { Text, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";

import appFirebase from "../credenciales";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";

const db = getFirestore(appFirebase);

export default function ShowPrograma(props) {
  const [programa, setPrograma] = useState({});

  const getOnePrograma = async (id) => {
    try {
      const docRef = doc(db, "programa", id);
      const docSnap = await getDoc(docRef);
      setPrograma(docSnap.data());
    } catch {
      console.log("Error al obtener el Programa");
    }
  };

  useEffect(() => {
    getOnePrograma(props.route.params.programaId);
  }, []);

  const deletePrograma = async (id) => {
    try {
      await deleteDoc(doc(db, 'programa', id));
      Alert.alert('Éxito', 'Programa eliminado');
      props.navigation.navigate('ListPro');
    } catch (error) {
      console.error('Error al eliminar el Programa:', error);
      Alert.alert('Error', 'No se pudo eliminar el Programa');
    }
  }

  return (
    <View>
      <Text style={styles.titulo}>Detalles  de Programa</Text>
      <Text style={styles.sub}>Informacion del programa: {programa.infPrograma}</Text>
      <Text style={styles.sub}>Faculta del programa: {programa.faculta}</Text>
      <Text style={styles.sub}>Jefe del programa: {programa.jefePro}</Text>
      

      <TouchableOpacity
        style={styles.BotonLista}
        onPress={() => deletePrograma(props.route.params.programaId)}
      >
        <Text style={styles.TextoNombre}>Eliminar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  sub: {
    fontSize: 16,
  },
  TextoNombre: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  BotonLista: {
    backgroundColor: "red",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginBottom: 3,
    padding: 5,
    marginBottom: 5,
  },
});
