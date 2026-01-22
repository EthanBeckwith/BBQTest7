function contactFunc() {
    document.getElementById("contactModal").style.display = "block";
}

function closeContactModal() {
    document.getElementById("contactModal").style.display = "none";
}

function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    window.scrollTo({
        top: menuSection.offsetTop - navbarHeight,
        behavior: 'smooth'
    });
}

// Close modal when clicking outside of it, fancy stuff
window.onclick = function(event) {
    var modal = document.getElementById("contactModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
