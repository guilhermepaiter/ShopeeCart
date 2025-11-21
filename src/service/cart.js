// cart.js (Corrigido)

// ⬅️ Remova o 'import createItem from "./itens.js"' - Não é necessário aqui!

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
async function removeItem(userCart, item) {
    //1. encontrar o index do item
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    //2. caso não encontre item
    if(index === -1){
        console.log("Item not found in the cart!")
        return
    }

    //3. item > 1 subtrair um item, item = 1 deletar o item
    if(userCart[indexFound].quantity > 1){
        userCart[indedxFound].quantity -= 1
        return
    }

    //4. caso item  = 1 deetar o item 
    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1)
    }
}

async function displaycart(usercart) {
    console.log("\nShopee cart list:")
    usercart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal: = ${item.subtotal()}`);
    })
}

//Calculate total do carrinho
async function calculateTotal(userCart) {
    // ⬅️ CORREÇÃO: Use 'item.subtotal()', não 'createItem.subtotal()'
    // 💡 Também adicionei ', 0' como valor inicial do reduce.
    // Isso garante que funcione mesmo se o carrinho estiver vazio.
    console.log("\nYour Total Cart is:")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`📦Total: R$ ${result.toFixed(2)}`);
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displaycart
}