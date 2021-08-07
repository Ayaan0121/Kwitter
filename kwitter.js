function addUser() {    
//var username

user_name = document.getElementById("user_name").value;

//save user name in loacal storage 

localStorage.setItem("user_name" , user_name);

//code to navigate to another page

window.location="kwitter_room.html";
}