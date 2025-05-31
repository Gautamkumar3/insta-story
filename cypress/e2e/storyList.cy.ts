describe('StorList Component', () => {

    beforeEach(() => {
        cy.visit("/")
    })


    it('should render the StoryList Component', () => {
        cy.get('[data-testid="story-list"]').should('exist')
    })

    it('should open a story when a thumbnail is clicked', () => {
        cy.get('[data-testid^="story-img-"]').first().click()
        cy.get('h2').should('not.exist');
    })
})