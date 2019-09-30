describe('BambooHR', function() {
  it('Fill all days', function() {
    cy.visit('/login.php')

    cy.get('.normal-login-link-container').click()
    cy.get('#lemail').type(Cypress.env('username'))
    cy.get('#password').type(Cypress.env('password'))
    cy.get('form').submit()

    cy.get('.TimeTrackingWidget__summary-link').click()

    const selector =
      '.TimesheetSlat:not(.TimesheetSlat--disabled):not(.js-timesheet-showWeekends):not(.TimesheetSlat--future):not(.TimesheetSlat--expanded):not(.TimesheetSlat--expandable)'

    cy.get(selector).each(() => {
      cy.get(`${selector} .TimesheetSlat__addEntryLink`)
        .first()
        .click()
        .then(() => {
          cy.get('.SimpleModal').within(() => {
            cy.get('ba-select > input')
              .last()
              .then($elem => {
                $elem.val('PM')
              })
            cy.get('.ClockField__formInput')
              .first()
              .type(Cypress.env('enterTime'))
            cy.get('.ClockField__formInput')
              .last()
              .type(Cypress.env('exitTime'))
            cy.get('.SimpleModal__footer > .btnAction').click()
            cy.wait(3000)
          })
        })
    })
  })
})
