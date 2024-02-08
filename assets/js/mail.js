const firebaseConfig = {
  apiKey: "AIzaSyDzbZD9m2_TXDLyJfFk8nmM4PS3eNCzcLM",
  authDomain: "manag-ad976.firebaseapp.com",
  databaseURL: "https://manag-ad976-default-rtdb.firebaseio.com",
  projectId: "manag-ad976",
  storageBucket: "manag-ad976.appspot.com",
  messagingSenderId: "664144468111",
  appId: "1:664144468111:web:f81cc9d520a325435df8fa",
  measurementId: "G-N8NZ5F6E6W"
  };

  
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var phoneNumber = getElementVal("phoneNumber");
    var emailid = getElementVal("emailid");
    var countGuests = getElementVal("countGuests");
    var msgContent = getElementVal("msgContent");
    var datetime = getElementVal("datetime");
    var occasion = getElementVal("occasion");

    
    

    
  
    saveMessages(name, phoneNumber, emailid, countGuests,  msgContent, datetime, occasion);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert                                                                                                 
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, phoneNumber, emailid, countGuests,  msgContent, datetime, occasion,) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      phoneNumber: phoneNumber,
      emailid: emailid,
      countGuests:countGuests,
      msgContent: msgContent,
      datetime,
      occasion,
      
      
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };





