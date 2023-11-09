// import { Text, StyleSheet, View,ScrollView, TouchableOpacity } from "react-native";
// import React, { useEffect, useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import appFirebase from '../credenciales'
// import {getFirestore,collection,addDoc,getDocs,doc,deleteDoc,getDoc,setDoct} from 'firebase/firestore'
// import { List } from "react-native-paper";

// const db = getFirestore(appFirebase)

// export default function ListProfe(props) {


//     const [lista,setLista] =useState([])

//     useEffect(()=>{
//         const getLista = async()=>{
//             try{
//                 const querySnapshot = await getDocs(collection(db, 'profesores'))
//                 const docs = []
//                 querySnapshot.forEach((doc)=>{
//                     const{nombre,apellido,cedula,usuario,password,correo} = doc.data()
//                     docs.push({
//                         id:doc.id,
//                         nombre,
//                         apellido,
//                         cedula,
//                         correo,
//                         usuario,
//                         password,
//                     })
//                 })
//                 setLista(docs);
//         }catch(error){
//             console.log(error);

//             }
//         }    
//         getLista()
//     },[lista])



//   return (
//     <ScrollView>
//       <TouchableOpacity style={styles.Boton}  onPress={()=>props.navigation.navigate('Create')}>
//         <Text style={styles.TextoBoton}> Agregar Profesores</Text>
//       </TouchableOpacity>

//       <View>
//         <Text style={styles.TextoTitulo}> Lista de Profesores</Text>
//       </View>

//       <View>
//         {
//             lista.map((list)=>(
//                 <TouchableOpacity key={list.id} style={styles.BotonLista} onPress={()=>props.navigation.navigate('Show',{profesoresId:list.id})}>
//                     <Text style={styles.TextoNombre}> {list.nombre}</Text>
//                 </TouchableOpacity>
//             ))
//         }
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   Boton: {
//     flex: 1,
//     backgroundColor: "#54B8CA",
//     height:35,
//     bordercolor:'black',
//     borderWidth:1,
//   },
//   TextoBoton: {
//     fontSize:18,
//     textAlign: 'center'
    
//   },
//   TextoTitulo: {
//     textAlign:'center',
//     marginTop:20,
//     marginBottom: 10,
//     fontSize:15,
//   },
//   TextoNombre: {
//     fontSize:16,
    
//   },
//   BotonLista: {
//     backgroundColor: "#DDDDDD",
//     borderBottomWidth:1,
//     borderBottomColor:'#cccccc',
//     marginBottom:3,
//     padding:5,
//   }
// });
