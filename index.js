

document.addEventListener("DOMContentLoaded", () => {
    const openShopping = document.querySelector(".shopping");
    const closeShopping = document.querySelector(".closeShopping");
    const list = document.querySelector(".list");
    const listCard = document.querySelector(".listCard");
    const total = document.querySelector(".total");
    const body = document.querySelector("body");
    const quantity = document.querySelector(".quantity");

    // Adding event listeners for open and close shopping
    openShopping.addEventListener("click", () => {
        body.classList.add("active");
    });

    closeShopping.addEventListener("click", () => {
        body.classList.remove("active");
    });

    // Products array
    let products = [
        {
            id: 1,
            name: "PRODUCT 1",
            images: "images/1.JPG",
            price: 2000
        },
        {
            id: 2,
            name: "PRODUCT 2",
            images: "images/2.JPG",
            price: 500
        },
        {
            id: 3,
            name: "PRODUCT 3",
            images: "images/3.JPG",
            price: 700
        },
        {
            id: 4,
            name: "PRODUCT 4",
            images: "images/4.JPG",
            price: 600
        },
        {
            id: 5,
            name: "PRODUCT 5",
            images: "images/5.JPG",
            price: 1300
        },
        {
            id: 6,
            name: "PRODUCT 6",
            images: "images/6.JPG",
            price: 1800
        },
    ];

    // Empty array for list cards
    let listCards = [];

    // Initialize the app
    const initApp = () => {
        products.forEach((value, key) => {
            let newDiv = document.createElement("div");
            newDiv.classList.add("item");
            newDiv.innerHTML = `
                <img src="${value.images}">
                <div class="title">${value.name}</div>
                <div class="price">${value.price.toLocaleString()}</div>
                <button onclick="addToCard(${key})">Add To Card</button>
            `;
            list.appendChild(newDiv);
        });
    };

    initApp();

    // Define addToCard function
    const addToCard = (key) => {
        // Logic to add products to the shopping cart
        let product = products[key];
        if (listCards[product.id] == null) {
            // Add product to the cart if not already added
            listCards[product.id] = {...product, quantity: 1};
        } else {
            // Increase quantity if the product is already in the cart
            listCards[product.id].quantity += 1;
        }
        updateCart();
    };

    // Function to update the cart
    const updateCart = () => {
        listCard.innerHTML = '';
        let count = 0;
        let totalPrice = 0;
        listCards.forEach((value) => {
            if (value != null) {
                let newDiv = document.createElement("div");
                newDiv.classList.add("item");
                newDiv.innerHTML = `
                    <img src="${value.images}">
                    <div class="title">${value.name}</div>
                    <div class="price">${value.price.toLocaleString()}</div>
                    <div class="quantity">Quantity: ${value.quantity}</div>
                    <div class="total">${(value.price * value.quantity).toLocaleString()}</div>
                `;
                listCard.appendChild(newDiv);
                count += value.quantity;
                totalPrice += value.price * value.quantity;
            }
        });
        quantity.innerText = count;
        total.innerText = totalPrice.toLocaleString();
    };
});
