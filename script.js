const namesOfComputer =["hp","acer","Dell","samsung","lenovo","Apple"]
document.getElementById("one").innerHTML = namesOfComputer.toString();
document.getElementById("two").innerHTML = namesOfComputer.join(", ")
namesOfComputer.push("asus")
document.getElementById("three").innerHTML = namesOfComputer.join(", ");
namesOfComputer.pop()
document.getElementById("four").innerHTML = namesOfComputer.join(", ")
namesOfComputer.shift()
document.getElementById("five").innerHTML = namesOfComputer.join(", ");
namesOfComputer.unshift("asus")
document.getElementById("six").innerHTML = namesOfComputer.join(", ");
namesOfComputer.splice(2,2,"old dell","old hp")
document.getElementById("seven").innerHTML = namesOfComputer.join(", ");
const computerhardware = ["mouse","keyboard","monitor","sound-box"]
const both = namesOfComputer.concat(computerhardware);
document.getElementById("eight").innerHTML = both.join(", ")
both.sort();
document.getElementById("nine").innerHTML = both.join(", ");
both.reverse();
document.getElementById("ten").innerHTML = both.join(", ");

