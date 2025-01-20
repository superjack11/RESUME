document.addEventListener('DOMContentLoaded', () => {
    const dropBtn = document.querySelector('.dropbtn');
    const dropContent = document.querySelector('.dropdown-content');
    
    dropBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropContent.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropContent.contains(e.target) && !dropBtn.contains(e.target)) {
            dropContent.classList.remove('show');
        }
    });
});