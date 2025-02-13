import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAAzlnTVSMcI7ed8tRhyhGd-TLIlRiwBKA",
    authDomain: "sell-6caea.firebaseapp.com",
    databaseURL: "https://sell-6caea-default-rtdb.firebaseio.com",
    projectId: "sell-6caea",
    storageBucket: "sell-6caea.firebasestorage.app",
    messagingSenderId: "329022206592",
    appId: "1:329022206592:web:b1d8bd56064febf520ec65",
    measurementId: "G-RGT7SDKWRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };