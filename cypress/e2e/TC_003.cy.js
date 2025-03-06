
    it('nespresso', () => {
        cy.visit('https://www.nespresso.com/ma/fr/')
        

        cy.get('#onetrust-accept-btn-handler').should('exist')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.wait(4000)
        cy.scrollTo('top')
        cy.get('label[data-role="minisearch-label"]').click()
        cy.get('input[id="search"]').type("machines{ENTER}")
        // cy.get('div[class="actions-primary"]').should('exist')
        cy.get('div[class="actions-primary"]').first().click()

        
    })