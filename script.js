const productsContainer = document.querySelector(".products-container");
const searchInputter = document.querySelector(".search-bar input");
let allData = [];

fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
        allData = data.products.slice(0, 10);
        showProducts(allData);
    });

function showProducts(allData) {
    productsContainer.innerHTML = "";
    allData.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("productCard");

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("imageContainer");

        const productImage = document.createElement("img");
        productImage.src = product.thumbnail;
        productImage.alt = product.title;

        const productDesc = document.createElement("div");
        productDesc.classList.add("productDesc");

        const name = document.createElement("h3");
        name.textContent = product.title;

        const description = document.createElement("p");
        description.textContent = product.description;
        description.classList.add("description");

        const priceRating = document.createElement("div");
        priceRating.classList.add("priceRating");

        const price = document.createElement("p");
        price.textContent = `$${product.price}`;
        price.classList.add("price");

        const rating = document.createElement("p");
        rating.textContent = `${product.rating} / 5`;
        rating.classList.add("rating");
        
        imageContainer.appendChild(productImage);
        imageContainer.appendChild(description);
        productCard.appendChild(imageContainer);
        productCard.appendChild(productDesc);

        productDesc.appendChild(name);
        
        priceRating.appendChild(price);
        priceRating.appendChild(rating);
        productDesc.appendChild(priceRating);

        productsContainer.appendChild(productCard);
    });
}

searchInputter.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const filteredData = allData.filter(product =>
        product.title.toLowerCase().includes(query)
    );
    showProducts(filteredData);
})