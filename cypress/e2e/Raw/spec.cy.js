import env from '../../environment.json'
describe('Raw template for test case development', () => {
  it('Title test', () => {
    cy.visit('/');
    cy.title().should('eq','XYZ Bank')
  })

  it('Verify Package.json Environment variable test',()=>{
    cy.log(Cypress.env('devUrl'));
    cy.log(Cypress.env('qaUrl'));
    cy.log(Cypress.env('stagingUrl'));
    cy.log(Cypress.env('productionUrl'));

    expect(Cypress.env('devUrl')).to.equal('www.devurl.com');
    expect(Cypress.env('qaUrl')).to.equal('www.qaurl.com');
    expect(Cypress.env('stagingUrl')).to.equal('www.stagingurl.com');
    expect(Cypress.env('productionUrl')).to.equal('www.productionurl.com');
  })

  it.only('Verify cyppress.env.json Environment variable test',()=>{
    cy.log(env.urls);
    cy.log(env.urls.devurl);
    cy.log(env.urls.qaurl);
    cy.log(env.urls.stagingurl);
    cy.log(env.urls.productionurl);
    expect(env.urls.devurl).to.equal('www.devurl.com');
    expect(env.urls.qaurl).to.equal('www.qaurl.com');
    expect(env.urls.stagingurl).to.equal('www.stagingurl.com');
    expect(env.urls.productionurl).to.equal('www.productionurl.com');
  })
})