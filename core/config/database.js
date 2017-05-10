import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBRNvAL0OgSNHJzFIFY63CXH8rHdBvXryw",
  authDomain: "faceless-39d4b.firebaseapp.com",
  databaseURL: "https://faceless-39d4b.firebaseio.com",
  projectId: "faceless-39d4b",
  storageBucket: "faceless-39d4b.appspot.com",
  messagingSenderId: "589906654664"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const database = firebaseApp.database()
