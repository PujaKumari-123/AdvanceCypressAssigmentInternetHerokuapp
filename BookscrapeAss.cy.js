describe('To validate funtionality of books to Scrape', () => {
    it('Check the title page', () => {
        cy.visit("https://books.toscrape.com/");
        cy.title().should('eq','All products | Books to Scrape - Sandbox');

        cy.get('[href="catalogue/category/books/nonfiction_13/index.html"]').click();
        cy.title().should('eq','Nonfiction | Books to Scrape - Sandbox');
        cy.xpath('(//button[text()="Add to basket"])[1]').click();



        
    });
});