document.addEventListener('DOMContentLoaded', function() {
    const serverOptions = document.querySelectorAll('.server-option');
    serverOptions.forEach(option => {
    option.addEventListener('click', function() {
        serverOptions.forEach(srv => {
        srv.classList.remove('active');
        });
        this.classList.add('active');
    });
    });
});