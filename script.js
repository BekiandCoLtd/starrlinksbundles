let selectedPackage = null;

function selectPackage(size, price, duration) {
    selectedPackage = { size, price, duration };
    alert(size + " selected");
}

function goSelected() {
    if (!selectedPackage) {
        alert("Please select a package first.");
        return;
    }
    localStorage.setItem("package", JSON.stringify(selectedPackage));
    window.location.href = "payment.html";
}

if (document.getElementById("packageTitle")) {
    const pkg = JSON.parse(localStorage.getItem("package"));
    if (pkg) {
        document.getElementById("packageTitle").innerText =
            `You've selected: ${pkg.size} - ${pkg.price} (${pkg.duration})`;
    }
}

function copyTill() {
    navigator.clipboard.writeText("8879872");
    alert("Till Number Copied!");
}

function randomPhone() {
    let prefix = "07";
    let mid = Math.floor(1000 + Math.random() * 9000);
    let end = Math.floor(10 + Math.random() * 90);
    return `${prefix}${mid}****${end}`;
}

function updateRecent() {
    const gb = [5,7.5,10,12.5,16,21];
    let randomGB = gb[Math.floor(Math.random() * gb.length)];
    document.getElementById("recentUpdate").innerText =
        `${randomPhone()} increased to ${randomGB}GB – just now`;
}

if (document.getElementById("recentUpdate")) {
    updateRecent();
    setInterval(updateRecent, 3000);
}
