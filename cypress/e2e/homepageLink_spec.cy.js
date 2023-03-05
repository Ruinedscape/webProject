describe('Link to homepage', () => {
	it('redirects to homepage', () => {
		cy.visit('localhost:3000/login');

		cy.contains('Home').click();
		cy.contains('Code Wall');
	})
})
