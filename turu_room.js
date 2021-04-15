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

//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user");
document.getElementById("username_").innerHTML="Welcome "+ user_name + " !!"

function Add_room(){
      room=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room).update({
            purpose: "adding room"
      });
localStorage.setItem("room name",room);
window.location="turu_chat.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room_name"+ Room_names);
       row="<div class='room_name' id='"+Room_names+"' onclick='redirect(this.id)' >#"+ Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML+=row;
      //Start code

      // End code
      });});}
getData();

function redirect(name){
localStorage.setItem("room_name",name);
window.location="turu_chat.html";
}

function Log_out(){
      localStorage.removeItem("user");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
  }



