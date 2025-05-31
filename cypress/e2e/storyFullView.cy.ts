describe("StoryFullView Componet", () => {
    beforeEach(() => {
        cy.visit("/")
        cy.get('[data-testid^="story-img-"]').first().click()
    })

    it('should display the StoryFullView container', () => {
        cy.get('[data-testid="story-full-view"]').should('exist');
    });

    it('should display the current story image', () => {
        cy.get('[data-testid="story-full-image"]').should('be.visible')
    })

    it('should have a close button', () => {
        cy.get('[data-testid="close-button"]').should('be.visible');
    });

    it('should close the story view when close button is clicked', () => {
        cy.get('[data-testid="close-button"]').click()
        cy.get('[data-testid="story-full-view"]').should('not.exist')
    })

    it('should advance to next/previous story when image is clicked on respective half', () => {
        cy.get('[data-testid="story-full-view"]').then(($el) => {
            const width = $el.width();
            const centerX = width! / 2;

            cy.wrap($el).click(centerX + 10, 40)

            cy.wrap($el).click(centerX - 10, 40)
        })
    })
})