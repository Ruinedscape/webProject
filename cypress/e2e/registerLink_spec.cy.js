describe('Link to register', () => {
	it('redirects to /register', () => {
		cy.visit('localhost:3000');

		cy.contains('Register').click();
		cy.url().should('include', 'register');
	})
})
