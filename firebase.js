
import firebase from 'firebase';




const firebaseConfig = {
    apiKey: "AIzaSyC5p87oVsgSCimhEd3JmWXbW2LJ-1EaN24",
    authDomain: "onlineshopvali.firebaseapp.com",
    projectId: "onlineshopvali",
    storageBucket: "onlineshopvali.appspot.com",
    messagingSenderId: "206934591198",
    appId: "1:206934591198:web:89fd93a3070078aebea44f"
  };


  ///you know whats funny?...i found the solution down below for my firebase error after 2 days , 
  ///eventualy i continued to watch the video from the place i got stuck and after 2 GOD DAMN MIN I SEE THAT IT'S EXACTLLY THE SAME SOLUTION DOWN BELOW 
  
  const app= !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore(); 
  
  export default db



