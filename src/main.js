// main.js (Com a Importação corrigida e a execução segura)

import * as cartService from "./service/cart.js"
import { createItem } from "./service/itens.js" // ⬅️ Importação Corrigida!

const myCart = []
const myWhishList = []

async function runCart() { // ⬅️ Função Async para usar o 'await'
    console.log("Welcome to your Shopee Cart!")

    const item1 = await createItem("Hotwheels Camaro", 20.59, 5) // OK
    const item2 = await createItem("Hotwheels Ferrari", 39.99, 3) // OK

    //add 2 itens no carrinho
    await cartService.addItem(myCart, item1)
    await cartService.addItem(myWhishList, item2)

    //delete 1 item do carrinho
    // await cartService.deleteItem(myWhishList, item2.name)

    console.log("Your Shopee cart is:")
    await cartService.calculateTotal(myCart)
    
    console.log("Your Wishlist Shopee is:")
    await cartService.calculateTotal(myWhishList)
}

runCart() // Inicia a execução