// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (username, password) => { //nome do comando 

    cy.visit('https://petstore.octoperf.com/actions/Account.action?signonForm=');
    cy.get('[name="username"]').type(username);
    cy.get('#Catalog [name="password"]').clear();
    cy.get('#Catalog [name="password"]').type(password);
    cy.contains('Login').click()

 })

 Cypress.Commands.add('register', (id, password, repeatedPassword, fristname, lastname, email, phone, address1, addres2, city, state, zip, country, language, category) => {

    cy.visit('https://petstore.octoperf.com/actions/Account.action?signonForm=');
    cy.contains('Register').click();
    cy.get('[name="username"]').type(id);
    cy.get('[name="password"]').type(password);
    cy.get('[name="repeatedPassword"]').type(repeatedPassword);
    cy.get('[name="account.firstName"]').type(fristname);
    cy.get('[name="account.lastName"]').type(lastname);
    cy.get('[name="account.email"]').type(email);
    cy.get('input[name="account.phone"]').type(phone);
    cy.get('[name="account.address1"]').type(address1);
    cy.get('input[name="account.address2"]').type(addres2);
    cy.get('[name="account.city"]').type(city);
    cy.get('[name="account.state"]').type(state);
    cy.get('[name="account.zip"]').type(zip);
    cy.get('[name="account.country"]').type(country);
    cy.get('[name="account.languagePreference"]').select(language);
    cy.get('[name="account.favouriteCategoryId"]').select(category);
    cy.get('[name="account.listOption"]').check(); //uncheck();
    cy.get('input[name="account.bannerOption"]').check();
    cy.get('[name="newAccount"]').click();

 })

 Cypress.Commands.add('productSearch', (searchValue) => {

   const products = [
      { id: 'FL-DSH-01', name: 'Manx' },
      { id: 'FL-DLH-02', name: 'Persian' },
   ]

   const expectedID = products[1].id;

   cy.get('[name="keyword"]').type(searchValue);
   cy.get('[name="searchProducts"]').click(); //if there are no search results, no product id should be visible.
   cy.contains('#Catalog td', new RegExp(searchValue, 'i'))
      .closest('tr')                                        // go to the row - table row
      .find('td')                                           // get all cells - table data 
      .eq(1)                                                // second column = Product ID - equals
      .should('contain', expectedID);
 });

/*Cypress.Commands.add('productDescription', (price, productID) => {
   cy.get('#Catalog tr:nth-child(2) b').should('have.text', productID);
   cy.get('#Catalog tr:nth-child(6) td').should('have.text', price);
   cy.get('a[class="Button"]').click();
   cy.contains(productID).should('be.visible');

 });*/