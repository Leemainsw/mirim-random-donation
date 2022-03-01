import firebase from "firebase";

const firebaseConfig: object = {
  apiKey: "AIzaSyC0Tx0Od1kVEe9kCDVqeJF2w9B_JVgHRXA",
  authDomain: "random-donation-16bda.firebaseapp.com",
  projectId: "random-donation-16bda",
  storageBucket: "random-donation-16bda.appspot.com",
  messagingSenderId: "421834915686",
  appId: "1:421834915686:web:9882fa13baa14c9f8cd2a7",
  measurementId: "G-JZBC8LWM6Z"

  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId:  process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId:  process.env.MESSAGING_SENDER_ID,
  // appId:  process.env.APP_ID,
  // measurementId:  process.env.MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// const settings = { timestampsInSnapshots: true };
// firestore.settings(settings);

export default firestore;
