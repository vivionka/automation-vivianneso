//Genomgång med Rafael

//elements (web-elements, e.g. buttons, labels, text fields etc.)
const usernameTxtField = '#login'
const passwordTxtField = '#senha'
const submitButtonLogin = '#loginBtn'


//Operations (functions e.g. perform login, check title on page, check specific string etc.)
function performLogin(cy){
    cy.get(usernameTxtField).type('jp')
    cy.get(passwordTxtField).type('1010')
    cy.get(submitButtonLogin).click()
}


//exports (making the functions available for importing)

module.exports ={
    performLogin
}