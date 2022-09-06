var firebaseConfig = {
      apiKey: "AIzaSyCAy9NWXnNMSZPkXsS-9Yj8CDWebHh8UV4",
      authDomain: "foierbaysse-faur-klas-93.firebaseapp.com",
      databaseURL: "https://foierbaysse-faur-klas-93-default-rtdb.firebaseio.com",
      projectId: "foierbaysse-faur-klas-93",
      storageBucket: "foierbaysse-faur-klas-93.appspot.com",
      messagingSenderId: "612256351976",
      appId: "1:612256351976:web:2fa8d83981d79943b8eb5d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
usernamestored = localStorage.getItem("user_name");
document.getElementById("user-name").innerHTML = "welcome "+ usernamestored + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - "+ Room_names );
row= "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"<div/> <hr>";
document.getElementById("output").innerHTML+= row;



      //End code
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("room_name") 
      localStorage.removeItem("user_name")
      window.location = "index.html";
}