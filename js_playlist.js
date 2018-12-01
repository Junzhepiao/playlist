var album_list = document.getElementById('album_list')
var btn_clear = document.getElementById('click1')
var btn_submit = document.getElementById('click2')
var info_box = document.getElementById('info_box')
var url = `https://lit-fortress-6467.herokuapp.com/object`;
var url2 = `https://lit-fortress-6467.herokuapp.com/post`
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

            img.addEventListener('click',function() {
                let artist = album[i].artist
                let title = album[i].title
                let add = document.createElement('div')
                add.textContent=`${artist}:${title}`
                info_box.appendChild(add)
            } )
        }

    })

btn_clear.addEventListener('click',function() {
    document.getElementById('info_box').textContent='' //remove data
   
})

// Using fetch send post request.
btn_submit.addEventListener('click',function(e) {
    e.preventDefault();
    fetch(url2, {  
    method: 'POST',  
    headers: {  
      'auth': '1234'  
    },  
     body: JSON.stringify({
    'The police': 'Gohost in Machine',
    'Black Uhuru': 'Red',
    'Pink floyed':'The Division Bell',
    'Michael Jackson' : 'Thriller',
    'Adele': '21'
  })
})
.then(function (data) {  
  console.log('Request success: ', data);  //console receive and log a response to the console.
})
.catch(function (error) {  
  console.log('Request failure: ', error);  
});
alert('Post request success!')
})


