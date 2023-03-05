describe('Link to login', () => {
	it('redirects to /login', () => {
		cy.visit('localhost:3000');

		cy.contains('Login').click();
		cy.url().should('include', 'login');
	})
})
