
import logindata from "../../fixtures/logincreds.json"

import login from "../../Pageobjects/loginpage.po"

import dashbaord from '../../Pageobjects/dashboard/dashboardpage.po'

describe('Validate login functionality ', () => {

  beforeEach("Launch App", () =>{
    cy.visit(`/`)
  })
   
  var credentials = {

      username : "Admin",
      password : "admin123",
      wrongusername: "thiswrongusername",
      wrongpassword: "wrongeuhfoijpassword"
  }

  var creds = ["Admin", "admin123"]

    it.only('Verify Login with Valid credentials', () => {
     

      //Actions 
      // cy.xpath(login.usernameinput()).type(creds[0])

      // cy.get(login.passwordinput()).type(creds[1])

      // cy.get(login.loginBtn()).click()

      cy.login(creds[0],creds[1] )

      // Assertions 

      cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

      cy.url().should("include", "index.php/dashboard/index")

      cy.contains(dashbaord.dashboardmenu()).should("be.visible")
      
    })

    it('Verify Login with invalid username and Valid password', () => {

       

        //Actions 
        // cy.xpath(login.usernameinput()).type(credentials.wrongusername)
  
        // cy.get(login.passwordinput()).type(credentials.password)
  
        // cy.get(login.loginBtn()).click()

        cy.login(credentials.wrongusername, credentials.password)
  
        // Assertions 
  
       cy.contains(login.loginerrormessage()).should("be.visible")
        
      })


      it('Verify Login with valid username and inValid password', () => {


        //Actions 
       // cy.xpath(login.usernameinput()).type(credentials.username)
  
        // cy.get(login.passwordinput()).type(credentials.wrongpassword)
  
        // cy.get(login.loginBtn()).click()

        cy.login(credentials.username,credentials.wrongpassword)
  
        // Assertions 
  
       cy.contains(login.loginerrormessage()).should("be.visible")
        
      })

      it('Verify Login with invalid username and inValid password', () => {

       

        //Actions 
        // cy.xpath(login.usernameinput()).type(credentials.wrongusername)
  
        // cy.get(login.passwordinput()).type(credentials.wrongpassword)
  
        // cy.get(login.loginBtn()).click()

        cy.login(credentials.wrongusername,credentials.wrongpassword)
  
        // Assertions 
  
       cy.contains(login.loginerrormessage()).should("be.visible")
        
      })

  })