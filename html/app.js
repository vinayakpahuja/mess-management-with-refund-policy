  /*      
<script src="https://www.gstatic.com/firebasejs/4.13.0/firebase.js"></script>
<script>*/
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDWe5CxGZAQ-6Thu9CTNnl05RKf8GdR_Z4",
    authDomain: "messmanagement-9dff3.firebaseapp.com",
    databaseURL: "https://messmanagement-9dff3.firebaseio.com",
    projectId: "messmanagement-9dff3",
    storageBucket: "",
    messagingSenderId: "971721359176"
  };
  firebase.initializeApp(config);
const outputHeader=document.queryselector("#hotDogOutput");
const inputTextField=document.queryselector("#latesthotDogStatus");
const saveButton=document.queryselector("#savebutton");

saveButton.addEventListener("click",function(){
    const textToSave=inputTextField.value;
    console.log("i am going to save"+ textToSave + " to Firestore");
})

</script>