describe('Login', () => {
  it('Acceder a Login', () => {
    // Visitar el sitio
    cy.visit('http://127.0.0.1:8000/');

    // Hacer clic en el elemento con la clase "btn btn-outline-dark"
    cy.get('.btn.btn-outline-dark').click();

    // Realizar asserts
    cy.url().should('include', '/login'); // Verificar que la URL contenga '/login'
    cy.get('#inputEmail').should('exist'); // Verificar la existencia del campo inputEmail
    cy.get('#inputPassword').should('exist'); // Verificar la existencia del campo inputPassword
  });

  it('Validate user', () => {
    // Visitar el sitio
    cy.visit('http://127.0.0.1:8000/');

    // Hacer clic en el elemento con la clase "btn btn-outline-dark"
    cy.get('.btn.btn-outline-dark').click();
    cy.get('#inputEmail').type('wagagt@gmail.com');
    cy.get('#inputPassword').type('12345678'); // Verificar la existencia del campo inputPassword
    cy.get('.btn.btn-primary').click();



    
  });


});
