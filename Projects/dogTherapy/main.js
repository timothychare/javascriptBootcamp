var image = document.querySelector('.dog-image');

function fetchDog() {
    console.log("click registered")
    console.log(image);
    fetch('https://dog.ceo/api/breeds/image/random').then(response => {
        return response.json();
        console.log(response.json())
    }).then(jsonResponse => {
        console.log("before", image.src);
        console.log(jsonResponse.message);
        image.src = jsonResponse.message;
        console.log("after", image.src);
    })
}






// my scratch work
// var newDogButton = document.querySelector('.newDogButton');

// newDogButton.addEventListener('click', getDog);

// var endpoint = 'https://dog.ceo/api/breeds/image/random';

// function getDog() {
//     fetch(endpoint)
//     .then(response => {
//         console.log(response);
//         return response.json();
//     }).then(function (data) {
//         console.log(data.message);
//         displayDog(data.message);
//     })
//     .catch(err => {
//         console.error(err);
//     });
// };

// function displayDog(dogPic) {
//     var corgiSploot = document.querySelector('.dog-image');
//     corgiSploot = dogPic;
// }

// getDog();