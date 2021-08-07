
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

    document.getElementById("user_name").innerHTML="Welcome " + user_name;
  
//fun add room

    function addRoom() {
          
    room_name=document.getElementById("room_name").value;
   
    firebase.database().ref("/").child(room_name).update({
           purpose:"Adding Room Name"
     });

     localStorage.setItem("room_name" , room_name); 

     window.location="kwitter_page.html";
    }   

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
           
        row="<div clsss='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
        
        document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

// fun redirectToRoomName

function redirectToRoomName(name) {
   localStorage.setItem("room_name",name);

  window.location="kwitter_page.html";
}

//fun logout

function logout() {
  localStorage.removeItem("user_name");

  localStorage.removeItem("room_name");

  window.location="index.html";
}