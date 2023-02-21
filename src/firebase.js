import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDl-4WtY7ODPTEk5En4oUQKN2qe8dJPsBs",
  authDomain: "tawaz-2fe37.firebaseapp.com",
  projectId: "tawaz-2fe37",
  storageBucket: "tawaz-2fe37.appspot.com",
  messagingSenderId: "271781048546",
  appId: "1:271781048546:web:81791f9ea6069df3646ebb",
  measurementId: "G-GVKWCLX3C7",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
