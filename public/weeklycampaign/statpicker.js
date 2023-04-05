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

var abilityScoreRef = db.collection('characterabilityscore').doc('scorecheck');

var ability_score_output = "";
var singlescore = "";
// var doc_ID = "";
//
// function ability_scores(){
//   db.collection("characterabilityscore").doc("scorecheck").get()
//       .then((querySnapshot) => {
//           querySnapshot.forEach((doc) => {
//               // doc.data() is never undefined for query doc snapshots
//               doc_ID = doc.id
//               console.log(doc_ID, " => ", doc.data());
//               ability_score_output = ability_score_output + doc_ID;
//               console.log(ability_score_output);
//
//
//           });
//           document.getElementById("StatPicker").innerHTML = ability_score_output;
//       })
// }
// function getScores(){
//   for(let i = 0; i < 24; i ++){
//     db.collection("characterabilityscore").doc("scorecheck").get().then((value) => (singlescore = value.data()[i]));
//     console.log(singlescore);
//     ability_score_output = ability_score_output + singlescore + "<br>";
//   }
//   document.getElementById("StatPicker").innerHTML = ability_score_output;
// }

function getScores(){
abilityScoreRef
    .onSnapshot((doc) => {
        console.log("Current data: ", doc.data());
        ability_score_output = "";
        for(let i = 0; i < 24; i++){
          ability_score_output = ability_score_output + doc.data()[i] + "</br>";
        }
        console.log(ability_score_output);
        document.getElementById("StatPicker").innerHTML = ability_score_output;
    });
}
function deleteScores(valueid){

// Remove the 'capital' field from the document
  var removeScore = abilityScoreRef.update({
    valueid: firebase.firestore.FieldValue.delete()
});

}
