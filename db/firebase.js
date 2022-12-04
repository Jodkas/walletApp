import {initializeApp} from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {getFirestore, collection, addDoc} from 'firebase/firestore/lite';

import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMEND_ID,
} from '@env';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMEND_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const createUser = (email, password) => {
  return new Promise((res, rej) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(credential => res('usuario creado'))
      .catch(err => rej(err.message));
  });
};

const addUser = (first, last, email) => {
  return new Promise(async (res, rej) => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        first,
        last,
        email,
      });
      res('éxito');
    } catch (err) {
      rej(err);
    }
  });
};

const login = (email, password) => {
  return new Promise((res, rej) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(credential => res('Inicio de sesion'))
      .catch(err => rej(err.message));
  });
};

export {createUser, addUser, login};
