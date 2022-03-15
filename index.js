let test = document.getElementById("test")
console.log(test);
let nameTest = "Chawintee"
document.getElementById("test").innerHTML = nameTest

import {name , lastName, nickName} from "./name.js"
console.log({name , lastName, nickName});
let nameA = document.getElementById("name").innerHTML 
console.log(nameA); 
nameA = name
document.getElementById("name").innerHTML = name
document.getElementById("lastname").innerHTML = lastName 
document.getElementById("nickname").innerHTML = nickName 