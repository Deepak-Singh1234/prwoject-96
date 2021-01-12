//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCutoqk67ZYInsKVsOxgjh2yxs02r3l0AM",
    authDomain: "class-project-93.firebaseapp.com",
    databaseURL: "https://class-project-93-default-rtdb.firebaseio.com",
    projectId: "class-project-93",
    storageBucket: "class-project-93.appspot.com",
    messagingSenderId: "407807535193",
    appId: "1:407807535193:web:dfb53facd379093ef8a948",
    measurementId: "G-65SSY7CXV1"
  };
  // Initialize Firebase
  user_name=localStorage.getItem("User_name");
  room_name=localStorage.getItem("Room_names1");
  function send(){
    msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({ name:user_name, message:msg, like:0 });
     document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout(){
  localStorage.removeItem("Room_names1");
  localStorage.removeItem("User_name");
  window.location="index.html";
}