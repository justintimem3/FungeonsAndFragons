// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCTKy9rMX5fsL4zJIyVwLQpGQKdG9-Jh5Q",
  authDomain: "fungeonsandfragons-e2797.firebaseapp.com",
  databaseURL: "https://fungeonsandfragons-e2797-default-rtdb.firebaseio.com",
  projectId: "fungeonsandfragons-e2797",
  storageBucket: "fungeonsandfragons-e2797.appspot.com",
  messagingSenderId: "924314582216",
  appId: "1:924314582216:web:0ed700be305c8fa81b39fd",
  measurementId: "G-8CHRBKR6T2"
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

function getRaceName(race_name){
  var docRef = db.collection("PHB").doc("race").collection("races").doc(race_name);
  docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data("name"));
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
}
