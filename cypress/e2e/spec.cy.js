/// <reference types='cypress' />
const Log_username = 'kyqutudo';
const Log_password = 'kyqutudo';

describe('my firs test', () => {
  it('should', () => {
    cy.visit('https://www.demoblaze.com/')

    cy.contains('a', 'Sign up'). click()
    .should('exist')

    cy.get('#sign-username')
    .type(Log_username);

    cy.get('#sign-password')
    .type(Log_password);

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'). click()
    .should('contain', 'Sign up')

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span'). click()
    
    cy.contains('a', 'Log in').click()
    .should('exist')

    cy.get('#loginusername')
    .type(Log_username);

    cy.get('#loginpassword')
    .type(Log_password);

    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-header > .close > span'). click()

    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch'). click()

    cy.get('.col-sm-12 > .btn'). click()

    cy.get('#cartur'). click()
    .should('contain', 'Cart')
  })
})