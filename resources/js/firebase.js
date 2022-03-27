$(document).ready(function() {
    
    const firebaseConfig = {
        apiKey: "AIzaSyDn02xZxaJT7jhJxtyYQaHime2z_Fgv1vs",
        authDomain: "mobilemoney-d208c.firebaseapp.com",
        databaseURL: "https://mobilemoney-d208c.firebaseio.com",
        projectId: "mobilemoney-d208c",
        storageBucket: "mobilemoney-d208c.appspot.com",
        messagingSenderId: "1057078884949",
        appId: "1:1057078884949:web:693df73557136db32572dc",
        measurementId: "G-JWXP0493L4"
    };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    // const analytics = firebase.analytics();

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': function (response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            console.log('recaptcha resolved');
        }
    });
    onSignInSubmit();
});



function onSignInSubmit() {
    $('#verifPhNum').on('click', function() {
        let phoneNo = '';
        var code = $('#codeToVerify').val();
        console.log(code);
        $(this).attr('disabled', 'disabled');
        $(this).text('Processing..');
        confirmationResult.confirm(code).then(function (result) {
                    alert('Succecss');
            var user = result.user;
            console.log(user);
    
    
            // ...
        }.bind($(this))).catch(function (error) {
        
            // User couldn't sign in (bad verification code?)
            // ...
            $(this).removeAttr('disabled');
            $(this).text('Invalid Code');
            setTimeout(() => {
                $(this).text('Verify Phone No');
            }, 2000);
        }.bind($(this)));
    
    });
    
    
    $('#getcode').on('click', function () {
        var phoneNo = $('#number').val();
        console.log(phoneNo);
        // getCode(phoneNo);
        var appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNo, appVerifier)
        .then(function (confirmationResult) {
    
            window.confirmationResult=confirmationResult;
            coderesult=confirmationResult;
            console.log(coderesult);
        }).catch(function (error) {
            console.log(error.message);
    
        });
    });
}



// function getCode(phoneNumber) {
//     var appVerifier = window.recaptchaVerifier;
//     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//         .then(function (confirmationResult) {
//             console.log(confirmationResult);
//             // SMS sent. Prompt user to type the code from the message, then sign the
//             // user in with confirmationResult.confirm(code).
//             window.confirmationResult = confirmationResult;
//             $('#getcode').removeAttr('disabled');
//             $('#getcode').text('RESEND');
//         }).catch(function (error) {
            
//             console.log(error);
//             console.log(error.code);
//             // Error; SMS not sent
//             // ...
//         });
//   }  