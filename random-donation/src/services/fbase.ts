import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig: object = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseInstance: any = firebase;
export const authService: any = firebaseInstance.auth();
export const dbService: any = firebaseInstance.firestore();
export const storageService: any = firebaseInstance.storage();

export default firebaseInstance.firestore();
