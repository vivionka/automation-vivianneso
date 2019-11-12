describe('Vivi project TC_5', function(){


    it('jp access denied på admin-sidor', function(){
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        cy.contains('Please, login!') //assertion
        cy.get('#login').type('jp')
        cy.get('#senha').type('1010')
        cy.get('#loginBtn').click()
        cy.url().should('eq', 'http://rbt-course:8080/hotel/faces/index.xhtml') //assertion
        cy.get('#page-wrapper > div > div > div > div > div:nth-child(2) > div > a > div > span.pull-left').click()
        cy.contains('Access Denied!')
     
        
    })

})