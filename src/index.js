// TO-DO!
// import { initSortable } from "./plugins/sortable"

// const form = document.querySelector("#search-form")
// const input = document.querySelector("#search-input")
// const results = document.querySelector("#results")

// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     results.innerHTML = ""
//     fetchMovies(input.value)
// })

// const insertMovies = (array) => {
//     array.forEach((movie) => {
//       const movieTag = `<li class="list-group-item border-0">
//           <img src="${movie.Poster}" width="100">
//       </li>`
//       results.insertAdjacentHTML('beforeend', movieTag)
//     })
// }

// const fetchMovies = (query) => {
//     fetch(`https://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
//     .then(response => response.json()) // response.json() = data
//     .then(data => insertMovies(data.Search))
// }

// initSortable()

// console.dir(results)

// fetchMovies("harry potter")

import { Application } from "@hotwired/stimulus"
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers"

window.Stimulus = Application.start()
const context = require.context("./controllers", true, /\.js$/)
Stimulus.load(definitionsFromContext(context))