#  create and update Github Pages site
https://github.com/stukannn/github.io

--------------------------------------------------------------------------------------------------------------------
B.   Build & Deployment of Github.io Pages repo
b1.  select & open Github.io > Settings > Pages

      if build      - 1.  the original branch is empty
                      2.  must refresh branch by a clicking cycle of: 'none' + 'Save', and then, 'main' + 'Save'.
      if deployment - 1.  the original branch has all the necessary data
                      2.  goto Settings > Pages > Action, wait till the deployment is completed
                      3.  goto Settings > Pages . Visit site to open stukannn's Github.io Pages site
--------------------------------------------------------------------------------------------------------------------

A.   Create Github Pages site for vantjkan account in github :

1.   Create a repo named in vantjkan account named  'github.io'
     Log-in Github vantjkan & Open Dashboard page:  click  New  button    
      1.1   https://github.com/new page is opened, and enter the following entries
     
      1.2   Repository name     github.io
                          public
     
                          select - Add a README.md file
     
                          Choose - a license   MIT License
                        
      1.3    Click  Create repository  button

3.  add 3 files to repo
   
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
    <h1>Hello from stukann</h1>
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
