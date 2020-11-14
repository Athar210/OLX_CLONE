import * as firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyC82rzcvTQkjCWUVSosrzKQ6boXXELhXEs",
    authDomain: "olxx-a3b18.firebaseapp.com",
    databaseURL: "https://olxx-a3b18.firebaseio.com",
    projectId: "olxx-a3b18",
    storageBucket: "olxx-a3b18.appspot.com",
    messagingSenderId: "776910686631",
    appId: "1:776910686631:web:7c8a08bbb4ad8e00cf0e82",
    measurementId: "G-1X2KX7JL7K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
