//<script src="https://www.gstatic.com/firebasejs/5.0.1/firebase.js"></script>

// Initialize Firebase
var config = {
	apiKey: "AIzaSyBYCYQwb8SRQx-R1QFHFtGb4z1ovd3JjMo",
	authDomain: "ontutor-18e67.firebaseapp.com",
	databaseURL: "https://ontutor-18e67.firebaseio.com",
	projectId: "ontutor-18e67",
	storageBucket: "ontutor-18e67.appspot.com",
	messagingSenderId: "61927939127"
};
firebase.initializeApp(config);
  
// var databae = document.getElementById('databae');
// var dbRef = firebase.database().ref().child('text');
// dbRef.on('value', snap=> databae.innerText = snap.val());


function SignIn()
{
	console.log("In SignIn");
	var user = firebase.auth().currentUser;
	if (user) {
		console.log("In SignIn - SignOut");
		var user = firebase.auth().currentUser;
		if (user) {
			// User is signed in.
			console.log("In SignIn - SignOut - User is signed in.");
			firebase.auth().signOut().then(function() {
			// Sign-out successful.
			document.getElementById('LoginStatus').innerText = "Logout Succeed"
			console.log(user);
			console.log("In SignIn - SignOut - displayName = " + user["displayName"]);
			console.log("In SignIn - SignOut - emailVerified = " + user["emailVerified"]);
			console.log("In SignIn - SignOut - uid = " + user["uid"]);
			document.getElementById("clickme1").innerText = "Login";
			}).catch(function(error) {
			  // An error happened.
			});
		} else {
			// No user is signed in.
			console.log("In SignOut - No user is signed in.");
		}
	}
	else {
		console.log("In SignIn - signing in.");
		var provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider).then(function(result) {
			// This gives you a Google Access Token. You can use it to access the Google API.
			var token = result.credential.accessToken;
			// The signed-in user info.
			var user = result.user;
			// User is signed in.
			console.log(user);
			console.log("In SignIn - isplayName = " + user["displayName"]);
			console.log("In SignIn - emailVerified = " + user["emailVerified"]);
			console.log("In SignIn - uid = " + user["uid"]);		  
			document.getElementById('LoginStatus').innerText = "Welcome "+ user["displayName"];
			document.getElementById("clickme1").innerText = "Log Out";
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  // The email of the user's account used.
		  var email = error.email;
		  // The firebase.auth.AuthCredential type that was used.
		  var credential = error.credential;
		  // ...
		});
	}
}
