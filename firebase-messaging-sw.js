importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyAJaem6u4rh34NG22EaH4LUHcKl91Hcnhk",
    authDomain: "expanded-system-413205.firebaseapp.com",
    projectId: "expanded-system-413205",
    storageBucket: "expanded-system-413205.appspot.com",
    messagingSenderId: "462694923933",
    appId: "1:462694923933:web:5b31928f32ec80651a5e74",
    measurementId: "G-XY1X6RV9FJ"
  };
firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});