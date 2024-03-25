function cargarUsuarios() {
    const url = 'http://168.194.207.98:8081/tp/lista.php?action=BUSCAR';
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const usuariosTable = document.getElementById('usuariosTable').querySelector('tbody');
            usuariosTable.innerHTML = '';

            if (data.length === 0) {
                alert('No se encontraron usuarios.');
                return;
            }

            data.forEach(usuario => {
                const row = `
                    <tr class="${usuario.bloqueado === 'Y' ? 'bloqueado' : 'no-bloqueado'}">
                        <td>${usuario.id}</td>
                        <td>${usuario.bloqueado === 'Y' ? 'Bloqueado' : 'Desbloqueado'}</td>
                        <td>${usuario.apellido}</td>
                        <td>${usuario.nombre}</td>
                        <td><button onclick="bloquearUsuario(${usuario.id})">Bloquear</button></td>
                        <td><button onclick="desbloquearUsuario(${usuario.id})">Desbloquear</button></td>
                    </tr>
                `;
                usuariosTable.innerHTML += row;
            });
        })
        .catch(error => console.error('Error:', error));
}

function buscarUsuario() {
    const searchTerm = document.getElementById('searchInput').value;
    const url = `http://168.194.207.98:8081/tp/lista.php?action=BUSCAR&usuario=${searchTerm}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const usuariosTable = document.getElementById('usuariosTable').querySelector('tbody');
            usuariosTable.innerHTML = '';

            if (data.length === 0) {
                alert('No se encontraron usuarios.');
                return;
            }

            data.forEach(usuario => {
                const row = `
                    <tr class="${usuario.bloqueado === 'Y' ? 'bloqueado' : 'no-bloqueado'}">
                        <td>${usuario.id}</td>
                        <td>${usuario.bloqueado === 'Y' ? 'Bloqueado' : 'Desbloqueado'}</td>
                        <td>${usuario.apellido}</td>
                        <td>${usuario.nombre}</td>
                        <td><button onclick="bloquearUsuario(${usuario.id})">Bloquear</button></td>
                        <td><button onclick="desbloquearUsuario(${usuario.id})">Desbloquear</button></td>
                    </tr>
                `;
                usuariosTable.innerHTML += row;
            });
        })
        .catch(error => console.error('Error:', error));
}

function bloquearUsuario(idUser) {
    const url = `http://168.194.207.98:8081/tp/lista.php?action=BLOQUEAR&idUser=${idUser}&estado=Y`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            cargarUsuarios();
        })
        .catch(error => console.error('Error:', error));
}

function desbloquearUsuario(idUser) {
    const url = `http://168.194.207.98:8081/tp/lista.php?action=BLOQUEAR&idUser=${idUser}&estado=N`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            cargarUsuarios();
        })
        .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    cargarUsuarios();
});
