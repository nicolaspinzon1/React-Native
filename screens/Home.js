import { Text, StyleSheet, View,Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


export default function Home({ navigation }) {
  return (
    <View style={styles.padre}>
      <View  style={styles.padreBoton}>
      <TouchableOpacity style={styles.cajaBoton} onPress={() => navigation.navigate("List")}>
              <Text style={styles.TextoBoton}>Administracion Docentes</Text>
            </TouchableOpacity>
      </View>
      <View style={styles.padreBoton}>
      <TouchableOpacity style={styles.cajaBoton} onPress={() => navigation.navigate("ListC")}>
              <Text style={styles.TextoBoton}>Administracion Cursos</Text>
            </TouchableOpacity>
      </View>
      <View style={styles.padreBoton}>
      <TouchableOpacity style={styles.cajaBoton} onPress={() => navigation.navigate("ListAu")}>
              <Text style={styles.TextoBoton}>Administracion Cursos</Text>
            </TouchableOpacity>
      </View>
      <View style={styles.padreBoton}>
      <TouchableOpacity style={styles.cajaBoton} onPress={() => navigation.navigate("ListPro")}>
              <Text style={styles.TextoBoton}>Administracion Programas</Text>
            </TouchableOpacity>
      </View>
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
