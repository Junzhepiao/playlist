var album_list = document.getElementById('album_list')
var url = `https://lit-fortress-6467.herokuapp.com/object`;

fetch (url) //get data
    .then (function (obj) {
            return obj.json();
        })
    .then (function (json){

        let album = json.results
        for (let i = 0; i <album.length; i++ ) {
            let pic_src = album[i].cover_art
            let div_image = document.createElement('div')
            div_image.classList.add("image_box");
            let img = document.createElement('img')
            img.src = `images/${pic_src}`
            div_image.appendChild(img)
            album_list.appendChild(div_image)
        }
    })






    // document.getElementById("myForm").reset();