function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = `Local Date and Time: ${now.toLocaleString()}`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateDateTime();
    setInterval(updateDateTime, 1000); // Update every second
});
