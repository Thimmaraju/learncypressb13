//import addemployee from "../../Pageobjects/PIM/addemployeepage.po"
import dashbaord from "../../Pageobjects/dashboard/dashboardpage.po"
import login from "../../Pageobjects/loginpage.po"

import logindata from "../../fixtures/logincreds.json"

import employeedata from '../../fixtures/addemployee.json'

describe('Verify Add Employee functionality', () => {

  beforeEach(function () {
    cy.visit('/')

      // cy.xpath(login.usernameinput(), {timeout : 40000}).type(logindata.username)
      // cy.get(login.passwordinput()).type(logindata.password)

      cy.login("Admin", "admin123")
      cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  
      cy.contains(dashbaord.dashboardmenu()).should("be.visible")

      cy.contains(dashbaord.pimMenu()).click()
     // cy.contains(addemployee.addemployeesubmenu()).click()

  });

  
    it.only('Verify add employee with valid details', () => {
      
      // cy.get(addemployee.firstnameInput()).type(employeedata.firstname)

      // cy.get(addemployee.lastnameInput()).type(employeedata.lastname)

      // cy.get(addemployee.saveBtn()).click()

      cy.addemployee("Raju", "G")

      
      
    })
  

    it('Verify mandotory details in add employee', () => {
      
      cy.get(addemployee.saveBtn()).click()

      cy.contains(addemployee.errormessageFirstname()).should('be.visible')


      
    })
  
  
  
  })