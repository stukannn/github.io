'''


function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = `Local Date and Time: ${now.toLocaleString()}`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateDateTime();
    setInterval(updateDateTime, 1000); // Update every second
});

'''

function updateDateTime() {
    const now = new Date();
    const localDatetimeElement = document.getElementById('local-datetime');
    const laDatetimeElement = document.getElementById('la-datetime');

    // Local date and time
    localDatetimeElement.textContent = `Local Date and Time: ${now.toLocaleString()}`;

    // Los Angeles date and time
    const laTimeZone = 'America/Los_Angeles';
    const laDatetime = new Date(now.toLocaleString('en-US', { timeZone: laTimeZone }));
    laDatetimeElement.textContent = `Los Angeles Date and Time: ${laDatetime.toLocaleString()}`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateDateTime();
    setInterval(updateDateTime, 1000); // Update every second
});
