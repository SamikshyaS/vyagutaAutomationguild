const { realHover } = require("cypress-real-events/commands/realHover");

describe("Dashboard", () => {
  beforeEach(() => {
      cy.request('GET', `${Cypress.env('authUrl')}${Cypress.env('authenticate')}?clientId=${Cypress.env('clientId')}&token=${Cypress.env('token')}`).then((req) => {
          cy.setCookie('accessToken', req.body.data.accessToken);
          cy.setCookie('refreshToken', req.body.data.refreshToken);
      })
  })
  
  it('static drop down', () => {
    cy.visit(Cypress.env('appUrl')).then(() => {
      //cy.get('.releaseNote_module_releaseNoteModal__header_Close__7943ddf4').click()
      cy.xpath('//div[@class="releaseNote_module_releaseNoteModal__header_Close__7943ddf4"]').click()
      cy.contains('People').click()
      cy.get('.dropdown-search__control').click()
      
      cy.get(".dropdown-search__select__value-container").type("Dep")
      // cy.get('#react-select-2-option-0').click()
      // cy.get('#react-select-2-option-3').click()
       cy.xpath('//div[@class="dropdown-search__select__menu-list dropdown-search__select__menu-list--is-multi css-11unzgr"]/div').each(($el, index, $list) => {
     // cy.get('.dropdown-search__select__menu-list dropdown-search__select__menu-list--is-multi css-11unzgr div').each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        if ($el.text() === 'Department') {
          // wrap this element so we can
          // use Cypress commands on it
          cy.wrap($el).click()
        }
        // else {
        //   // do something else
        // }
      })
    })
  })
})