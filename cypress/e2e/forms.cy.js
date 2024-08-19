describe('forms tests', () => {
  beforeEach(() => {
    cy.visit('/forms')
  })

  it('Test Subscribe form', () => {
    const fillSubscribeForm = (email) => {
      cy.getDataTest('subscribe-form').find('input').clear()
      if (email) {
        cy.getDataTest('subscribe-form').find('input').type(email)
      }
      cy.getDataTest('subscribe-button').click()
    }

    // Helper function to assert message using regex
    const assertMessage = (message, shouldExist = true) => {
      cy.contains(new RegExp(message, 'i')).should(
        shouldExist ? 'exist' : 'not.exist'
      )
    }

    cy.contains(/Testing forms/i)

    const testCases = [
      { email: 'randil@randil.com', success: true },
      { email: 'randil@randil', success: false },
      { email: ' ', success: false },
    ]

    testCases.forEach(({ email, success }) => {
      if (email === '') {
        // Special handling for empty email
        cy.getDataTest('subscribe-form').find('input').should('have.value', '')
        cy.getDataTest('subscribe-button').click()
        assertMessage('Error: Email cannot be empty', true)
      } else {
        const messageType = success ? 'Successfully subbed' : 'Invalid email'
        assertMessage(`${messageType}: ${email.trim()}`, false)
        fillSubscribeForm(email)
        assertMessage(`${messageType}: ${email.trim()}`, true)
      }
    })
  })
})
