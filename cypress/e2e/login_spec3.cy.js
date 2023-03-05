describe('Logging in without inputing a username or password', () => {
	it('gives a popup and stays in /login', () => {
		cy.visit('localhost:3000/login');
			
		cy.get('form').contains('Login').click();
		cy.url().should('include', 'login');
	})
})
