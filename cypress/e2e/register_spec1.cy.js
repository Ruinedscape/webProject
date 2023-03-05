describe('Registering', () => {
	it('redirects to /login', () => {
		cy.visit('localhost:3000/register');

		
		cy.get('input[id=username]').type('anything');
		cy.get('input[id=password]').type('password');		
		cy.get('form').contains('Register').click();
		cy.url().should('include', 'login');
	})
})
