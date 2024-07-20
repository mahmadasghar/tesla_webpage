let header = document.getElementById("header");
let ms = document.getElementById("Model S");
let m3 = document.getElementById("Model 3");
let mx = document.getElementById("Model X");
let my = document.getElementById("Model Y");
let model = document.getElementById("models")


ms.onclick = function (){
     header.style.backgroundImage = "url(images/image-1.png)";
     model.innerHTML = "Model S"
}
m3.onclick = function (){
    header.style.backgroundImage = "url(images/image-2.png)";
    model.innerHTML = "Model 3"
}
mx.onclick = function (){
    header.style.backgroundImage = "url(images/image-3.png)";
    model.innerHTML = "Model X"
}
my.onclick = function (){
    header.style.backgroundImage = "url(images/image-4.png)";
    model.innerHTML = "Model Y"
}