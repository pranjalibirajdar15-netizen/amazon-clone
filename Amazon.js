let cart = [];


// Add product to cart

function addToCart(name, price) {

    let product = {
        name: name,
        price: price
    };

    cart.push(product);

    document.getElementById("cartCount").innerText =
        cart.length;

    alert(name + " added to cart!");
}


// Search product

function searchProduct() {

    let search =
        document.getElementById("searchInput").value;

    if (search === "") {

        alert("Please enter a product name.");

    } else {

        alert("Searching for: " + search);
    }
}


// Scroll to products

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}