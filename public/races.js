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
//function insert_races(book, concept, race_info){
//  db.collection(book).doc(concept).set({
  //            name: "Porta main",
    //          state: "CA",
      //        country: "USA"
        //  })
      //    .then(() => {
    //          console.log("Document successfully written!");
    //      })
    //      .catch((error) => {
    //          console.error("Error writing document: ", error);
    //      });
//}
var race_name_output = "";
var doc_ID = "";

function race_names_PHB(){
  db.collection("PHB").doc("race").collection("races").get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              doc_ID = doc.id
              console.log(doc_ID, " => ", doc.data());
              race_name_output = race_name_output + ": " + "<a href='/races/" + doc_ID + ".html' style='color: white'>" + doc_ID + "</a>" + "<br>";
              console.log(race_name_output);


          });
          document.getElementById("PHBRaces").innerHTML = race_name_output;
      })
}
function race_names_Volos(){
  let race_name_output = "";
  db.collection("Volos").doc("race").collection("races").get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              doc_ID = doc.id
              console.log(doc_ID, " => ", doc.data());
              race_name_output = race_name_output + ": " + "<a href='/races/" + doc_ID + ".html' style='color: white'>" + doc_ID + "</a>" + "<br>";
              console.log(race_name_output);


          });
          document.getElementById("VolosRaces").innerHTML = race_name_output;
      })
}
