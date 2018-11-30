document.getElementById("click").onclick = function () {
    location.href = "playlist.html";    //button link to playlist page.
};

var track1 = document.getElementById('track1')  //set variables for three image box.
var track2 = document.getElementById('track2')
var track3 = document.getElementById('track3')
var url = `https://lit-fortress-6467.herokuapp.com/object`;

fetch (url) //get data
    .then (function (obj) {
            return obj.json();
        })
    .then (function (json){

        let choice_1 = Math.floor((Math.random() * 5)) //select three random number.
        let choice_2 = Math.floor((Math.random() * 5))
        let choice_3 = Math.floor((Math.random() * 5)) 
        
        while (choice_2 === choice_1) {
            choice_2 = Math.floor((Math.random() * 3)) // make sure choice 2 is a different number.
        }        
        
        while (choice_3 === choice_1 ||choice_3 === choice_2) {
            choice_3 = Math.floor((Math.random() * 3)) // make sure choice 3 is a different number.
        }

        let album = json.results
        let src_1 = album[choice_1].cover_art   //source link for each of the image.
        let src_2 = album[choice_2].cover_art
        let src_3 = album[choice_3].cover_art
        
        track1.src=`images/${src_1}`    // edit image link to each image box.
        track2.src=`images/${src_2}`
        track3.src=`images/${src_3}`
    })

    