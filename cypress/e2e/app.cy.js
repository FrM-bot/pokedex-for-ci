
describe('App', () => {
  it('should display welcome message', () => {
    cy.visit('http://localhost:5000')
    cy.contains('raichu')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
}
)
