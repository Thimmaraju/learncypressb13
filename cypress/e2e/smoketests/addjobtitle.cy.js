import logindata from "../../fixtures/logincreds.json"

import addjobtiltedata from "../../fixtures/addjobtile.json"

import login from '../../Pageobjects/loginpage.po'

import dashbaord from "../../Pageobjects/dashboard/dashboardpage.po"

import addjob from '../../Pageobjects/Admin/addjobtitle.po'

describe('Validate Add jobtitle Tests', () => {



    it('Verify User can able to add the job title with Mandatory fiields', () => {

        let username = "Admin"

        let password = "admin123"
        cy.visit(`/`)

        //Actions 
        // cy.xpath(login.usernameinput()).type(Cypress.env("username"))

        // cy.get(login.passwordinput()).type(Cypress.env("password"))
        // cy.get(login.loginBtn()).click()

        cy.login(Cypress.env("username"), Cypress.env("password"))

        // Assertions 

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

        cy.contains(dashbaord.dashboardmenu()).should("be.visible")

        cy.contains(dashbaord.adminmenu()).click()

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")

        cy.contains(addjob.jobsubmenu()).click()

        cy.contains(addjob.jobtitleoption()).click()
        cy.url().should("include", "/web/index.php/admin/viewJobTitleList")
        //Add button click
        cy.get(addjob.addBtn()).click();
        cy.contains(addjob.addJobTitleHeader()).should("be.visible")
        //Enter Job title 

        let r = (Math.random() + 1).toString(36).substring(7);
        cy.get(addjob.addJobTitleInput()).type(addjobtiltedata.Jobtitle + r)
        cy.get(addjob.jobDescriptionInput()).type(addjobtiltedata.jobdescription)
        cy.get(addjob.saveBtn()).click()
        cy.contains(addjob.successmessage()).should("be.visible");

    })

    it('Verify Mandatory details should be entered to save job tile ', () => {

        cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`)

        //Actions 
        // cy.xpath(login.usernameinput()).type("Admin")

        // cy.get(login.passwordinput()).type("admin123{enter}")

        cy.login("Admin", "admin123")

        // Assertions 

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

        cy.contains(dashbaord.dashboardmenu()).should("be.visible")

        cy.contains(dashbaord.adminmenu()).click()

        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers")
        cy.contains(addjob.jobsubmenu()).click()
        cy.contains(addjob.jobtitleoption()).click()
        cy.url().should("include", "/web/index.php/admin/viewJobTitleList")
        //Add button click
        cy.get(addjob.addBtn()).click();
        cy.contains(addjob.addJobTitleHeader()).should("be.visible")
        cy.get(addjob.saveBtn()).click()
        cy.contains(addjob.errormessageFirstname()).should("be.visible")

    })
})


