const array = [

    {
        "title": "snakjgkjgkjkjgkjggkjkgjke",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Small Wooden Chair",
        "price": "9",
        "lastPrice": "9",
        "id": "1"
    },
    {
        "title": "cow",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Bespoke Soft Computer",
        "price": "5",
        "lastPrice": "5",
        "id": "2"
    },
    {
        "title": "cat",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Incredible Soft Bacon",
        "price": "8",
        "lastPrice": "6",
        "id": "3"
    },
    {
        "title": "lion",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Oriental Bronze Pants",
        "price": "4",
        "lastPrice": "8",
        "id": "4"
    },
    {
        "title": "cow",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Handmade Wooden Chair",
        "price": "2",
        "lastPrice": "4",
        "id": "5"
    },
    {
        "title": "snake",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Practical Concrete Towels",
        "price": "9",
        "lastPrice": "3",
        "id": "6"
    },
    {
        "title": "bear",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Generic Steel Bike",
        "price": "1",
        "lastPrice": "8",
        "id": "7"
    },
    {
        "title": "crocodilia",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Handcrafted Frozen Bacon",
        "price": "5",
        "lastPrice": "3",
        "id": "8"
    },
    {
        "title": "crocodilia",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Refined Rubber Gloves",
        "price": "5",
        "lastPrice": "8",
        "id": "9"
    },
    {
        "title": "rabbit",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Small Rubber Chips",
        "price": "2",
        "lastPrice": "6",
        "id": "10"
    },
    {
        "title": "bird",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Sleek Concrete Bike",
        "price": "7",
        "lastPrice": "3",
        "id": "11"
    },
    {
        "title": "snake",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Elegant Steel Pants",
        "price": "1",
        "lastPrice": "4",
        "id": "12"
    },
    {
        "title": "cow",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Modern Frozen Bike",
        "price": "2",
        "lastPrice": "9",
        "id": "13"
    },
    {
        "title": "cat",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Fantastic Fresh Chicken",
        "price": "3",
        "lastPrice": "5",
        "id": "14"
    },
    {
        "title": "bear",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Oriental Frozen Keyboard",
        "price": "6",
        "lastPrice": "9",
        "id": "15"
    },
    {
        "title": "dog",
        "image": "https://loremflickr.com/640/480/technics",
        "name": "Handmade Frozen Table",
        "price": "1",
        "lastPrice": "4",
        "id": "16"
    },
]
const content = document.getElementById('content');
const filterInput = document.getElementById('filterInput');


function renderArray(arr) {
    content.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        content.innerHTML += `
            <div class="block">
                <img src="${element.image}" alt="">
                <h1>${element.name}</h1>
                <h1>${element.price}</h1>
                <h1>${element.lastPrice}</h1>
            </div>`;
    }
}

function filterArray() {
    const filterValue = filterInput.value.toLowerCase();
    const filteredArray = array.filter(item => item.name.toLowerCase().includes(filterValue));
    renderArray(filteredArray);
}


renderArray(arr);