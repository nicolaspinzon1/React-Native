// import { Text, StyleSheet, View, TextInput, Button, ScrollView,Alert } from "react-native";
// import React, { useState } from "react";
// import { StatusBar } from "expo-status-bar";

// import appFirebase from '../credenciales'
// import {getFirestore,collection,addDoc,getDocs,doc,deleteDoc,getDoc,setDoct} from 'firebase/firestore'

// const db = getFirestore(appFirebase)

// export default function CreateProfe(props) {

//     const initialState ={
//         nombre:'',
//         apellido:'',
//         cedula:'',
//         correo:'',
//         usuario:'',
//         password:'',
       
//         // huella:'',
        
//     }
//     const[state, setState]= useState(initialState)

//     const handleChangeText =(value,name)=>{
//         setState({...state,[name]:value})
//       }

//     const saveProfe = async()=>{
//         try{
//             await addDoc(collection(db,'profesores'),{
//                 ...state
//             })
            
//             Alert.alert('Alerta','guardado con exito')
//             props.navigation.navigate('List')
//         }
//         catch{
//             console.error(error)
//         }
//         //console.log(state) 
//     }

//   return (
//     <ScrollView style={styles.container}>
//         <Text style={styles.titulo}> Añadir Profesor</Text>

//         <View style={styles.inputgroup}>
            
//         <TextInput placeholder='nombre' onChangeText={(value)=>handleChangeText(value,'nombre')}
//             value={state.nombre}
//         />

//         </View>
//         <View style={styles.inputgroup}>
//         <TextInput placeholder='apellido' onChangeText={(value)=>handleChangeText(value,'apellido')}
//             value={state.apellido}/>
//         </View>
       
//         <View style={styles.inputgroup}>
//         <TextInput placeholder='cedula' onChangeText={(value)=>handleChangeText(value,'cedula')}
//             value={state.cedula}/>
//         </View>

        
            
//         <View style={styles.inputgroup}>
            
//             <TextInput placeholder='correo' onChangeText={(value)=>handleChangeText(value,'correo')}
//                 value={state.correo}
//             />
    
//             </View>

//         <View style={styles.inputgroup}>
//         <TextInput placeholder='usuario' onChangeText={(value)=>handleChangeText(value,'usuario')}
//             value={state.usuario}/>
//         </View>
//         <View style={styles.inputgroup}>
//         <TextInput placeholder='password'
//         secureTextEntry={true}
//         onChangeText={(value)=>handleChangeText(value,'password')}
//             value={state.password}/>
//         {/* <TextInput placeholder='huella'/> */}
//         </View>

//         <View>
//             <Button title="Registrar docente" onPress={saveProfe} />
//         </View>
        
//     </ScrollView>
    
//   );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       padding:35,
//     },
//     titulo:{
//         textAlign:'center',
//         fontSize:18,
//         marginTop:12,
//         marginBottom:20,
//     },
//     inputgroup: {
//         flex: 1,
//         padding: 0,
//         marginBottom: 20,
//         borderBottomWidth: 1, 
//         borderBottomColor: '#cccccc',
//     },
//   });
  
