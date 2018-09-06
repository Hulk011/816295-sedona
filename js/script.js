var link = document.querySelector(".searching-button");
var formopen = document.querySelector(".searching");        
        
link.addEventListener("click", function(evt) {
    evt.preventDefault();
    formopen.classList.toggle("searching-script");        
    console.log(formopen.classList);
});
     