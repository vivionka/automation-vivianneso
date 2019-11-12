describe('Hello world project', function(){

    //Testfall exempel från Rafael
it('Open google page', function(){
    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type('rafael')

})

})
