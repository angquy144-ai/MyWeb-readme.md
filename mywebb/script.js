// =========================
// PRODUCTS
// =========================

const products = [

    {
        id:1,
        name:"Macbook Premium",
        price:32000000
    },

    {
        id:2,
        name:"iPhone Premium",
        price:22500000
    },

    {
        id:3,
        name:"Smart Watch",
        price:5200000
    }

];

// =========================
// CART
// =========================

let cart =
JSON.parse(localStorage.getItem("cart"))
|| [];

// ADD TO CART

function addToCart(productName, productPrice){

    cart.push({

        name:productName,
        price:productPrice

    });

    localStorage.setItem(

        "cart",
        JSON.stringify(cart)

    );

    updateCartCount();

    showToast("✔ Đã thêm vào giỏ hàng");

}

// UPDATE CART

function updateCartCount(){

    const cartCount =
    document.querySelector("#cart-count");

    if(cartCount){

        cartCount.innerText =
        cart.length;

    }

}

updateCartCount();

// =========================
// SEARCH REALTIME
// =========================

const searchInput =
document.querySelector("#search");

if(searchInput){

    searchInput.addEventListener(

        "keyup",

        function(){

            const value =
            this.value.toLowerCase();

            const cards =
            document.querySelectorAll(
                ".product-card"
            );

            cards.forEach(card => {

                const title =
                card.querySelector("h3")
                .innerText
                .toLowerCase();

                if(title.includes(value)){

                    card.style.display =
                    "block";

                }

                else{

                    card.style.display =
                    "none";

                }

            });

        }

    );

}

// =========================
// TOAST NOTIFICATION
// =========================

function showToast(message){

    const toast =
    document.createElement("div");

    toast.classList.add("toast");

    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    },100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        },300);

    },3000);

}

// =========================
// DARK MODE
// =========================

const darkBtn =
document.querySelector("#dark-mode-btn");

if(darkBtn){

    darkBtn.addEventListener(

        "click",

        () => {

            document.body.classList.toggle(
                "light-mode"
            );

            localStorage.setItem(

                "theme",

                document.body.classList.contains(
                    "light-mode"
                )

                ? "light"

                : "dark"

            );

        }

    );

}

// =========================
// LOAD THEME
// =========================

const savedTheme =
localStorage.getItem("theme");

if(savedTheme === "light"){

    document.body.classList.add(
        "light-mode"
    );

}