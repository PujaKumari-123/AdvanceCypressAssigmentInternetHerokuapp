describe('validation for iframe', () => {
    it('Testcases 1', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.frameLoaded('#courses-iframe');
        cy.iframe().contains('JOIN NOW').click();
   
   
   
    });
});