const { realHover } = require("cypress-real-events/commands/realHover");

describe("Dashboard", () => {
  beforeEach(() => {
      cy.request('GET', `${Cypress.env('authUrl')}${Cypress.env('authenticate')}?clientId=${Cypress.env('clientId')}&token=${Cypress.env('token')}`).then((req) => {
          cy.setCookie('accessToken', req.body.data.accessToken);
          cy.setCookie('refreshToken', req.body.data.refreshToken);
      })
  })
  it('should visit dashboard', () => {
      cy.visit(Cypress.env('appUrl')).then(() => {
         cy.get('div[class="releaseNote_module_releaseNoteModal__header_Close__1b1fe36c"]').click() 
         cy.contains('People').click()
        // cy.get(':nth-child(1) > [data-cy="employee-row"]').trigger('mouseover')
        // cy.get('body > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(3) > img:nth-child(1)').check({ force: true })
        // cy.get('body > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(3) > img:nth-child(1)').click()
        cy.xpath('(//div[@data-cy="employee-row"])[1]').realHover()
    //    cy.xpath('(//a[@class="employees__pulse-icon"])[1]').click().go('back')
    //    cy.go('back')
    cy.wait(2000)
        })
  })
  it('should visit dashboard and hover over the missing icon and see if the tooltip has missing text', () => {
    cy.visit(Cypress.env('appUrl')).then(() => {
       cy.get('div[class="releaseNote_module_releaseNoteModal__header_Close__1b1fe36c"]').click() 
     //attendacebutton should be enabled
       cy.xpath('(//button[@class="floatingButtons_module_floatingButton__f0675537"])[1]').should('be.enabled')
       cy.xpath('(//button[@class="floatingButtons_module_floatingButton__f0675537"])[1]').realHover().contains("I am working from home today").click()
       //after the click the button should have different text
       cy.xpath('(//button[@class="floatingButtons_module_floatingButton__f0675537 floatingButtons_module_floatingButton_Secondary__f0675537"])').realHover().contains('You are working from home today.')
       cy.wait(2000)

        })
        
})
it('Navigate to the reminder add the reminder and delete it', () => {
    cy.visit(Cypress.env('appUrl')).then(() => {
       cy.get('div[class="releaseNote_module_releaseNoteModal__header_Close__1b1fe36c"]').click() 
     //Navigate to the reminder add the reminder and then delete it
     cy.contains('People').click()
//naviagte to the notice tab
cy.xpath('(//a[@class="tab_module_tab__link__4e24d3bf"])[3]').click()
// cy.xpath('(//a[@class="f-left add-employee-button"])').click()
// cy.xpath('(//input[@name="title"])').type("testReminder2")
// cy.xpath('(//input[@name="redirectUrl"])').type('https://www.example.com')
// cy.xpath('(//button[@type="submit"])').click()
cy.xpath('(//span[@class="verticle-ellipse cursor-pointer"])[2]').click()
cy.get('.color-tertiary-red-40').click()
cy.get('.delete__btn').click()
cy.wait(2000)
        })
        
})
it('static drop down', () => {
  cy.visit(Cypress.env('appUrl')).then(() => {
     cy.get('div[class="releaseNote_module_releaseNoteModal__header_Close__1b1fe36c"]').click() 
     cy.contains('People').click()
     cy.get('.flex-column').click()


      })

})
})