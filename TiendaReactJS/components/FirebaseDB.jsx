import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

  const totalUsers : Object = [];
  const config = {
    apiKey: "AIzaSyA9iTNSmwO0Gaut6ELoWW7d0QPQYwZaro4",
    authDomain: "tienda-angular-2.firebaseapp.com",
    databaseURL: "https://tienda-angular-2.firebaseio.com/",
    projectId: "tienda-angular-2",
    storageBucket: "tienda-angular-2.appspot.com",
    messagingSenderId: "1040430078959"
  };
  firebase.initializeApp(config);

const productosDb = firebase.database().ref().child('productos')
const usuariosDb = firebase.database().ref().child('usuarios')

usuariosDb.orderByChild("id").on("child_added", function(snapshot) {
  totalUsers.push(snapshot.key)
});
