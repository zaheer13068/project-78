import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyBCUvEOVBUDOTGNx2h_dqatw188t8o1rcY",
  authDomain: "project-78-74d2d.firebaseapp.com",
  projectId: "project-78-74d2d",
  storageBucket: "project-78-74d2d.appspot.com",
  messagingSenderId: "190246182542",
  appId: "1:190246182542:web:c1ec303b235fb052ddf3df"
};




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


