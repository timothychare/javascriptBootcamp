fetch("https://api.tronalddump.io/random/quote", {
        "method": "GET",
        "headers": {
            "accept": "application/hal+json"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });

// curl --request GET \
// --url 'https://api.tronalddump.io/random/quote' \
// --header 'Accept: application/hal+json'

const userAction = async () => {
    const response = await fetch('http://example.com/movies.json');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
}