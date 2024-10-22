
const firebaseConfig = {
  apiKey: "AIzaSyB1CiE4RFJqguO3r1zAeLZUiTkCqjmX9QI",
  authDomain: "wish-app-cf085.firebaseapp.com",
  databaseURL: "https://wish-app-cf085-default-rtdb.firebaseio.com",
  projectId: "wish-app-cf085",
  storageBucket: "wish-app-cf085.appspot.com",
  messagingSenderId: "532132091634",
  appId: "1:532132091634:web:bc21a73df11393c285626b"
};


  
 
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // reference your database
    var wanaouwnWishDB = firebase.database().ref("wishDatabase");

    document.getElementById("wanaownWishForm").addEventListener("submit", submitForm);

    function submitForm(e) {
        e.preventDefault();

      
        var firstName = getElementVal("firstname");
        var lasttName = getElementVal("lastname");
        var age = getElementVal("age");
        var gender = getElementVal("gender");
        var email = getElementVal("email");
        var phoneNumber = getElementVal("number");
        var region = getElementVal("region");
        var msgWish = getElementVal("wishMessage");

        saveMessages(firstName, lasttName, age, gender, msgWish, email, phoneNumber, region);

        //   enable alert
        document.querySelector(".alertemma").style.display = "block";     
              

       function myTimer() {
        document.querySelector(".alertemma").style.display = "none";
        location.reload()         
      }

      sendSms(phoneNumber);

      setTimeout(myTimer, 3000);

        
      }

    const saveMessages = (firstName, lasttName, age, gender, msgWish, email, phoneNumber, region ) => {
      var newWanaouwnWishDB = wanaouwnWishDB.push();
    
      newWanaouwnWishDB.set({
        FirsrName: firstName,
        LasttName: lasttName,
        Age: age,
        Gender: gender,
        Wish: msgWish,
        Email: email,
        PhoneNumber: phoneNumber, 
        Region: region
      });
    };

    function sendSms(rNumber)
        {
          // SEND SMS
          // const axios = require('axios');
          const data = {"sender": "Wanaown.us",
                        "message": "Thank you for placing your wish with us. You will be contacted if your wish is selected for redemption. Wanaown, make it happen!",
                        "recipients": [rNumber]};

          const config = {
            method: 'post',
            url: 'https://sms.arkesel.com/api/v2/sms/send',
            headers: {
              'api-key': 'OmhsZWEyZUxoRjdScVRZMUo='
            },
            data : data
          };

          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
       }
    
    const getElementVal = (id) =>{
        return document.getElementById(id).value;
    };  