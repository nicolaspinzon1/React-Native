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

export default function ShowCursos(props) {
  const [aula, setAula] = useState({});

  const getOneAula = async (id) => {
    try {
      const docRef = doc(db, "aula", id);
      const docSnap = await getDoc(docRef);
      setAula(docSnap.data());
    } catch {
      console.log("Error al obtener el aula");
    }
  };

  useEffect(() => {
    getOneAula(props.route.params.aulaId);
  }, []);

  const deleteAula = async (id) => {
    try {
      await deleteDoc(doc(db, 'aula', id));
      Alert.alert('Éxito', 'Aula eliminado');
      props.navigation.navigate('ListAu');
    } catch (error) {
      console.error('Error al eliminar el Aula:', error);
      Alert.alert('Error', 'No se pudo eliminar el Aula');
    }
  }

  return (
    <View>
      <Text style={styles.titulo}>Detalles  de Aula</Text>
      <Text style={styles.sub}>Numero del aula: {aula.Numero}</Text>
      

      <TouchableOpacity
        style={styles.BotonLista}
        onPress={() => deleteAula(props.route.params.aulaId)}
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
