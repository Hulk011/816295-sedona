var link = document.querySelector(".searching-button");
var formOpen = document.querySelector(".searching");        
        
link.addEventListener("click", function(evt) {
    evt.preventDefault();
    formOpen.classList.toggle("searching-script");        
    console.log(formOpen.classList);
});
     