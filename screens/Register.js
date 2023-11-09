// import {
//     Text,
//     StyleSheet,
//     View,
//     Image,
//     TextInput,
//     TouchableOpacity,
//     Alert,
//     SafeAreaView,
//     Button,
//     TouchableHighlight,
//   } from "react-native";
//   import React, { useState, useEffect } from "react";

  


//   import { StatusBar } from "expo-status-bar";
//   const auth = getAuth(appFirebase);
  
//   export default function Register(props) {
  
  
  
  
//     //creamos la variable de estado
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
  
//     const Registro = async () => {
//       createUserWithEmailAndPassword(auth, email, password)
//         .then(() => {
//           console.log("Cuenta creada");
//           const user = useCredential.user;
//           console.log(user);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     };
  
//     return (
  
//       <View style={styles.padre}>
//         <View style={styles.tarjeta}>
//           <View style={styles.cajaTexto}>
//             <TextInput
//               placeholder="Nombres"
//               style={{ paddingHorizontal: 15 }}
//               onChangeText={(text) => setEmail(text)}
//             />
//           </View>
//           <View style={styles.cajaTexto}>
//             <TextInput
//               placeholder="Apellidos"
//               style={{ paddingHorizontal: 15 }}
//               onChangeText={(text) => setEmail(text)}
//             />
//           </View>
//           <View style={styles.cajaTexto}>
//             <TextInput
//               placeholder="Usuario"
//               style={{ paddingHorizontal: 15 }}
//               onChangeText={(text) => setEmail(text)}
//             />
//           </View>
//           <View style={styles.cajaTexto}>
//             <TextInput
//               placeholder="Correo@campusucc.edu.co"
//               style={{ paddingHorizontal: 15 }}
//               onChangeText={(text) => setEmail(text)}
//             />
//           </View>
//           <View style={styles.cajaTexto}>
//             <TextInput
//               placeholder="Contraseña"
//               style={{ paddingHorizontal: 15 }}
//               secureTextEntry={true}
//               onChangeText={(text) => setPassword(text)}
//             />
//           </View>
//           <View style={styles.padreBoton}>
//             <TouchableOpacity style={styles.cajaBoton} onPress={Registro}>
//               <Text style={styles.TextoBoton}>Registro</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   }
  
//   const styles = StyleSheet.create({
//     container:{
//       flex: 1,
  
//       alignItems:'center',
//       justifyContent:'center',
//       paddingTop:StatusBar.currentHeight,
//       },
    
//     padre: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       backgroundColor: "white",
//     },
//     profile: {
//       width: 100,
//       height: 100,
//       borderRadius: 50,
//       borderColor: "white",
//     },
  
//     tarjeta: {
//       margin: 20,
//       backgroundColor: "white",
//       borderRadius: 20,
//       width: "90%",
//       padding: 20,
//       shadowColor: "#000",
//       shadowOffset: {
//         width: 0,
//         height: 2,
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 4,
//       elevation: 5,
//     },
//     cajaTexto: {
//       paddingVertical: 10,
//       backgroundColor: "#cccccc40",
//       borderRadius: 30,
//       marginVertical: 10,
//     },
//     padreBoton: {
//       alignItems: "center",
//     },
//     cajaBoton: {
//       backgroundColor: "#54B8CA",
//       borderRadius: 30,
//       paddingVertical: 20,
//       width: 150,
//       marginTop: 20,
//     },
//     TextoBoton: {
//       textAlign: "center",
//       color: "white",
//     },
//   });