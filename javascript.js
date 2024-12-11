const dropArea = document.getElementById('dropArea');
const inputfile = document.getElementById('input-file');
const imageview = document.getElementById('img-view');

inputfile.addEventListener("change", uploadImage);
function uploadImage() {
let imagelink = URL.createObjectURL(inputfile.files[0]);
imageview.style.backgroundImage = `URL(${imagelink})`;
imageview.textContent ="";
imageview.style.border = 0;
}

dropArea.addEventListener("dragover", function(e) {
    e.preventDefault();
});

dropArea.addEventListener("drop", function(e) {
    e.preventDefault();
    
});
