

describe('To validate the functionality of FlipKart', () => {
    it('TestCases 1 Search Input Placeholder', () => {
        cy.visit("https://www.flipkart.com/");
        
        cy.get('[class="Pke_EE"]').type("Electronics");
        cy.get('[placeholder="Search for Products, Brands and More"]').then(($ele)=>{
            
            // Assert that the placeholder text is correct using `expect()`
        expect($ele).to.have.attr('placeholder');

          });
            cy.xpath('(//*[.="Electronics"])[1]').then(($ele)=>{
                expect($ele).to.have.text("Electronics");
            });
          
    });
});