import { JokeService } from "./jokeservice.js"

const jokeText = document.getElementById("joke-text")
const jokeButton = document.getElementById("joke-button")

jokeButton.addEventListener('click', async () => {
    const joke = await JokeService.get()
    jokeText.innerText = joke
})
