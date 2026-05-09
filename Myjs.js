
function orderMsg(carName) {
    alert("Thank you! Your inquiry for " + carName + " has been received. Our team will contact you soon.");
}


function toggleLike(btn) {
    if (btn.innerHTML === "Like ❤️") {
        btn.innerHTML = "Liked! 🔥";
        btn.style.backgroundColor = "#ff4757"; 
    } else {
        btn.innerHTML = "Like ❤️";
        btn.style.backgroundColor = "#4682B4"; 
    }
}

console.log("Luxury Motors Web System Active");