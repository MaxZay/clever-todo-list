import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

const config = {
  apiKey: 'AIzaSyAgM-AZwSuSObxt3buUB1D9gdwNvBsjPi8',
  authDomain: 'clever-to-do-list-b7367.firebaseapp.com',
  projectId: 'clever-to-do-list-b7367',
  storageBucket: 'clever-to-do-list-b7367.appspot.com',
  messagingSenderId: '392160159278',
  appId: '1:392160159278:web:49509c2bdf99bcc1e261bf',
  measurementId: 'G-ZS4BX3JN3Z',
}

const app = initializeApp(config)

export const db = getFirestore(app)
