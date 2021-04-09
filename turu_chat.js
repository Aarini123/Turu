//YOUR FIREBASE LINKS
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
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
       firebase.database().ref(room_name).push({
        name:userName,
        msg:message,
        like:0
  });
  document.getElementById("chat_input").value="";
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
  //Start code
  console.log(firebase_message_id);
  console.log(message_data);
  name1=message_data['name'];
  message=message_data['msg'];
  like=message_data['like'];
  name_tag="<h4>"+ name1+"<img class='user_tick' src='tick.png'></h4>";
  message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
  like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
           span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
   row=name_tag+message_with_tag+like_button+span_with_tag;
   document.getElementById("output").innerHTML+=row;
    } });  }); }
getData();
function LogOut(){
    localStorage.removeItem("user");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}
var userName=localStorage.getItem("user");
var roomName=localStorage.getItem("room_name");
function send(){
    var message=document.getElementById("send_input").value;
firebase.database().ref(roomName).push({
    name:userName,
    msg:message,
    like:0
});
document.getElementById("send_input").value="";
}