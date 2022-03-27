  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDn02xZxaJT7jhJxtyYQaHime2z_Fgv1vs",
    authDomain: "mobilemoney-d208c.firebaseapp.com",
    projectId: "mobilemoney-d208c",
    storageBucket: "mobilemoney-d208c.appspot.com",
    messagingSenderId: "1057078884949",
    appId: "1:1057078884949:web:693df73557136db32572dc",
    measurementId: "G-JWXP0493L4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);