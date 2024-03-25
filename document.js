document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const user = document.getElementById('user').value;
        const pass = document.getElementById('pass').value;

        const url = `http://168.194.207.98:8081/tp/login.php?user=${user}&pass=${pass}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.respuesta === "OK") {
                    window.location.href = "lista.html";
                } else {
                    alert(data.mje);
                }
            })
            .catch(error => console.error('Error:', error));
    });
});
