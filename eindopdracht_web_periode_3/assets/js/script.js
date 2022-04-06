const toggleBtn = document.getElementById("toggleBtn"); //for hamburger menu
const navList = document.getElementById("navList");

toggleBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});

var dropdown = document.getElementsByClassName("dropdown-btn"); //for dropdown menu

var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function (event)
   {event.preventDefault();
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
      return false;
    } else {
      dropdownContent.style.display = "block";
      return false;
    }
  });
}

// for image changes

let image1 = document.querySelector('#image1');
function swap(e){
  let mainImage = document.querySelector('#mainImage');
  mainImage.src = e.src;
}


