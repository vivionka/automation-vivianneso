//Genomgång med Rafael - Page Objects


//elements
const dashboardLabelOnTop = 'Hotel Accomodadion'

//functions
function checkDashBoardLabelOnTop(cy){
    cy.contains(checkDashBoardLabelOnTop)
}

function logout(cy){
    cy.get('.fa-caret-down').click()
    cy.get('.dropdonw-menu > li > a').click()
}

//exports
module.exports ={
    checkDashBoardLabelOnTop,
    logout
}