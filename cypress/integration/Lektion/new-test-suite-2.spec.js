//Importing the index page
import * as indexPg from '../pages-2/index-2'
import * as dashboardPg from '..pages-2/dashboard-2'

//Defining the test suite
describe('Test suite', function(){

    //First test case
    it('Perform login and logout', function(){
        cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
        indexPg.performLogin(cy)
    })

})