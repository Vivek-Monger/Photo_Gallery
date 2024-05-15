let images = Array.from(document.getElementsByClassName("smImg"));
let mainPhoto = document.getElementById("mainPhoto");
let slideIndex = 0;

function updateImage(event) {
    let image = event.target;
    mainPhoto.src = image.src;
}

images.forEach(function(image) {
    image.addEventListener("click", updateImage);
});
