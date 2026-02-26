const activityText = document.getElementById("activityText");
const progressBar = document.getElementById("progressBar");

const packages = ["5GB","10GB","12.5GB","21GB","50GB"];

function randomPhone(){
    return "07" + Math.floor(100000 + Math.random()*900000)
        .toString().slice(0,3) + "****" + Math.floor(10+Math.random()*90);
}

function updateTicker(){
    const phone = randomPhone();
    const pkg = packages[Math.floor(Math.random()*packages.length)];
    activityText.innerHTML = `${phone} activated <strong>${pkg}</strong> bundle`;
    progressBar.style.width="0%";
    setTimeout(()=>progressBar.style.width="100%",50);
}

if(activityText){
    updateTicker();
    setInterval(updateTicker,3000);
}

function selectPkg(size,price,duration){
    localStorage.setItem("pkg",`${size} - ${price} (${duration})`);
}

function proceed(){
    window.location="payment.html";
}

if(document.getElementById("pkgTitle")){
    document.getElementById("pkgTitle").innerText=
        localStorage.getItem("pkg");
}
