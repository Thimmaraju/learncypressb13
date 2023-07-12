// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')
import addemployee from "../Pageobjects/PIM/addemployeepage.po"

Cypress.Commands.add('login', (username, password) => { 
    
     cy.get('input[name="username"]').type(username)
     cy.get('input[type="password"]').type(password)
     cy.get('button[type="submit"]').click()

 })


 Cypress.Commands.add('addemployee', (firstname, lastname) => { 

    cy.contains(addemployee.addemployeesubmenu()).click()

    cy.go(-1)

    cy.wait(5000)

    cy.go(1)
    cy.wait(5000)
    cy.reload()
    cy.get(addemployee.firstnameInput()).type(firstname)

    cy.get(addemployee.lastnameInput()).type(lastname)

    cy.get(addemployee.saveBtn()).click()

})