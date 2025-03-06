/// <reference types="cypress"/>
/// <reference types="cypress-downloadfile"/>

before(function () {
  cy.fixture('example.json').as('test_data')
})
it('Lire fichier', function () {

  cy.fixture('example').then((data) => {
    cy.log(data.name);
    cy.log(data.email);
  })
  cy.log(this.test_data.name)
  cy.fixture('example.json').its('email').should('be.equal', 'hello@cypress.io')
})

it('Lire fichier 2', function () {

  cy.readFile('./cypress/fixtures/example.json').then((data) => {
    cy.log(data.name)
  })

})
it('Ecrire fichier', function () {

  cy.writeFile('textTest.txt', 'first line\n')
  cy.writeFile('textTest.txt', 'second line', { flag: 'a+' })
})

it('upload fichier', function () {

  cy.visit('https://trytestingthis.netlify.app/')
  cy.get('#myfile').attachFile('example.json')
})

it('download file', function () {

  cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg', 'mydownloads', 'example.jpg')
})