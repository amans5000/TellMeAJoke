const jokeContainer = document.querySelector(".joke");
const button = document.querySelector("#button");

let getJoke = () => {
    button.innerHTML = "One More";
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
        .then(data => data.json())
        .then(item => {
            jokeContainer.innerHTML = `${item.joke}`;
        });
}

button.onclick = getJoke;