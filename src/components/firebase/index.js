import firebase from "firebase";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCiXfKFeu9OpkR_uvF-Q2v1tams-CMXYvo",
    authDomain: "zarves-f4f72.firebaseapp.com",
    databaseURL: "https://zarves-f4f72.firebaseio.com",
    projectId: "zarves-f4f72",
    storageBucket: "zarves-f4f72.appspot.com",
    messagingSenderId: "1013669560475",
    appId: "1:1013669560475:web:f254b93a176aba0fea863e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const storage = firebase.storage();

  export {
      storage, firebase as default
  }