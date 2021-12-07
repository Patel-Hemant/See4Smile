// fetch('https://icanhazdadjoke.com/slack')
//     .then(data => data.json())
//     .then(jokeData => {
//         const jokeText = jokeData.attachments[0].text;
//         const jokeElement = document.getElementById('jokeElement');
        
//         jokeElement.innerHTML = jokeText;
//     })


fetch('https://meme-api.herokuapp.com/gimme')
    .then(response => response.json())
    .then(jokeData => {
        const meme_url = jokeData.url;
        
        var meme_img = document.getElementById('memeImage');
        var newImg = new Image;
        newImg.onload = function() {
            meme_img.src = this.src;
        }
        newImg.src = meme_url;
    })