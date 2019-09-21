//Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB9ubDZmk37yAK9oQsOVMt3z6sSd030wng",
    authDomain: "miree-web-0001.firebaseapp.com",
    databaseURL: "https://miree-web-0001.firebaseio.com",
    projectId: "miree-web-0001",
    storageBucket: "miree-web-0001.appspot.com",
    messagingSenderId: "249331112930"
  };
  firebase.initializeApp(firebaseConfig);


  //Reference messages collection
  var messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit form
function submitForm(e){
    e.preventDefault();

    //get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var subject = getInputVal('subject');
    var message = getInputVal('message');

    //save message
    saveMessage(name, email, subject, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    }),30000;

    //clear form
    document.getElementById('contactForm').reset();
}

//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save messages to Firebase
function saveMessage(name, email, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name,
        email,
        subject,
        message,
        date: Date()
    });
}



/** Email.send({
    SecureToken : "4e599e8a-ec22-439d-9302-e52e64c9faa9",
    To : 'jpqueirozperez@gmail.com',
    From : $mail,
    Subject : "Asunto: " + $subject,
    Body : $name +  "ha escrito el siguiente mensaje: " + $message
});*/