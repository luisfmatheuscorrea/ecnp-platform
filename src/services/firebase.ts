/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDQKDxsP22IDCkZnldqFFzWCqaq0PDc_kA',
  authDomain: 'ecnp-platform-68654.firebaseapp.com',
  projectId: 'ecnp-platform-68654',
  storageBucket: 'ecnp-platform-68654.appspot.com',
  messagingSenderId: '992551917559',
  appId: '1:992551917559:web:f838b45f596c896c4ec0f2',
  measurementId: 'G-972NJ8LWXS',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
