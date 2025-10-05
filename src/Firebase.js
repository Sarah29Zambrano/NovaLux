import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyB97HGgdABZzToT89DZ2uiuCnMMpc8hl6s',
  authDomain: 'novalux-feb8f.firebaseapp.com',
  projectId: 'novalux-feb8f',
  storageBucket: 'novalux-feb8f.firebasestorage.app',
  messagingSenderId: '520354963325',
  appId: '1:520354963325:web:116e4da2734a680990b614',
  measurementId: 'G-VD7GY75NX8',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
