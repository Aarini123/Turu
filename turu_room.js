var firebaseConfig = {
      apiKey: "AIzaSyBhvBpHF7lHEeUAQqJAA5CKL7wiz7RyiEs",
      authDomain: "turu-6c829.firebaseapp.com",
      databaseURL: "https://turu-6c829-default-rtdb.firebaseio.com",
      projectId: "turu-6c829",
      storageBucket: "turu-6c829.appspot.com",
      messagingSenderId: "1036166846276",
      appId: "1:1036166846276:web:c97d28d3cb0121efa2e911",
      measurementId: "G-8C10XKZ0E6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
