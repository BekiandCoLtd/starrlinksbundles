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
