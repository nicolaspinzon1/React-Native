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
  setDoct,
} from "firebase/firestore";

const db = getFirestore(appFirebase);

export default function ShowProfe(props) {
  const [profesor, setProfesor] = useState({});

  const getOneProfesor = async (id) => {
    try {
      const docRef = doc(db, "profesores", id);
      const docSnap = await getDoc(docRef);
      setProfesor(docSnap.data());
    } catch {
      console.log("Error al obtener el profesor");
    }
  };

  useEffect(() => {
    getOneProfesor(props.route.params.profesoresId);
  }, []);

  const deleteProfesor = async (id) => {
    try {
      await deleteDoc(doc(db, 'profesores', id));
      Alert.alert('Éxito', 'Docente eliminado');
      props.navigation.navigate('List');
    } catch (error) {
      console.error('Error al eliminar el docente:', error);
      Alert.alert('Error', 'No se pudo eliminar el docente');
    }
  }
  

  return (
    <View>
      <Text style={styles.titulo}>Detalles Docentes</Text>
      <Text style={styles.sub}>Nombre:{profesor.nombre}</Text>
      <Text style={styles.sub}>Apellido:{profesor.apellido}</Text>
      <Text style={styles.sub}>Cedula:{profesor.cedula}</Text>
      <Text style={styles.sub}>Correo:{profesor.correo}</Text>
      <Text style={styles.sub}>Usuario:{profesor.usuario}</Text>
      <Text style={styles.sub}>Password:{profesor.password}</Text>

      <TouchableOpacity
        style={styles.BotonLista}
        onPress={() => deleteProfesor(props.route.params.profesoresId)}
      >
        <Text style={styles.TextoNombre}> Eliminar</Text>
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
