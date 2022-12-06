import {initializeApp} from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  getDocs,
  where,
  orderBy,
  limit,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore/lite';

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

const addUser = (username, first, last, email, password) => {
  return new Promise(async (res, rej) => {
    try {
      const docRef = await setDoc(doc(db, 'users', email), {
        username,
        first,
        last,
        email,
        password,
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

const signOutUser = () => {
  return new Promise((res, rej) => {
    signOut(auth)
      .then(() => {
        console.log('cerrada');
        res('Cesion cerrada');
      })
      .catch(err => rej(err));
  });
};

const getUserData = email => {
  return new Promise(async (res, rej) => {
    const userRef = doc(db, 'users', email);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      res(docSnap.data());
    } else {
      rej('Error al encontrar usuario');
    }
  });
};

const userExist = username => {
  return new Promise(async (res, rej) => {
    console.log('hola');
    const userRef = collection(db, 'users');
    const q = query(userRef, where('username', '==', username));
    const querySnapshot = await getDocs(q);
    let count = 0;
    querySnapshot.forEach(doc => {
      count++;
    });
    count > 0 ? rej('Usuario ya existente') : res('Usuario disponible');
  });
};

export {createUser, addUser, login, signOutUser, userExist, getUserData};
