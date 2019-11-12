describe('Vivi project TC_1', function(){

    //Logga in och logga ut
    it('Login and logout', function(){
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        cy.contains('Please, login!') //assertion
        cy.get('#login').type('jp')
        cy.get('#senha').type('1010')
        cy.get('#loginBtn').click()
        cy.url().should('eq', 'http://rbt-course:8080/hotel/faces/index.xhtml') //assertion
        cy.get('#wrapper > nav > ul > li.dropdown > a > i.fa.fa-user.fa-fw').click()
        cy.get('#wrapper > nav > ul > li.dropdown.open > ul > li > a').click()
        cy.contains('Please, login!') //assertion
        

    })

})