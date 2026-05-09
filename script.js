// Este script identifica qual página está aberta e destaca o botão correspondente
document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = location.pathname.split("/").slice(-1)[0];
    const menuItems = document.querySelectorAll(".icon-btn");

    menuItems.forEach(item => {
        if (item.getAttribute("href") === currentLocation) {
            item.style.border = "2px solid black";
            item.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";
        }
    });
});