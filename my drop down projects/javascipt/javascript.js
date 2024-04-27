let arrow = document.querySelectorAll(".arrow");
let sidebar = document.querySelector(".sidebar");
let homeSection = document.querySelector(".home-section")
let sidebarBtn = document.querySelector(".fa-bars");

for (let i = 0; i < arrow.length; i++) {
   arrow[i].addEventListener("click", handleClick);
    
}

function handleClick(e) {
 let arrowParent = e.target.parentElement.parentElement;
arrowParent.classList.toggle("showmax");
}

sidebarBtn.addEventListener("click", handleClick1);

function handleClick1() {
    sidebar.classList.toggle("close");
    homeSection.classList.toggle("close");
}