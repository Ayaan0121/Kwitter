//ADD YOUR FIREBASE LINKS HERE
// My web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBUVE1OICIWR_h9ezdKviGoMNXQT79y62A",
      authDomain: "kwitter-1e0c4.firebaseapp.com",
      databaseURL: "https://kwitter-1e0c4-default-rtdb.firebaseio.com",
      projectId: "kwitter-1e0c4",
      storageBucket: "kwitter-1e0c4.appspot.com",
      messagingSenderId: "571698137549",
      appId: "1:571698137549:web:1f798e468e89ac2f4adc84"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");

    room_name=localStorage.getItem("room_name");

//fun send

    function send() {
          
    msg=document.getElementById("msg").value

    firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
    });

document.getElementById("msg").value="";

    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

name=message_data['name'];

message=message_data['message'];

like=message_data['like'];

first="<h4>" +  name   + "<img class='user_tick' src='tick.png'></h4>";

second="<h4 class='message_h4'>"+  message  +"</h4>";

third="<button class'btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)' >";

forth="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";

row=first+second+third+forth;

document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();

//fun updateLike

function updateLike(message_id) {

button_id=message_id;

likes=document.getElementById(button_id).value;

updated_likes=Number(likes)+1;

firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes
});

}

//fun logout

function logout() {
      localStorage.removeItem("user_name");
    
      localStorage.removeItem("room_name");
    
      window.location="index.html";
    }