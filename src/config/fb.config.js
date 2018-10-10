import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD66-83jEcKa01J-EMlkWh93fL3qH1iof0",
  authDomain: "net-ninja-marioplan-2dda6.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-2dda6.firebaseio.com",
  projectId: "net-ninja-marioplan-2dda6",
  storageBucket: "net-ninja-marioplan-2dda6.appspot.com",
  messagingSenderId: "454523253656"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;