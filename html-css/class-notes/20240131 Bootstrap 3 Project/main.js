function loadFAQ() {
    const div = document.createElement('div')
    div.classList.add('container')
    // <div class='container'></div>

    div.innerHTML = `
        <h2 class="text-center mb-4">Frequently Asked Questions</h2>

        <div class="accordion accordion-flush" id="questions">
            ${faqList.map((item, index) => {
                const question = item.question
                const answer = item.answer

                const accordionItem = `
                    <div class="accordion-item">
                        <div class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#question-${index + 1}">
                            ${question}
                        </div>
            
                        <div id="question-${index + 1}" class="accordion-collapse collapse" data-bs-parent="#questions">
                        <div class="accordion-body">
                        ${answer}
                        </div>
                        </div>
                    </div>
                `
                return accordionItem
            }).join('')}
        </div>
    `
    document.getElementById('faq-section').appendChild(div)
}

function loadMap(){
    mapboxgl.accessToken =
	"pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA";

    // create the map object:
    const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [-73.986498, 40.748377], // starting position [lng, lat]
        zoom: 14, // starting zoom
    });

    // add marker to map:
    const marker1 = new mapboxgl.Marker()
	.setLngLat([ -73.986498, 40.748377])
	.addTo(map);
}

// THIS IS ADDING AN EVENT LISTENER TO THE DOCUMENT OBJECT:
// When the document has loaded, we run a callback function
// In this case, we are telling the browser to run an anonymous function
// This anonymous function is just calling our functions!

document.addEventListener('DOMContentLoaded', ()=>{
    loadFAQ()
    loadMap()
})

// ARRAY.MAP:

let arr= [1,2,3]

arr.map((item, index) => {
    console.log(`Item ${item} is at index ${index}`) // Item 1 is at index 0
})