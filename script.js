function validateID() {
    const id = document.getElementById('playerID').value;
    const zone = document.getElementById('zoneID').value;
    const btn = document.getElementById('valBtn');
    const nameDisplay = document.getElementById('playerName');
    const nameSpan = document.getElementById('targetName');

    if (id.length < 5 || zone.length < 3) {
        alert("Please enter a valid Player ID and Zone");
        return;
    }

    btn.innerText = "Checking...";
    
    // Simulate API Call
    setTimeout(() => {
        btn.innerText = "Verified";
        btn.style.background = "#22c55e";
        nameSpan.innerText = "User_" + id.substring(0, 4); // Fake name for now
        nameDisplay.classList.remove('hidden');
    }, 1500);
}
