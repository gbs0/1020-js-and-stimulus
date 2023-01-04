import { Sortable } from 'sortablejs'

const results = document.querySelector("#results")

const initSortable = () => {
    Sortable.create(results, {
        animation: 150,
        ghostClass: "ghost",
        onEnd: (event) => {
            alert(`${event.oldIndex} moved to ${event.newIndex}`)
        }
    })
}

export { initSortable }