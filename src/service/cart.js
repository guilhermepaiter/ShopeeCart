//funções para o carrinho

//CASOS DE USO
//✔ Add item ao carrinho
async function addItem (userCart, item) {
    userCart.push(item)
}

//Delete item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if(index !== -1){
        userCart.splice(index, 1)
    }
}

//Remove item do carrinho
async function removeItem(userCart, index) {

}

//Calculate total do carrinho
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal())
    console.log(result);
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem
}