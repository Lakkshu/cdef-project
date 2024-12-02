import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyCKsq9OU1fY09h99lzxYXVUccqLtuDth5M",
//     authDomain: "drive-yt-twd.firebaseapp.com",
//     projectId: "drive-yt-twd",
//     storageBucket: "drive-yt-twd.appspot.com",
//     messagingSenderId: "741425428803",
//     appId: "1:741425428803:web:9a02b4a63cc62ea6da17f6"
// };

// const firebaseConfig = {
//     apiKey: "AIzaSyBVsS5rKmJKg8Vwm64T9TTXiK14c0h8oe0",
//     authDomain: "new--drive.firebaseapp.com",
//     projectId: "new--drive",
//     storageBucket: "new--drive.firebasestorage.app",
//     messagingSenderId: "757568300353",
//     appId: "1:757568300353:web:a39404b7531de4e9f6edc0"
//   };
  
const firebaseConfig = {
  apiKey: "AIzaSyBCk7K_24dHMOC4aDwFoBmA10Voxf8LfnE",
  authDomain: "fir-chat-25645.firebaseapp.com",
  projectId: "fir-chat-25645",
  storageBucket: "fir-chat-25645.appspot.com",
  messagingSenderId: "18676266831",
  appId: "1:18676266831:web:ca7dcbc9264872bb4cb73a"
};
  
  

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }