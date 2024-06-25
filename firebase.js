//Your web app's Firebase configuration
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

//

//let contactFormDB = firebase.database().ref('contact-form');


let registerForm = firebase.database().ref('register');

console.log('reg');
console.log(document.getElementById('registerForm'));

document.getElementById('registerForm').addEventListener('submit', submitRegisterFunction);

function getAllUsers() {
    console.log('in');
    registerForm.orderByKey().on('child_added', (snapshot) => {
        if (snapshot.exists()) {
            // if there is some data
            snapshot.forEach((x) => {
                console.log(`${x.key} - ${x.val()}`);
            })
        } else {
            console.log('not correct data');
        }
    })
}

function submitRegisterFunction(e) {
    e.preventDefault();
    getAllUsers();
    let username = getElementValue('username');
    let email = getElementValue('email');
    let password = getElementValue('password');
    let confirmedPassword = getElementValue('confirm-password');
    console.log(username);
    console.log(password);

    saveRegisterForm(username, email, password, confirmedPassword);

    document.getElementById('registerForm').reset();

}
const saveRegisterForm = (username, email, password, confirmedPassword) => {
    // unique key
    let newContactForm = registerForm.push();

    // add in the database
    newContactForm.set({
        username: username,
        email: email,
        password: password,
        confirmedPassword: confirmedPassword,
    });
};




const getElementValue = (id) => {
    return document.getElementById(id).value;
}

function ifSubmited() {
    alert('You have created you account');
    // location.replace("http://127.0.0.1:5501/LogIn%20Page/LogIn.html")
}



