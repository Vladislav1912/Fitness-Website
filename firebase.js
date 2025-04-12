// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9bRs4Msnj_g1zbwLXnaalvE8aJpbC3Dg",
    authDomain: "register-wizztech-programs.firebaseapp.com",
    databaseURL: "https://register-wizztech-programs-default-rtdb.firebaseio.com",
    projectId: "register-wizztech-programs",
    storageBucket: "register-wizztech-programs.appspot.com",
    messagingSenderId: "1054913644967",
    appId: "1:1054913644967:web:85d5154980706923088e82"
};


firebase.initializeApp(firebaseConfig);
console.log("Firebase initialized:", firebase.apps.length > 0);

const registerFormDB = firebase.database().ref('register');

console.log("Database reference:", registerFormDB);

const getElementValue = (id) => document.getElementById(id).value;


const saveRegisterForm = (username, email, password, confirmedPassword) => {
    let newRegister = registerFormDB.push();
    newRegister.set({
        username: username,
        email: email,
        password: password,
        confirmedPassword: confirmedPassword
    }).then(() => {
        console.log("Data saved successfully!");
        alert('You have successfully created an account!');
        document.getElementById('registerForm').reset();
    }).catch((error) => {
        console.error("Error saving data:", error);
        alert("Error saving data: " + error.message);
    });
};

const submitRegisterFunction = (e) => {
    e.preventDefault();

    

    let username = getElementValue('username');
    let email = getElementValue('email');
    let password = getElementValue('password');
    let confirmedPassword = getElementValue('confirm-password');

    
    if (password !== confirmedPassword) {
        alert("Passwords do not match!");
        return;
    }

    saveRegisterForm(username, email, password, confirmedPassword);
};

window.onload = function () {
    document.getElementById('registerForm').addEventListener('submit', submitRegisterFunction);
};
