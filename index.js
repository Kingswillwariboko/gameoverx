var firebaseConfig = {
    apiKey: "AIzaSyB4Y0aHDR-fb38NTqjRajQiZ1SU2XqW86c",
    authDomain: "game-over-61b3b.firebaseapp.com",
    databaseURL: "https://game-over-61b3b-default-rtdb.firebaseio.com",
    projectId: "game-over-61b3b",
    storageBucket: "game-over-61b3b.appspot.com",
    messagingSenderId: "166963921181",
    appId: "1:166963921181:web:d98e6ed89e0b9e425121f4",
    measurementId: "G-B17Q6BSV5B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');


document.getElementById('contactform').addEventListener('submit', submitForm);



function submitForm(e){
    e.preventDefault();

    var emails = getInputVal('emails')

    saveMessage(emails)
    
    // show content is successful
    document.querySelector('.alert').style.display = 'block';

    //hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    document.getElementById('contactform').reset();
}

function getInputVal(id){
    return document.getElementById(id).value;
}
function saveMessage(emails){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        emails:emails
    });
}