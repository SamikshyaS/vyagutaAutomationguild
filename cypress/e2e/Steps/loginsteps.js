describe("Dashboard", () => {
    before(() => {
        cy.request('GET', `${Cypress.env('authUrl')}${Cypress.env('authenticate')}?clientId=${Cypress.env('clientId')}&token=${Cypress.env('token')}`).then((req) => {
            cy.setCookie('accessToken', req.body.data.accessToken);
            cy.setCookie('refreshToken', req.body.data.refreshToken);
        })
    })
    it('should visit dashboard', () => {
        cy.visit(Cypress.env('appUrl')).then(() => {
            cy.dataCy("Manager").first().click();
        })
    })
})