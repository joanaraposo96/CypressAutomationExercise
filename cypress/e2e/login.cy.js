describe('PetStoreTests', () => {
  it('Login with sucess', () => {
    cy.login('dakeluzu', '1234');
    cy.contains('Welcome Kay!').invoke('text').should('contains', 'Welcome Kay!');
  });
});
