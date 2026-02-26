// ===== Package Selection =====
const cards = document.querySelectorAll(".card");
const ctaBtn = document.getElementById("ctaBtn");
let selectedPackage = null;

if (cards.length) {
    cards.forEach(card => {
        card.addEventListener("click", () => {

            cards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");

            selectedPackage = {
                size: card.dataset.size,
                price: card.dataset.price,
                duration: card.dataset.duration
            };

            ctaBtn.textContent =
                `⚡ Get ${selectedPackage.size} (${selectedPackage.duration}) NOW`;

            ctaBtn.classList.remove("disabled");
        });
    });

    ctaBtn.addEventListener("click", () => {
        if (!selectedPackage) return;

        localStorage.setItem("pkgData", JSON.stringify(selectedPackage));
        window.location.href = "payment.html";
    });
}

// ===== Activity Ticker =====
const activityText = document.getElementById("activityText");
const progressBar = document.getElementById("progressBar");
const packages = ["5GB","10GB","12.5GB","21GB","30GB","50GB"];

function randomPhone(){
    return "07" + Math.floor(100000 + Math.random()*900000)
        .toString().slice(0,3) + "****" + Math.floor(10+Math.random()*90);
}

function updateTicker(){
    if (!activityText) return;

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

// ===== Payment Page Dynamic Text =====
if (document.getElementById("selectedPackageTitle")) {

    const pkgData = JSON.parse(localStorage.getItem("pkgData"));

    if (pkgData) {
        document.getElementById("selectedPackageTitle").innerText =
            `${pkgData.duration} - ${pkgData.size} (Ksh ${pkgData.price})`;
    }
}

// ===== Copy Button =====
const copyBtn = document.getElementById("copyBtn");

if (copyBtn) {
    copyBtn.addEventListener("click", () => {
        const till = document.getElementById("tillNumber").innerText;
        navigator.clipboard.writeText(till);

        copyBtn.textContent = "Copied ✓";
        copyBtn.classList.add("copied");

        setTimeout(() => {
            copyBtn.textContent = "Copy";
            copyBtn.classList.remove("copied");
        }, 2000);
    });
}
