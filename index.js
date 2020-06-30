// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCqhtRH0DTWSuQFc29S56ez9JqhMFqIswQ",
    authDomain: "fir-webapp-1542e.firebaseapp.com",
    databaseURL: "https://fir-webapp-1542e.firebaseio.com",
    projectId: "fir-webapp-1542e",
    storageBucket: "fir-webapp-1542e.appspot.com",
    messagingSenderId: "587655937196",
    appId: "1:587655937196:web:fc1af0ff8651cba1e93309"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

firebase.auth.Auth.Persistence.LOCAL;


function switchView(view) {
    $.get({
            url: view,
            cache: false,
        })
        .then(function(data) {
            $("#container").html(data);
        });
}