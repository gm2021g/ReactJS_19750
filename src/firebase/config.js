import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGE8FLQsTL3JkRSNiu0-MFFWLFrOOON_o",
    authDomain: "ostma-mascotas.firebaseapp.com",
    projectId: "ostma-mascotas",
    storageBucket: "ostma-mascotas.appspot.com",
    messagingSenderId: "398535542989",
    appId: "1:398535542989:web:ef503ea527471a1f2d4184"
};

const app = firebase.initializeApp(firebaseConfig)


export const getFirestore = () => {
    return firebase.firestore(app)
}

// export const db = getFirestore()