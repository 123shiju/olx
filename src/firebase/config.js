import firebase from 'firebase';
import 'firebase/auth';

import 'firebase/firebase'
import 'firebase/storage'
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBVXZL-KEC67y19u_g9r7Sq96ceXSQKFLo",
  authDomain: "demo2-507af.firebaseapp.com",
  projectId: "demo2-507af",
  storageBucket: "demo2-507af.appspot.com",
  messagingSenderId: "942136074840",
  appId: "1:942136074840:web:6e5eed8741ae043d30e02d",
  measurementId: "G-DZF4SWLV4Y"
};


export default firebase.initializeApp(firebaseConfig)