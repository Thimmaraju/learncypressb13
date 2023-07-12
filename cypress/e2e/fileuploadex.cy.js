///<reference types="cypress"/>

describe('Automation - File Upload Example', function () {

    it('Cypress Test Case - Understanding upload file ', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.xpath('//input[@name="upfile"]').attachFile('B13 Cypress.txt');
      
      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
    
      cy.contains("The file's contents are:").should("be.visible")
    })


    
    it.only('Cypress Test Case - Understanding upload file - Select file ', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

     cy.xpath('//input[@name="upfile"]').selectFile('D:/LearnCypressB13/cypress/fixtures/B13 Cypress.txt');
    

      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
    
      cy.contains("The file's contents are:").should("be.visible")
    })


    it.only('Cypress Test Case - Understanding download file ', function () {
      let r = (Math.random() + 1).toString(36).substring(7);
      cy.downloadFile("https://w7.pngwing.com/pngs/538/507/png-transparent-yellow-and-brown-lion-illustration-state-emblem-of-india-caste-system-in-india-national-symbols-of-india-national-emblem-ashok-stambh-emblem-carnivoran-gold-thumbnail.png", "cypress/downloads/Raju", "ashokstambh"+r+".png")
      cy.readFile('cypress/downloads/ashokstambh2'+r+'.png').should('exist')
    })

  })