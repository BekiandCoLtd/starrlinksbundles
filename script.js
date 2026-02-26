const cards = document.querySelectorAll(".card");
const ctaBtn = document.getElementById("ctaBtn");
let selectedPackage = null;

cards.forEach(card => {
    card.addEventListener("click", () => {

        // Remove previous selection
        cards.forEach(c => c.classList.remove("selected"));

        // Select current
        card.classList.add("selected");

        selectedPackage = {
            size: card.dataset.size,
            price: card.dataset.price,
            duration: card.dataset.duration
        };

        // Update button text dynamically
        ctaBtn.textContent = `⚡ Get ${selectedPackage.size} (${selectedPackage.duration}) NOW`;
        ctaBtn.classList.remove("disabled");
    });
});

ctaBtn.addEventListener("click", () => {
    if (!selectedPackage) return;

    localStorage.setItem("pkg", 
        `${selectedPackage.size} - Ksh ${selectedPackage.price} (${selectedPackage.duration})`
    );

    window.location.href = "payment.html";
});
// Load selected package title
if (document.getElementById("pkgTitle")) {
    const pkg = localStorage.getItem("pkg");
    document.getElementById("pkgTitle").innerText = pkg || "Selected Package";
}

// Copy to clipboard (smooth)
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
