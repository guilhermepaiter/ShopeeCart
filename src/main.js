import * as cartService from "./service/cart.js"
import createItem from "./service/itens.js"

const myCart = []
const myWhishList = []

console.log("Welcome to your Shopee Cart!")

const item1 = await createItem("Hotwheels Camaro", 20.99, 5)
const item2 = await createItem("Hotwheels Ferrari", 39.99, 3)

//add 2 itens no carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

//delete 1 item do carrinho
await cartService.deleteItem(myCart, item2.name)

console.log("Your Shopee cart is:")
await cartService.calculateTotal(myCart)