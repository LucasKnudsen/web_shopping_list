describe('User can see a header', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is expected to display a title', () => {
    cy.get('[data-cy=header]').should('contain.text', 'Knudsens Indkøb')
  })
})