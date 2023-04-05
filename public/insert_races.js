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
//var myForm = document.forms.myForm;
//var formData = new FormData(myForm);
function insert_races(){
  var x = document.getElementById("myForm");

  var book = x.elements["book"].value;
  let concept = "race";
  let concept2 = "races";
  var race_name = x.elements["race_name"].value;
  var race_age = x.elements["race_age"].value;
  var race_asi1 = x.elements["race_asi1"].value;
  var race_asi2 = x.elements["race_asi2"].value;
  var race_speed1 = x.elements["race_speed1"].value;
  var race_speed2 = x.elements["race_speed2"].value;
  var race_alignment = x.elements["race_alignment"].value;
  var race_size = x.elements["race_size"].value;
  var race_vision = x.elements["race_vision"].value;
  var race_weapon_prof = x.elements["race_weapon_prof"].value;
  var race_tool_prof = x.elements["race_tool_prof"].value;
  var race_languages = x.elements["race_languages"].value;
  var race_subraces = x.elements["race_subraces"].value;
  var race_ability1 = x.elements["race_ability1"].value;
  var race_ability2 = x.elements["race_ability2"].value;
  var race_ability3 = x.elements["race_ability3"].value;
  console.log(book);
  console.log(concept);
  console.log(concept2);
  console.log(race_name);
  console.log(race_age);
  console.log(race_asi1);



  db.collection(book).doc(concept).collection(concept2).doc(race_name).set({
                name: race_name,
                age: race_age,
                asi1: race_asi1,
                asi2: race_asi2,
                speed1: race_speed1,
                speed2: race_speed2,
                alignment: race_alignment,
                size: race_size,
                vision: race_vision,
                weapon_prof: race_weapon_prof,
                tool_prof: race_tool_prof,
                languages: race_languages,
                subraces: race_subraces,
                ability1: race_ability1,
                ability2: race_ability2,
                ability3: race_ability3,
            })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
}
