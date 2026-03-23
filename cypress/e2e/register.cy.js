describe('PetStoreTests', () => {
    it('Register', () => {
        cy.register(
          `jojo${Date.now()}`, 
          '1234', 
          '1234', 
          'Jojo', 
          'Mojo', 
          'jojomojo@gmail.com', 
          '999000111', 
          'Address1', 
          'Address2',
          'Madrid',
          'Comunidad',
          '00000',
          'Madrid',
          'japanese',
          'CATS',
        );
        cy.contains('Search').should('be.visible');
    })
})