//CASOS DED USO DOS ITENS

// Create item
export async function createItem(name, price, quantity) {
 return {
    name,
    price,
    quantity,
    subtotal: () => price * quantity,
 }
}