class HomePage {
   constructor(page){
      this.page=page
      // locators  object repository
      this.searchBox = page.locator('#small-searchterms')
      //this.searchButton = page.locator(".button-1.search-box-button")
      this.searchButton = page.locator("input.search-box-button")

   }

}