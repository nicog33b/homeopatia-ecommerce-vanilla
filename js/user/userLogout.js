
const userLogoutBtn = () =>{
    document.getElementById('userLogoutBtn').addEventListener('click', function() {
        localStorage.clear();
        location.reload()
   
        });
} 

const guestUser = () => {
    const status = localStorage.getItem('status');
    if (status === null || status === undefined) {
      document.getElementById('userButton').textContent = 'Registrarse';
    }
  }