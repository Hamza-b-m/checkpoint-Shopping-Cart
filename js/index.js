
var heart = document.querySelectorAll(".heart");
var trash = document.querySelectorAll(".fa-trash-o");
var badge = document.querySelector(".badge");
var cart = document.querySelector(".fa-cart-plus");
var cart2 = document.querySelector(".cart_indice");
var heart_nav = document.querySelector(".fa-heart-o");
var heart_nav2 = document.querySelector(".nav_indice2");
var arr1 = [];
var arr2 = [];
arr1.push(cart, cart2);
arr2.push(heart_nav, heart_nav2);
var plus = document.querySelectorAll(".fa-plus-circle");
var minus = document.querySelectorAll(".fa-minus-circle");
var total = document.querySelector(".total_price");

Array.from(trash).map( el => {
    el.addEventListener("click", () => {
        el.parentElement.parentElement.parentElement.remove();
        badge.innerHTML = badge.innerHTML - 1;
    });
});
Array.from(heart).map( el => {
    el.addEventListener("click", () => {
        el.classList.toggle("fa-heart-o");
        el.classList.toggle("fa-heart");
    });
});
arr1.map( el => {
    el.addEventListener("mouseover", () => {
        cart.classList.toggle("red");
        cart2.classList.toggle("red");
    });
});
arr1.map( el => {
    el.addEventListener("mouseout", () => {
        cart.classList.toggle("red");
        cart2.classList.toggle("red");
    });
});
arr2.map( el => {
    el.addEventListener("mouseover", () => {
        heart_nav.classList.toggle("red");
        heart_nav2.classList.toggle("red");
    });
});
arr2.map( el => {
    el.addEventListener("mouseout", () => {
        heart_nav.classList.toggle("red");
        heart_nav2.classList.toggle("red");
    });
});
Array.from(plus).map( el => {
    el.addEventListener("click", () => {
        if (el.previousElementSibling.innerHTML < 5) {
        el.previousElementSibling.innerHTML = eval(el.previousElementSibling.innerHTML + "+1");
        var price = el.parentElement.parentElement.previousElementSibling.querySelector(".price").innerHTML;
        total.innerHTML = eval(total.innerHTML + "+" + price);
        }
    });
});
Array.from(minus).map( el => {
    el.addEventListener("click", () => {
        if (el.nextElementSibling.innerHTML > 0) {
            el.nextElementSibling.innerHTML = eval(el.nextElementSibling.innerHTML + "-1");
            var price = el.parentElement.parentElement.previousElementSibling.querySelector(".price").innerHTML;
            total.innerHTML = eval(total.innerHTML + "-" + price);
        }
    });
});
