var last_changed_text = document.getElementById("changing_text_4");

function changingText() {
    var buttons = document.getElementsByTagName("button");
    var activeButton = null;
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains("active")) {
            activeButton = buttons[i];
            break;
        }
    }

    if (activeButton) {
        var slide = activeButton.getAttribute("data-bs-slide-to");
        var change_text = document.getElementById("changing_text_" + slide);

        if (change_text !== last_changed_text) {
            last_changed_text.style.display = "none";
            change_text.style.display = "block";
            last_changed_text = change_text;
        }
    } 
}
//Change text based on the displayed photo of the carousel



document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('Linkedin_button');
    button.addEventListener('click', function() {
        var url = 'https://www.linkedin.com/in/braha-adrian-3a5581301/';
        window.open(url, '_blank');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('Github_button');
    button.addEventListener('click', function() {
        var url = 'https://github.com/AdrianBraha/Personal_Projects.git';
        window.open(url, '_blank');
    });
});

document.getElementById('icon-container').addEventListener('click', function() {
    const navBar = document.getElementById('nav_bar');
    
    if (navBar.style.left === "0px") {
        navBar.style.left = "-280px"; // Collapse the nav bar
    } else {
        navBar.style.left = "0"; // Expand the nav bar
    }
});



//animation
function showMainContent() {
    document.querySelector('.animation-container').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}



//main
document.addEventListener('DOMContentLoaded', () => {setTimeout(showMainContent, 5000);});
setInterval(changingText, 1000);

