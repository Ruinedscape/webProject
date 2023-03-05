describe('Logging out without logging in', () => {
	it('redirects to /login', () => {
		cy.visit('localhost:3000');

		cy.contains('Logout').click();
		cy.url().should('include', 'login');
	})
})
