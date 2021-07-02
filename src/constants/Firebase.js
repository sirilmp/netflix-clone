import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBv_T5I5nK-vWJ-PAwAfSYmYpiBE7Ob4N4",
    authDomain: "netflix-clone-42653.firebaseapp.com",
    projectId: "netflix-clone-42653",
    storageBucket: "netflix-clone-42653.appspot.com",
    messagingSenderId: "1002112561218",
    appId: "1:1002112561218:web:23032cae8c94055e8b7ddb",
    measurementId: "G-WFL0RJJ8H1"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth()

  export{auth}

  export default db
