import React from "react";
import { View, Image, StyleSheet, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import Button from "../components/Button";

const Welcome = ({navigation}) => {
  return (
    <LinearGradient
      colors={[COLORS.secondary, COLORS.primary]}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/Logo.png")} // Asegúrate de que la imagen tenga un fondo transparente y sea formato PNG

          style={styles.image}
        />
        {/* Otro contenido aquí */}
        <View
          style={{
            paddingHorizontal: 22,
            position: "absolute",
            top: 400,
            width: "100%",
          }}
        >
          <Text
            style={{
              alignItems: "center",
              fontSize: 50,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
            Bienvenido
          </Text>
          <Text
            style={{
              alignItems: "center",
              fontSize: 20,
              fontWeight: 500,
              color: COLORS.white,
            }}
          >
            BiometrixUCC
          </Text>

          {/* <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                alignItems: "center",
                fontSize: 16,
                color: COLORS.white,
                marginVertical: 4,
              }}
            ></Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            ></Text>
          </View> */}

          <Button
            title="Iniciar Sesion "
            onPress={() => navigation.navigate("Login")}
            style={{
              marginTop: 22,
              width: "100%",
            }}
          />
          {/* <Button
            title="Iniciar Sesion como administrador"
            onPress={() => navigation.navigate("Login")}
            style={{
              marginTop: 22,
              width: "100%",
            }}
          /> */}

          {/* <View
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              Ya tienes una cuenta?
            </Text>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontSize: 16,
                  color: COLORS.white,
                  fontWeight: "bold",
                  marginLeft: 4,
                }}
              >
                Iniciar 
              </Text>
            </Pressable>
          </View> */}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Coloca el contenido en la parte superior
    alignItems: "center",
    backgroundColor: "transparent", // Fondo transparente
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 100,
    borderRadius: 100, // Espacio superior para alinear la imagen en la parte superior
  },
});

export default Welcome;
