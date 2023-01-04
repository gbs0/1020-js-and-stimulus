import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
    static targets = ["list", "input", "button", "link"]
    
    connect() {
        this.fetchMovies("harry potter")
    }

    insertMovies(array) {
        array.forEach((movie) => {
        const movieTag = `<li class="list-group-item border-0">
            <img src="${movie.Poster}" width="100">
        </li>`
        this.listTarget.insertAdjacentHTML('beforeend', movieTag)
        })
    }

    fetchMovies(query) {
        fetch(`https://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
        .then(response => response.json()) // response.json() = data
        .then(data => this.insertMovies(data.Search))
    }

    search(event) {
        event.preventDefault()
        this.buttonTarget.innerHTML = "Procurando..."
        this.buttonTarget.setAttribute("disabled", "")
        this.linkTarget.classList.remove("d-none")
        this.listTarget.innerHTML = ""
        this.fetchMovies(this.inputTarget.value)
    }

    reset() {
        this.listTarget.innerHTML = ""
        this.buttonTarget.innerHTML = "Enviar"
        this.buttonTarget.removeAttribute("disabled")
        this.linkTarget.classList.add("d-none")
        this.inputTarget.value = ""
    }
}
