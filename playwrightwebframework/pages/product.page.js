class Product{
   constructor(page){
     this.page = page;
     this.addToCartButton = page.locator('.add-to-cart').getByRole('button',{
        name: 'Add to cart',
        exact:true,
     })
     this.notificatio = page.locator("#bar-notification")
     this.title = page.getByRole('heading',{level:1})
   }

   async open(path){
    await this.page.goto(path)
   }

   async addtoCart(){
    await this.addToCartButton.click()
   }
}

module.exports ={Product}