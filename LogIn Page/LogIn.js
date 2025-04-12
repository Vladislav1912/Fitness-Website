document.getElementById('LogIn').addEventListener('submit', loginUser);

function loginUser(e) {
    e.preventDefault(); 

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;


    let dbRef = firebase.database().ref('users'); 

    dbRef.orderByChild('username').equalTo(username).once('value', (snapshot) => {
        if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
                let userData = childSnapshot.val();
                console.log("User found:", userData);

                if (userData.password === password) {
                    alert("Login successful!");
                    
                    window.location.href = "../HomePage/HomePage.html"; 
                } else {
                    showError("Incorrect password!");
                }
            });
        } else {
            showError("No account found with this username.");
        }
    });
}

