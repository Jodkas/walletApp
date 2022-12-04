import {initializeApp} from 'firebase/app';

import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

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

const createUser = (user, password) => {
  return new Promise((res, rej) => {
    createUserWithEmailAndPassword(auth, user, password)
      .then(credential => res('creado'))
      .catch(err => rej(err.message));
  });
};
export {createUser};
