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
  const [curso, setCurso] = useState({});

  const getOneCurso = async (id) => {
    try {
      const docRef = doc(db, "cursos", id);
      const docSnap = await getDoc(docRef);
      setCurso(docSnap.data());
    } catch {
      console.log("Error al obtener el curso");
    }
  };

  useEffect(() => {
    getOneCurso(props.route.params.cursosId);
  }, []);

  const deleteCursos = async (id) => {
    try {
      await deleteDoc(doc(db, 'cursos', id));
      Alert.alert('Éxito', 'Curso eliminado');
      props.navigation.navigate('ListC');
    } catch (error) {
      console.error('Error al eliminar el Curso:', error);
      Alert.alert('Error', 'No se pudo eliminar el curso');
    }
  }

  return (
    <View>
      <Text style={styles.titulo}>Detalles  de Cursos</Text>
      <Text style={styles.sub}>Numero de clases restantes: {curso.NumeroC}</Text>
      <Text style={styles.sub}>Apellido: {curso.descripcion}</Text>
      <Text style={styles.sub}>Cedula: {curso.ciclo}</Text>
      <Text style={styles.sub}>Correo: {curso.grupo}</Text>

      <TouchableOpacity
        style={styles.BotonLista}
        onPress={() => deleteCursos(props.route.params.cursosId)}
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
