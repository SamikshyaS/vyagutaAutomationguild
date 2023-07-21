describe('Dropdown test in one of the demo site', () => {
    //dynamic dropdown
    it("Validate the dropdown option selection by it's value", () => {
        cy.visit("https://codenboxautomationlab.com/practice/")
        cy.get("#autocomplete").type("can")
        cy.get(".ui-menu-item div").each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            if ($el.text() === 'Canada') {
              // wrap this element so we can
              // use cypress commands on it
              cy.wrap($el).click()
             }
            else {
            // do something else
             }
          })

                })
//static dropdown-select in between
                it("Validate the dropdown option selection by it's value", () => {
                    cy.visit("https://codenboxautomationlab.com/practice/")
                    cy.get('#dropdown-class-example').select('Appium').should('have.value', 'option2')
                            })
it.only("Select dropdown in FB", () => {
cy.visit("https://www.google.com")
cy.get('[name="q"]').type("Cyypress")
})
  })