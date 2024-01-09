import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyD4qgqYmfbqaSIfIaLBwf7caA6WZ-Ixib8',
  authDomain: 'react-netflix-clone-9689c.firebaseapp.com',
  projectId: 'react-netflix-clone-9689c',
  storageBucket: 'react-netflix-clone-9689c.appspot.com',
  messagingSenderId: '481951909195',
  appId: '1:481951909195:web:5891a8f2cf2e06117f54ce',
  measurementId: 'G-QF96F3DL13'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)
