class ShopPage {
   constructor(page){
      this.page=page
      // locators  object repository
      this.searchBox = page.locator('#small-searchterms')
      //this.searchButton = page.locator(".button-1.search-box-button")
      this.searchButton = page.locator("input.search-box-button")
      this.cartlink = page.locator('#topcartlink')

   }
   async open(){
      await this.page.goto('/')
   }
   async searchForItem(term){
      await this.searchBox.fill(term)
      await this.searchButton.click()
   }
   productResult(name){
      return this.page.locator(".product-item").getByRole('link',{
         name,
         exact:true,
      })
   }
   async openCart(){
      await this.cartlink.click()
   }
}

module.exports={ShopPage}