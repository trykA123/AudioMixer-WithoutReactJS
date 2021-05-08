import Ampflify, { Storage } from "aws-amplify";
import awsconfig from "./aws-exports";



Ampflify.configure(awsconfig);

document.getElementById('just-upload').addEventListener('submit', function(e) {
    e.preventDefault();
    const file = document.getElementById('just-upload').files[0];
    console.log(file);
})