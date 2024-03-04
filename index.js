const openShopping = document.querySelector(".openShopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");


//Listeners for open shopping and close shopping
openShopping.addEventListener("click", () =>{
    body.classList.add("active")
})
closeShopping.addEventListener("click", () =>{
    body.classList.remove("active")
})

//product information and names
let products =[{
    id: 1,
    name: "PRODUCT 1",
    images: "1.PNG",
    price: 750
}, 
{
    id: 2,
    name: "PRODUCT 2",
    images: "2.PNG",
    price: 300
}, 
{
    id: 3,
    name: "PRODUCT 3",
    images: "3.PNG",
    price: 500
}, 
{
    id: 4,
    name: "PRODUCT 4",
    images: "4.PNG",
    price: 800
}, 
{
    id: 5,
    name: "PRODUCT 5",
    images: "5.PNG",
    price: 450
}, 
{
    id: 6,
    name: "PRODUCT 6",
    images: "6.PNG",
    price: 1000
}, 
]

//empty array of the list cards
let listCads = [];

//function for shopping cart
const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = '
        <img src ="img/$(value.images)">
        <div class ="title">$(value.name)</div>
        <div class ="price">$(value.price.tolocateString())</div>
        <button onclick= "addToCard($(key))"Add To Card</button>
        '
    })
}
