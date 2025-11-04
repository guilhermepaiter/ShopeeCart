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
async function removeItem(userCart, index) {

}

//Calculate total do carrinho
async function calculateTotal(userCart) {
    // ⬅️ CORREÇÃO: Use 'item.subtotal()', não 'createItem.subtotal()'
    // 💡 Também adicionei ', 0' como valor inicial do reduce.
    // Isso garante que funcione mesmo se o carrinho estiver vazio.
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(result);
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem
}