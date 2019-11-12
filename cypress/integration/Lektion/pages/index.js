//Genomgång med Rafael - Page Objects

//elements
const titleIndexPage = 'Hotel Accomodation - login page'
const loginFormLabel = 'Please, login!' //assertion
const usernameTxtField = '#login'
const passwordTxtField = '#senha'
const loginSubmitButton = '#loginBtn'

//functions
function performLogin(cy){
    cy.contains(loginFormLabel) //assertion
    cy.get(usernameTxtField).type('jp')
    cy.get(passwordTxtField).type('1010')
    cy.get(loginSubmitButton).click()
}

function checkLoginpageLabel(cy){
    contains('Please, login!')
}

//exports --> göra dem tillgängliga så att jag kan hämta från andra filer
module.exports = {
    performLogin
    

}