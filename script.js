let togglebutton = document.getElementById("togglebtn");
let bgcolortoggle = document.getElementById("skew");
let navbar=document.getElementById("navbar")
let linkinskew1=document.getElementById("linkinskew1")
let linkinskew2=document.getElementById("linkinskew2")
let linkinskew3=document.getElementById("linkinskew3")


togglebutton.addEventListener("click", function () {
    if (bgcolortoggle.style.backgroundColor == "#07112D" || togglebutton.innerHTML == "Light") {
        togglebutton.innerHTML = "Dark";
        togglebutton.style.backgroundColor = "#07112D"
        togglebutton.style.color = "white"
        bgcolortoggle.style.backgroundColor = "#F1F4FF"
        bgcolortoggle.style.color="#07112D"
        linkinskew1.style.color="#07112D"
        linkinskew2.style.color="#07112D"
        linkinskew3.style.color="#07112D"
        
    } else {
        togglebutton.innerHTML = "Light";
        togglebutton.style.backgroundColor = "white";
        togglebutton.style.color="#07112D"
        bgcolortoggle.style.backgroundColor = "#07112D"
        bgcolortoggle.style.color="White"
        linkinskew1.style.color="white"
        linkinskew2.style.color="white"
        linkinskew3.style.color="white"
    }
})