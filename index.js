document.querySelector('#btnRegister').addEventListener('click', (event) => {
    fetch("components/registration.html")
    .then(response => response.text())
    .then(html => {
        const objScript = document.createElement('script');
        objScript.src = 'js/registration.js'; 
        objScript.type = 'text/javascript';
        document.head.appendChild(objScript);
        document.querySelector('#headerLanding').style.display = 'none';
        document.querySelector('#divTopLanding').innerHTML = '';
        document.querySelector('#divTopLanding').innerHTML = html;
        document.querySelector('#divRegistration').style.display = 'block';
       
    })
    .catch(error => console.error("Error fetching chart:", error));
});
