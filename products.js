// Render products on the catalog page

const grid = document.getElementById("product-grid")

if(grid){

products.forEach(product => {

const div = document.createElement("div")

div.classList.add("product")

div.innerHTML = `
<img src="${product.image}">
<h3>${product.name}</h3>
<p>$${product.price}</p>

<a href="product.html?id=${product.id}">
View
</a>

<br>

<button onclick="addToCart(${product.id})">
Add to Cart
</button>
`

grid.appendChild(div)

})

}