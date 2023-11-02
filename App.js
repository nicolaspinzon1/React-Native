import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "./screens/Login";
import Home from "./screens/Home";
import Welcome from "./screens/Welcome";
import Register from "./screens/Register";

import ListProfe from "./screens/ListProfe";  
import CreateProfe from "./screens/CreateProfe";  
import ShowProfe from "./screens/ShowProfe";  

import ListCursos from "./screens/ListCursos";  
import CreateCursos from "./screens/CreateCursos";  
import ShowCursos from "./screens/ShowCursos"; 

import ListAula from "./screens/ListAula";  
import CreateAula from "./screens/CreateAula";  
import ShowAula from "./screens/ShowAula";  

import ListPrograma from "./screens/ListPrograma";  
import CreatePrograma from "./screens/CreatePrograma";  
import ShowPrograma from "./screens/ShowPrograma";  






export default function App() {
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      // initialRouteName=''
      <Stack.Navigator initialRouteName='' >
         <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "LOGIN",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#54B8CA" },
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "BiometrixUCC",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#54B8CA" },
          }}
        />

        
       
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: "Register",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#54B8CA" },
          }}
        />

        <Stack.Screen name='List' component={ListProfe}
          options={{
            title: " ",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#54B8CA" },
          }}
        />
        <Stack.Screen name='Create' component={CreateProfe}
          options={{
            title: "Creacion de docente",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#54B8CA" },
          }}
        />
        <Stack.Screen name='Show' component={ShowProfe}
          options={{
            title: "Mostrar Docente",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#54B8CA" },
          }}
        />
         <Stack.Screen name='ListC' component={ListCursos}
          options={{
            title: " ",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#54B8CA" },
          }}
        />
        <Stack.Screen name='CreateC' component={CreateCursos}
          options={{
            title: "Creacion de Cursos",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#54B8CA" },
          }}
        />
        <Stack.Screen name='ShowC' component={ShowCursos}
          options={{
            title: "Mostrar Cursos",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#54B8CA" },
          }}
        />
         <Stack.Screen name='ListAu' component={ListAula}
          options={{
            title: " ",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#54B8CA" },
          }}
        />
        <Stack.Screen name='CreateAu' component={CreateAula}
          options={{
            title: "Creacion de Aula",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#54B8CA" },
          }}
        />
        <Stack.Screen name='ShowAu' component={ShowAula}
          options={{
            title: "Mostrar Aula",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#54B8CA" },
          }}
        />
            <Stack.Screen name='ListPro' component={ListPrograma}
          options={{
            title: " ",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#54B8CA" },
          }}
        />
        <Stack.Screen name='CreatePro' component={CreatePrograma}
          options={{
            title: "Creacion de Programa",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#54B8CA" },
          }}
        />
        <Stack.Screen name='ShowPro' component={ShowPrograma}
          options={{
            title: "Mostrar Programa",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#54B8CA" },
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
