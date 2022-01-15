let name = "Liam Zacher";
document.querySelector("#name").textContent = name;
const d = new Date();
let year = d.getFullYear();
document.querySelector("#year").textContent = year;
let me = "ItsMeLiam.jpg";
let src = "src";
document.querySelector("#MyFace").setAttribute(src, me);
let food = ["pizza", "sushi", "enchiladas", "lasgana"];
for(let x of food) {
    document.querySelector("#food").textContent+= x+", "
}
let bonus = "ice cream"
food.push(bonus)
document.querySelector("#food")=""
for(let x of food) {
    document.querySelector("#food").textContent+= x+", "
}
food.shift()
document.querySelector("#food")=""
for(let x of food) {
    document.querySelector("#food").textContent+= x+", "
}
food.pop()
document.querySelector("#food")=""
for(let x of food) {
    document.querySelector("#food").textContent+= x+", "
}
