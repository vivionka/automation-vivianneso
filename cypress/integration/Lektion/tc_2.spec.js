describe('Vivi project TC_2', function(){

    it('Delete a user', () => {
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        cy.contains('Please, login!') //assertion
        cy.get('#login').type('marc')
        cy.get('#senha').type('1010')
        cy.get('#loginBtn').click()
        cy.url().should('eq', 'http://rbt-course:8080/hotel/faces/index.xhtml') //assertion
        cy.get(':nth-child(7) > a').click()
        cy.contains('Create New User') //assertion
        cy.get('#j_idt50 > table > tbody > tr:nth-child(5) > td:nth-child(7) > a:nth-child(3)').click()
        cy.contains('User was successfully deleted')


        
    })

    })

