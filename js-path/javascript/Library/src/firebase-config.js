const config = {
  apiKey: "AIzaSyCrq-Bwzuk0vW91tU7mj1TX1TuKu3sArdE",
  authDomain: "library-48020.firebaseapp.com",
  projectId: "library-48020",
  storageBucket: "library-48020.appspot.com",
  messagingSenderId: "1072818989073",
  appId: "1:1072818989073:web:f17ee1b4929adfecbe29b0",
  measurementId: "G-HBNPN27XKW",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
