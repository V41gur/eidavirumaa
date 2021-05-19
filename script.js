let sporobisohraneniya = document.querySelector(".sporobisohraneniya")
let sporobisohraneniyabutton = document.querySelector("#sposobi")
let celbutton = document.querySelector("#cel")
let contactbutton = document.querySelector("#contact")
let nashacel = document.querySelector(".nashacel")
let contacti = document.querySelector(".contactnaya")
let igributton = document.querySelector("#igri")
let igri = document.querySelector(".igri_con")

igri.style.display = 'none';
sporobisohraneniya.style.display = 'none';
nashacel.style.display = 'none';
contacti.style.display = 'none';

sporobisohraneniyabutton.addEventListener("click", function() {
    sporobisohraneniya.style.display = 'block';
    igri.style.display = 'none';
    contacti.style.display = 'none';
    nashacel.style.display = 'none';
})

celbutton.addEventListener("click", function() {
    sporobisohraneniya.style.display = 'none';
    nashacel.style.display = 'block';
    igri.style.display = 'none';
    contacti.style.display = 'none';
})

contactbutton.addEventListener("click", function() {
    sporobisohraneniya.style.display = 'none';
    igri.style.display = 'none';
    contacti.style.display = 'block';
    nashacel.style.display = 'none';
})

igributton.addEventListener("click", function() {
    sporobisohraneniya.style.display = 'none';
    igri.style.display = 'block';
    contacti.style.display = 'none';
    nashacel.style.display = 'none';
})

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}