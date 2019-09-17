import firebase from "firebase";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCeUysHHn7ByE_H9lWSE3i0OMiIvDcKLbY",
    authDomain: "awesomeproject-1bb2b.firebaseapp.com",
    databaseURL: "https://awesomeproject-1bb2b.firebaseio.com",
    projectId: "awesomeproject-1bb2b",
    storageBucket: "awesomeproject-1bb2b.appspot.com",
    messagingSenderId: "601792964590",
    appId: "1:601792964590:web:92c5347a786fd596ad10ff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const storage = firebase.storage();

  export {
      storage, firebase as default
  }