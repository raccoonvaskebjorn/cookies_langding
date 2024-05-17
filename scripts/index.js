// MAIN BUTTON ACTION
document.getElementById("main-action-button").onclick = function(){
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
}
// PROCESS HEADER LINKS
const links = document.querySelectorAll(".menu-item > a");
for(let i = 0; i < links.length; i++){
    links[i].onclick = function(){
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }    
}
// PROCESS CARDS BUTTONS
const buttons = document.querySelectorAll(".products-item .button");
for(let i = 0; i < buttons.length; i++){
    buttons[i].onclick = function(){
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }    
}
// CHANGE CURRENCY BUTTON
const prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function(e){
    const currency = e.target.innerText; 
    let newCurrency = "$";
    let cof = 1;
    if( currency === "$" ){
        newCurrency = "₽";
        cof = 90;
    }
    else if( currency === "₽" ){
        newCurrency = "BYN";
        cof = 3;
    } 
    else if( currency === 'BYN' ){
        newCurrency = '€';
        cof = 0.9;
    } 
    e.target.innerText = newCurrency;
    for( let i=0; i<prices.length; i++ ){
        prices[i].innerText = +( prices[i].getAttribute("data-base-price") * cof ).toFixed(1) + " " + newCurrency;
    }     
}
//
// ORDER FORM VALIDATION
const product = document.getElementById("product");
const name = document.getElementById("name");
const phone = document.getElementById("phone");
document.getElementById("order-action").onclick = function () {
    let hasError = false;
    [ product, name, phone ].forEach( item => {
        if( !item.value ){
            item.style.borderColor = "red";
            hasError = true;
        } 
        else {
            item.style.borderColor = "";
        }
    }); 
    if( !hasError ){
        [ product, name, phone ].forEach( item => {
            item.value = "";
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с вами!");
    }
} 
