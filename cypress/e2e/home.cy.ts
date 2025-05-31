describe('Home Page', () => {
    it('should render the Home page with Instagram heading', () => {
        cy.visit('/'); 
        cy.get('h2').should('contain.text', 'Instagram');
    });
});
  