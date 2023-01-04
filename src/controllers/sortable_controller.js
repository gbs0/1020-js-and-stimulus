import { Controller } from '@hotwired/stimulus'
import { Sortable } from 'sortablejs'

export default class extends Controller {
    static targets = ["results"]
    connect() {
        this.initSortable()
    }

    initSortable() {
        Sortable.create(this.resultsTarget, {
            animation: 150,
            ghostClass: "ghost",
            onEnd: (event) => {
                alert(`${event.oldIndex} moved to ${event.newIndex}`)
            }
        })
    }
}