describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    cy.xpath("//button[text()='ADD TO CART']").click({multiple:true})

    cy.get('.increment').click({multiple:true})


  })


  it.only('passes', () => {
    cy.visit('https://www.cypress.io/')

   cy.contains("API").click({force: true})

    
  })
})