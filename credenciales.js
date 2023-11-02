import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import { ReactNativeAsyncStorage } from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrBu6QPnQiqXUID-KTDIu1zwMI5o_U3n8",
  authDomain: "biometrixx-c8f07.firebaseapp.com",
  projectId: "biometrixx-c8f07",
  storageBucket: "biometrixx-c8f07.appspot.com",
  messagingSenderId: "843984881827",
  appId: "1:843984881827:web:129d9be0ca1a1254ea5716"
};


// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

initializeAuth(appFirebase, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
})

export default appFirebase;