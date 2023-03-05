describe('Registering without inputing a username or password', () => {
	it('gives a popup and stays in /register', () => {
		cy.visit('localhost:3000/register');
			
		cy.get('form').contains('Register').click();
		cy.url().should('include', 'register');
	})
})
