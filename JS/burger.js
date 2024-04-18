document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger-btn').addEventListener('click', function() {
        var menu = document.querySelector('.menu');
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
            menu.style.transition = 'opacity 0.5s ease-in-out';
            menu.style.opacity = '1';
        }
    });
});