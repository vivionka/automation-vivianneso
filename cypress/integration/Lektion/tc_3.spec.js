describe('Vivi project TC_3', function(){

    it('Create new client', () => {
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        cy.contains('Please, login!') //assertion
        cy.get('#login').type('marc')
        cy.get('#senha').type('1010')
        cy.get('#loginBtn').click()
        cy.url().should('eq', 'http://rbt-course:8080/hotel/faces/index.xhtml') //assertion
        cy.get('#side-menu > li:nth-child(5) > a').click()
        cy.contains('Create New Client') //assertion
        cy.get('#j_idt50 > a.btn.btn-primary').click()
        cy.get('#name').type('Kalle Banan')
        cy.get('#email').type('kallebanan@mailinator.com')
        cy.get('#gender > tbody > tr > td:nth-child(1) > label').click()
        cy.get('#socialSecurityNumber').type('555555-1213')
        cy.get('#j_idt52 > a.btn.btn-primary').click()
        cy.contains('Client was successfully created') //assertion
        cy.get('#j_idt51 > a:nth-child(11)').click()
        cy.url().should('eq', 'http://rbt-course:8080/hotel/faces/client/View.xhtml') //assertion

       

    })

})