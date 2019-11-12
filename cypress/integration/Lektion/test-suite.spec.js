describe('Test suite', function (){
    //Testfall och Page Object med Rafael, genomgång


    it('Login and logout', function(){
        cy.log('Just testing the setup')

        // go to login/index (separate step)
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')

        //loginIndex page
        cy.contains('Please, login!') //assertion
        cy.get('#login').type('jp')
        cy.get('#senha').type('1010')
        cy.get('#loginBtn').click()
        
        //dashboard
        cy.contains('Hotel Accommodadion') //assertion
        cy.get('.fa-caret-down').click()
        cy.get('.dropdown-menu > li > a').click()
        

        //loginIndex
        cy.contains('Please, login!')
        
       

    
    })

})