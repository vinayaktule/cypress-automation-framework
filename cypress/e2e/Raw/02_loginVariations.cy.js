describe('Programatical Login Test',()=>{
    
  it.skip('should Login using UI', ()=>{
    cy.loginAppUI('Admin','admin123');
    cy.url().should('contain','dashboard');
   })

   beforeEach('should Login using Session', ()=>{
    cy.loginAppSession('admin','password');
   })

   it('should navigate to url using Session without login', ()=>{
    cy.visit('http://eaapp.somee.com/Home/About')
    cy.get("a[href='/Manage']").should('contain','Hello admin!');
    cy.contains('Log off').click();
   })
})