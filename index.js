
function getPhotos() {
    fetch("https://picsum.photos/v2/list?limit=100")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
           for(let i = 0; i < data.length; i++){
            let newImg = document.createElement("img");
            let newDiv = document.createElement("div");
            let newPTag = document.createElement("p");
            newPTag.innerHTML = "Author: " + data[i].author;
            newImg.src = data[i].download_url +".jpg";
            newDiv.appendChild(newImg);
            newDiv.appendChild(newPTag);
            newImg.width = "250";
            newImg.height = "250";
            document.body.appendChild(newDiv);
           }
        });

}

getPhotos();
