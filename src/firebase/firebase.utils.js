import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config =
    {
        apiKey: "AIzaSyANa8X4gpHxPP47pq1fbZi9s3BgAdFey9c",
        authDomain: "ecomert-db.firebaseapp.com",
        databaseURL: "https://ecomert-db.firebaseio.com",
        projectId: "ecomert-db",
        storageBucket: "ecomert-db.appspot.com",
        messagingSenderId: "855288861729",
        appId: "1:855288861729:web:8b304dddede2d44279bf60",
        measurementId: "G-PFGJK2M74M"
    };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

