var firebaseConfig = {
    apiKey: "AIzaSyAnvD7cPmoEUzbVW4ImJHmd8Akd4xx_zIQ",
    authDomain: "database-practice-2c96b.firebaseapp.com",
    databaseURL: "https://database-practice-2c96b-default-rtdb.firebaseio.com",
    projectId: "database-practice-2c96b",
    storageBucket: "database-practice-2c96b.appspot.com",
    messagingSenderId: "526358999604",
    appId: "1:526358999604:web:2931413052117fdb3cd061"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "add user"
    });
}