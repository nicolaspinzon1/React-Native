import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import axios from "axios";

export default function Home({ navigation }) {
  const logout = async () => {
    try {
      console.log("Logout...");
      const response = await axios.post(
        "https://7sr75p1l-8000.use2.devtunnels.ms/logout/"
      );

      console.log("Respuesta de la API:", response.data);

      Alert.alert("Sesion Cerrada", "Se cerró la sesión correctamente");

      navigation.navigate("Welcome");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "No se pudo cerrar la sesion");
    }
  };

  return (
    <View style={styles.padre}>
      <View style={styles.padreBoton}>
        <TouchableOpacity
          style={styles.cajaBoton}
          onPress={() => navigation.navigate("RegisterBiometry")}
        >
          <Text style={styles.TextoBoton}>Registar biometria</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.padreBoton}>
        <TouchableOpacity style={styles.cajaBoton} onPress={logout}>
          <Text style={styles.TextoBoton}>Cerrar sesion</Text>
        </TouchableOpacity>
      </View> 
      {/* <View style={styles.padreBoton}>
        <TouchableOpacity
          style={styles.cajaBoton}
          onPress={() => navigation.navigate("List")}
        >
          <Text style={styles.TextoBoton}>Administracion Docentes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.padreBoton}>
        <TouchableOpacity
          style={styles.cajaBoton}
          onPress={() => navigation.navigate("ListC")}
        >
          <Text style={styles.TextoBoton}>Administracion Cursos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.padreBoton}>
        <TouchableOpacity
          style={styles.cajaBoton}
          onPress={() => navigation.navigate("ListAu")}
        >
          <Text style={styles.TextoBoton}>Administracion Cursos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.padreBoton}>
        <TouchableOpacity
          style={styles.cajaBoton}
          onPress={() => navigation.navigate("ListPro")}
        >
          <Text style={styles.TextoBoton}>Administracion Programas</Text>
        </TouchableOpacity>
      </View>
     */}
    </View>
  );
}
const styles = StyleSheet.create({
  padre: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  cajaTexto: {
    paddingVertical: 20,
    backgroundColor: "#cccccc40",
    borderRadius: 30,
    marginVertical: 10,
  },
  padreBoton: {
    alignItems: "center",
  },
  cajaBoton: {
    backgroundColor: "#54B8CA",
    borderRadius: 30,
    paddingVertical: 30,
    width: 250,
    marginTop: 20,
  },
  TextoBoton: {
    textAlign: "center",
    color: "white",
  },
});
