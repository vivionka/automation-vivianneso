describe('Vivi project - Testcase', function(){

//TC_1
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


//TC_3
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

//TC_4
    it('Create New User', () => {
            cy.visit('http://rbt-course:8080/hotel/faces/login/login.xhtml')
            cy.contains('Please, login!') //assertion
            cy.get('#login').type('marc')
            cy.get('#senha').type('1010')
            cy.get('#loginBtn').click()

            
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

             //Logout
             cy.get('#wrapper > nav > ul > li.dropdown > a > i.fa.fa-user.fa-fw').click()
             cy.get('#wrapper > nav > ul > li.dropdown.open > ul > li > a').click()
             cy.contains('Please, login!') //assertion
    })

    //TC_2
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

       
        cy.get('#wrapper > nav > ul > li.dropdown > a').click()
        cy.get('#wrapper > nav > ul > li.dropdown.open > ul > li > a').click()
        cy.contains('Please, login!') //assertion
})

//TC_6
    it('Användare: jp access denied på admin-sida', function(){
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