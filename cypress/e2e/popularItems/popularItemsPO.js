class PopularItemsPO{

    btnPopularItems() { return cy.get('a').contains('POPULAR ITEMS')}
    lblPopularItems() { return cy.get('#popular_items > h3')}
    divProduct() { return cy.get('#popular_items > div > div')}
    btnDetails() { return cy.get('#popular_items > div > div > a')}

}   export default PopularItemsPO