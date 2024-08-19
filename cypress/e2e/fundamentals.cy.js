describe('Fundamentals Test', () => {
  it('Contains Correct Header Text', () => {
    cy.visit('/fundamentals')
    cy.get('[data-test="fundamentals-header"]').should(
      'have.text',
      'Testing Fundamentals'
    )
  })
})
