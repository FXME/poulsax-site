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

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const existing = this.querySelector('.ripple');
            if (existing) {
                existing.remove();
            }
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.width = size + 'px';
            ripple.style.height = size + 'px';
            ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
            ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
            this.appendChild(ripple);
            setTimeout(function() {
                ripple.remove();
            }, 600);
        });
    });
});
