const {test: base, expect} = require('@playwright/test')
const { ShopPage } = require('../pages/shop.page')
const { Product } = require('../pages/product.page')
const { CartPage } = require('../pages/cart.page')

const test = base.extend({
    shop:async({ page},use)=>{
        await use(new ShopPage(page))
    },

    product:async({ page},use)=>{
        await use(new Product(page))
    },

    cart:async({ page},use)=>{
        await use(new CartPage(page))
    }
})

module.exports={test,expect}