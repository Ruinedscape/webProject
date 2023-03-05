describe('Registering then logging in', () => {
	it('redirects to homepage', () => {
		cy.visit('localhost:3000/register');

		cy.get('input[id=username]').type('anything');
		cy.get('input[id=password]').type('password');		
		cy.get('form').contains('Register').click();

		cy.get('input[id=username]').type('anything');
		cy.get('input[id=password]').type('password');		
		cy.get('form').contains('Login').click();
		cy.contains('Code Wall');
	})
})
