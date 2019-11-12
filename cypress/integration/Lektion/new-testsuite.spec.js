//Genomgång med Rafael - Page Objects


import * as loginPg from '../pages/index'
import * as dashboardPg from '../pages/dashboard'


describe('Test suite', function(){
    it('Perform login and logout', function(){
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        loginPg.performLogin(cy) 
        dashboardPg.checkDashBoardLabelOnTop(cy)
        dashboardPg.logout(cy)

    })

})


