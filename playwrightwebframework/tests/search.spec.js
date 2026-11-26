const {test,expect} = require('../fixtures/shop.fixtures')
const{laptop}= require('../data/products')


test("search the laptop and open its product page",async({shop,product})=>{
    await shop.open();
    await shop.searchForItem(laptop.searchTerm)
    const result =  await  shop.productResult(laptop.name)
    await expect(result).toBeVisible()
    await result.click()
    await expect(product.title).toHaveText(laptop.name)

})