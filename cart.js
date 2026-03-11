// Get cart from localStorage or create empty cart

let cart = JSON.parse(localStorage.getItem("cart")) || []

// Add item to cart

function addToCart(id){

const product = products.find(p => p.id === id)

cart.push(product)

localStorage.setItem("cart", JSON.stringify(cart))

alert("Added to cart")

}

// Display cart

function displayCart(){

const list = document.getElementById("cart-list")
const totalText = document.getElementById("total")

if(!list) return

list.innerHTML = ""

let total = 0

cart.forEach((item,index)=>{

const li = document.createElement("li")

li.innerHTML = `
${item.name} - $${item.price}
<button onclick="removeItem(${index})">Remove</button>
`

list.appendChild(li)

total += item.price

})

totalText.textContent = "Total: $" + total

}

// Remove item

function removeItem(index){

cart.splice(index,1)

localStorage.setItem("cart", JSON.stringify(cart))

displayCart()

}