var menuIsOpen = false;
var menu = document.getElementById('menu');
var menuBtn = document.getElementById('menu-btn');

var closeMenu = function closeMenu() {
  menu.className = menu.className.replace('left-50', 'left-100');
  menuBtn.innerHTML = 'Menu';
  menuIsOpen = false;
};

var openMenu = function openMenu() {
  menu.className = menu.className.replace('left-100', 'left-50');
  menuBtn.innerHTML = 'Close';
  menuIsOpen = true;
};

window.onload = function () {
  // bind click handler to menu button
  menuBtn.onclick = function (e) {
    e.preventDefault();
    if (menuIsOpen) closeMenu();else
    openMenu();
  };
};

window.onresize = closeMenu;
