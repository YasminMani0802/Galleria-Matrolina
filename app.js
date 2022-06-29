import pictures from "../Data/pictures.js";

function displayPictures(picturesArray){
    const container = document.getElementById('pictures-container');
    let html = '';
    picturesArray.forEach(item => {
        html += `<div class="card h-100" style="width: 18rem;">
                   <img src="${item.getImage()}" class="card-img-top" alt="${item.getImage()}">
                   <div class="card-body">
                       <h5 class="card-title">${item.getName()}  </h5>
                       <p class="card-text">${item.getArtist()}</p>
                       <p class="card-text">${item.getPrice()}</p>
                       <p class="card-text">${item.inStock}</p>
                   </div>
               </div>`;
    });
    container.innerHTML = html;
};
displayPictures(pictures);

window.searchPicture = function (){
    const search = document.getElementById('search-field');
    const searchField = search.value.trim();
    const searchResult = pictures.filter(picture => {
        return picture.name.toLowerCase().includes(searchField.toLowerCase())
    });
    displayPictures(searchResult);
};