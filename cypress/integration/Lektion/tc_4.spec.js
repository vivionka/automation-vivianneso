describe('Vivi project TC_4', function(){

    it('Add one user', () => {
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        cy.contains('Please, login!') //assertion
        cy.get('#login').type('marc')
        cy.get('#senha').type('1010')
        cy.get('#loginBtn').click()

        //Testcase starts here
        cy.url().should('eq', 'http://rbt-course:8080/hotel/faces/index.xhtml') //assertion
        cy.get(':nth-child(7) > a').click()
        cy.contains('Create New User') //assertion
        cy.get('#j_idt50 > a.btn.btn-primary').click()
        cy.get('#typeUser').select('Common') //väljer common
        cy.get('#login').type('kallebanana')
        cy.get('#password').type('banan')
        cy.get('#retypingPassword').type('banan')
        cy.get('#clientId').select('Kalle Banan') //väljer Kalle Banan
        cy.get('#userStatusId').select('ACTIVE')
        cy.get('#j_idt51 > a.btn.btn-primary').click()
        cy.contains('User was successfully created') // assertion


    
    })

})