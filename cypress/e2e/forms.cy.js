describe('forms tests', () => {
  beforeEach(() => {
    cy.visit('/forms')
  })
  it('Test Subscribe form', () => {
    cy.contains(/Testing forms/i)
    cy.getDataTest('subscribe-form').find('input').type('randil@randil.com')
    cy.getDataTest('subscribe-button').click()
  })
})
