describe('PetStoreTests', () => {

    beforeEach('Preconditions', () => {
        cy.login('dakeluzu', '1234');
    });

    it('Login Successful', () => {
        cy.contains('Welcome Kay!').invoke('text').should('contains', 'Welcome Kay!');
    });

    it('Search for existing product name and validate its corresponding ID', () => {
        cy.productSearch('persian');
    });

});
   