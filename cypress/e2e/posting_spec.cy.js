describe('Posting without logging in', () => {
	it('does nothing', () => {
		cy.visit('localhost:3000');

		cy.get('input[id=title]').type('anything');
		cy.get('input[id=code]').type('epic code');
		cy.get('form').contains('Submit').click();
		cy.get('h3[name=anything]').should('not.exist');
	})
})
