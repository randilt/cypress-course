describe('Fundamentals Test', () => {
  it('Visit to the web app', () => {
    cy.visit('http://localhost:3000/fundamentals')
    cy.get('[data-test="fundamentals-header"]').should(
      'have.text',
      'Testing Fundamentals'
    )
  })
})
