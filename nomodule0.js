let test = document.getElementById("test")
console.log(test);

import {name , lastName, nickName} from "./nomodule1"

document.getElementById("name").innerHTML = name
document.getElementById("lastname").innerHTML = lastName
document.getElementById("nickname").innerHTML = nickName
