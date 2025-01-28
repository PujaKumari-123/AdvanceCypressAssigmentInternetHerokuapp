describe('Internet herokuapp', () => {
    it('Validate webpage apply waits till HelloWorld', () => {
        cy.visit("https://the-internet.herokuapp.com/dynamic_loading/1").wait(2000);
        cy.xpath('//button[.="Start"]').click();
        cy.xpath('//h4[text()="Hello World!"]').then(($ele)=>{
        if ($ele.text()=="Hello World!") {
            cy.wrap($ele).should('have.text', 'Hello World!');
        }
    })
    })

  it('Fetch the Values from the table 2 ', () => {
  cy.visit("https://the-internet.herokuapp.com/tables");
  cy.xpath('//table[@id="table2"]/tbody[1]/tr[1]/td[2]').then(($ele)=>{
    if($ele.text()=="John"){
        cy.wrap($ele).should('have.text', 'John');
    }
   })
  })
 
it('Fetch the Values from 1st table 4th row and 3rd column ', () => {
    cy.visit("https://the-internet.herokuapp.com/tables");
    cy.xpath('//table[1]/tbody/tr[4]/td[3]').then(($ele)=>{
        if($ele.text() =="tconway@earthlink.net"){
            cy.wrap($ele).should('have.text','tconway@earthlink.net')
        }

    })
});
it('Fetch the Values from 2nd table 2nd row and last column ', () => {
    cy.visit("https://the-internet.herokuapp.com/tables");
    cy.xpath('//table[2]/tbody/tr[2]/td[6]').then(($ele)=>{
        if($ele.text()=="edit delete"){
            cy.wrap($ele)
        }
    });

it('Handle the window from the webpages', () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    cy.xpath('//a[.="Click Here"]').invoke("removeAttr","target").click();
});

it('Validate for JS alert', () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.xpath('//button[text()="Click for JS Alert"]').click();
    cy.on('window: alert',(str)=>{
        expect(str).to.equal("I am a JS Alert");
        return true;
    });
});

it('Validate for JS confirm', () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.xpath('//button[text()="Click for JS Confirm"]').click();
    cy.on('window:alert',($ele)=>{
        expect($ele).to.equal("I am a JS Confirm");
        return true;
    });
});

it('Validate for JS Prompt', () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.xpath('//button[text()="Click for JS Prompt"]').click();
    cy.on('window:alert',(str)=>{
        expect(str).to.equal("I am a JS prompt");
        return true;
    })
});
});
});