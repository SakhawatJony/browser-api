const dispalyCartLocalStroage = ()=>{
const cart = getCart();
for(name in cart){

dispalyProducts(name);


}





}



const addItem = ()=>{
const nameFiled = document.getElementById('product-name');
const name = nameFiled.value;

if(!name){
    return;
}
// display show
dispalyProducts(name);
// add to local stroage 
addProductToCart(name);

nameFiled.value = ' ';



}
const dispalyProducts = name =>{
const ul = document.getElementById('products');
const li = document.createElement('li');
li.innerText = name;
ul.appendChild(li);




}
const getCart = () => {
    localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }
else{

    cartObj = {};
}

return cartObj;


};

const addProductToCart = name => {

const cart = getCart();
if(cart[name]){

    cart[name] = cart[name]+ 1;

}
else{
    cart[name] = 1;
}
const cartStrignefied = JSON.stringify(cart);
localStorage.setItem('cart', cartStrignefied);

};
const placeOrder = () => {
document.getElementById('product-name').textContent = ' ';
localStorage.removeItem('cart');



}

dispalyCartLocalStroage();