describe('Displays a list of groceries', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is expected to display a list of 5 elements', () => {
    cy.get('[data-cy=list]').should('have.length', '5')
  })
})