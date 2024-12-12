utb utb:    https://www.youtube.com/watch?v=5XhxR9Vs6zc

1.  Create a repo named    github.io
2.  add 3 files to repo    display the local Date and Time and a Welcome Message " Hello from stukannn" as follows:
   2.1  Create index.html
   2.2  Create styles.css
   2.3  Create script.js

index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Stukann's Page</title>
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
</head>
<body>
    <h1>Hello from stukannn</h1>
    <p id="datetime"></p>
</body>
</html>

styles.css
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
}

h1 {
    color: #333;
}

#datetime {
    font-size: 1.2em;
    color: #666;
}

script.js
function updateDateTime() {
    const now = new Date();
    const datetimeElement = document.getElementById('datetime');
    datetimeElement.textContent = `Local Date and Time: ${now.toLocaleString()}`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    updateDateTime();
    setInterval(updateDateTime, 1000); // Update every second
});

