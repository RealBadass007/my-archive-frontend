import axios from 'axios';

//ignoring this file in .gitignore
const arr = window.location.href.split(":");
console.log("Hello from springboot axios url => " + arr[0] + ":" + arr[1]);

export default axios.create({
    baseURL: arr[0] + ":" + arr[1] + "  api"
});