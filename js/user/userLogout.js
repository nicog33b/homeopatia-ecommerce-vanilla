
const userLogoutBtn = () =>{
    document.getElementById('userLogoutBtn').addEventListener('click', function() {
        localStorage.clear();
        document.getElementById('userButton').textContent='Registrarse';
        
        });
} 