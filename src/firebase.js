// import firebase from "firebase/app";
// import 'firestore/firebase'
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyAaKkXNcH2dFzvU8td-6oQDzwcX8e2BdDQ",
//   authDomain: "firstorewithvuejs.firebaseapp.com",
//   projectId: "firstorewithvuejs",
//   storageBucket: "firstorewithvuejs.appspot.com",
//   messagingSenderId: "708695656402",
//   appId: "1:708695656402:web:604662db28ffbc2522aa0b"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
// export const db = getFirestore(app)


// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth"

// const firebaseConfig = {
//   apiKey: "AIzaSyCI1OrgLLxB31vF3aT1CjP6o6kg9c9_RXo",
//   authDomain: "firestore-with-vue-js-2.firebaseapp.com",
//   projectId: "firestore-with-vue-js-2",
//   storageBucket: "firestore-with-vue-js-2.appspot.com",
//   messagingSenderId: "845868437153",
//   appId: "1:845868437153:web:44b39559403178ae1beae0",
//   measurementId: "G-GCHW74W29N"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app)
// export const analytics = getAnalytics(app);
// export const auth = getAuth(app);


import firebase from '@firebase/app'
import '@firebase/firestore'
import 'firebase/auth';
// Authentication
// import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";
// import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAaKkXNcH2dFzvU8td-6oQDzwcX8e2BdDQ",
  authDomain: "firstorewithvuejs.firebaseapp.com",
  projectId: "firstorewithvuejs",
  storageBucket: "firstorewithvuejs.appspot.com",
  messagingSenderId: "708695656402",
  appId: "1:708695656402:web:604662db28ffbc2522aa0b"
};

//Authentication
// const auth = firebase.auth();
firebase.initializeApp(firebaseConfig);
// export const auth = firebase;
// const app = firebase.initializeApp(firebaseConfig);
// export const auth = getAuth(app);

export const db = firebase.firestore()
export const auth = firebase.auth()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }

// // if using Firebase JS SDK < 5.8.0
// db.settings({ timestampsInSnapshots: true })






// old attempt
// import firebase from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC3ajXCWziBJNKtlUHlGXOYunVA7FrC3rw",
//   authDomain: "incquet-47912.firebaseapp.com",
//   databaseURL: "https://incquet-47912.firebaseio.com",
//   projectId: "incquet-47912",
//   storageBucket: "incquet-47912.appspot.com",
//   messagingSenderId: "958708124231",
//   appId: "1:958708124231:web:9fb62bc3178d3ec833bf62",
//   measurementId: "G-Z0XZ73LX10"
// };

// var app = firebase.initializeApp(firebaseConfig);
// var db = app.firestore();

// Initialize Firebase
// initializeApp(firebaseConfig);
// const db = getFirestore();
// export {db};

