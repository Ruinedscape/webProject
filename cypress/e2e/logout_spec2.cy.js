describe('Registering then logging in then clicking logout', () => {
	it('redirects to /logout', () => {
		cy.visit('localhost:3000/register');

		cy.get('input[id=username]').type('anything');
		cy.get('input[id=password]').type('password');		
		cy.get('form').contains('Register').click();

		cy.get('input[id=username]').type('anything');
		cy.get('input[id=password]').type('password');		
		cy.get('form').contains('Login').click();
		
		cy.contains('Logout').click();
		cy.url().should('include', 'logout');
	})
})
