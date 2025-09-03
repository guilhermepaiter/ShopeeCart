//CASOS DED USO DOS ITENS

// Create item
async function createItem(name, price, quantity) {
 return {
    name,
    price,
    quantity,
    subtotal: () => price * quantity,
 }
}

export default { createItem }