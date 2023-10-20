// -------------HEADING ACTIVE LIGHT---------------
var header = document.getElementById("myNavbar");
var btns = header.getElementsByClassName("nav-link");

for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
  });
}

// Get the theme toggle button and the stylesheet link
const brandLogo = document.getElementsByClassName('navbar-brand')[0];
const themeToggle = document.getElementById('theme-toggle');
const stylesheet = document.getElementById('theme-stylesheet');

// Check user's preference from local storage or system settings
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the current theme
document.body.classList.add(currentTheme);
if (currentTheme === 'dark') {
    themeToggle.innerHTML = '<i class="nav-link fa-solid fa-moon" style="color: #FFFFFF;"></i>';
    brandLogo.innerHTML = '<img src="image/white-transparent-logo.png">';
    
}

// Function to toggle the theme
function toggleTheme() {
    if (document.body.classList.contains('light')) {
        document.body.classList.replace('light', 'dark');
        themeToggle.innerHTML = '<i class="nav-link fa-solid fa-moon" style="color: #FFFFFF;"></i>';
        localStorage.setItem('theme', 'dark');
        brandLogo.innerHTML = '<img src="image/white-transparent-logo.png">';
    } else {
        document.body.classList.replace('dark', 'light');
        themeToggle.innerHTML = '<i class="nav-link fa-solid fa-moon" style="color: #1A1A1A;"></i>';
        localStorage.setItem('theme', 'light');
        brandLogo.innerHTML = '<img src="image/black-transparent-logo.png">';
    }
}

// Add an event listener to the theme toggle button
themeToggle.addEventListener('click', toggleTheme);

