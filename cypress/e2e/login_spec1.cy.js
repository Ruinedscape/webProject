describe('Inputting wrong login details', () => {
	it('redirects to /login', () => {
		cy.visit('localhost:3000/login');

		cy.get('input[id=username]').type('anything');
		cy.get('input[id=password]').type('password');		
		cy.get('form').contains('Login').click();
		cy.url().should('include', 'login');
	})
})
