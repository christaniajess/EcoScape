// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmN08IvkUv2vQn7o_Cbd5daeQ3OXxGRpo",
  authDomain: "ecoscape-ea1d6.firebaseapp.com",
  databaseURL: "https://ecoscape-ea1d6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecoscape-ea1d6",
  storageBucket: "ecoscape-ea1d6.appspot.com",
  messagingSenderId: "104462396856",
  appId: "1:104462396856:web:bcaaa850fb71afed13b34d",
  measurementId: "G-35CF9R9L0S"
};

// Initialize Firebase
document.addEventListener("DOMContentLoaded", (event) => {
    if (typeof app == "undefined") {
      const app = firebase.initializeApp(firebaseConfig);
      console.log(app);
    }
  
    // prints the firebase connection to check for bug
    // console.log(app);x
    if (typeof db == "undefined") {
      db = firebase.firestore();
      auth = firebase.auth();
    }
  
});


// register
function register_la(){
const registerForm = document.getElementById("registration");
const registerSubmitButton = document.getElementById("signUp");
registerSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    // getting users inputs
    let email = document.getElementById("SignUpEmail").value;
    let password = document.getElementById("Signpass").value;
    let confirmpassword = document.getElementById("confirmPass").value;
    if (typeof auth === "undefined") {
        auth = firebase.auth();
    }

    auth.createUserWithEmailAndPassword(email, password).then(cred=>{
        // sets doc id ac the credential id that is automatically generated
        return db.collection("Users").doc(cred.user.uid).set({
            name: name,
            // allows u to provide other input field to store in the database
        })
    }).then(() => {
        // function that runs when the data successfully added to the database
        registerForm.reset()

    });
});
}


// // log in
// const loginForm = document.getElementById("SignUpEmail"); // Assuming you have a form with the id "login"
// const loginSubmitButton = document.getElementById("Login");
// loginSubmitButton.addEventListener("click", (e) => {
//     e.preventDefault();

//     // Getting user's login credentials
//     let email = document.getElementById("logEmail").value;
//     let password = document.getElementById("logpass").value;

//     // Authenticate the user with Firebase
//     firebase.auth().signInWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             // successful login
//             var user = userCredential.user;
//             console.log("Welcome, " + user.displayName + "!");
//             console.log(user)
//             sessionStorage.setItem('user', JSON.stringify(user));
//             // email verification
//             if (!user.emailVerified) {
//                 user.sendEmailVerification().then(e=> {
//                     console.log("email verification has been sent!");
//                     // console.log(e.message);
//                 }).catch(e=> {
//                     // console.log(e.message);
//                 });
//             }
//             window.location.href = "./university.html"
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.error("Error logging in: " + errorMessage);
//             let newP = document.createElement("p")
//             let tnP = document.createTextNode(errorMessage);
//             newP.appendChild(tnP);
//             newP.style.fontSize = "8px";
//             newP.style.color = "red";
//             document.getElementById("errorField").appendChild(newP);
//         });
// });
