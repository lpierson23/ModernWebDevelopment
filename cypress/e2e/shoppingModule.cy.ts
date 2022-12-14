describe('protected routing', () => {
    it("has a protected routing and auto-rerouting to auth module", () => {
        cy.visit("/shopping");
        cy.url().should("eq", "http://localhost:3000/auth");
    });
  });
  
describe("shopping functionality", () => {
    beforeEach("can successfully login", () => {
        cy.visit("/auth/login");
        cy.get("#email-input").type("ojohnso2@nd.edu");
        cy.get("#password-input").type("password");
        cy.get('button').click();
        cy.wait(1500);
        cy.visit("/shopping");
    });

    it("contains nav bar", () => {
        cy.get("#navbar");
    });

    it("requires grocery item field", () => {
        cy.get('button').click();
        cy.on('window:alert',(t)=> {
            expect(t).to.contains('Submission must include a grocery name');
        });
        cy.on('window:confirm', () => true);
    });

    it("defaults quantity to 1", () => {
        cy.get("#itemName").type("spinach");
        cy.get('button').click();
        cy.on('window:alert',(t)=> {
            expect(t).to.contains('spinach successfully added to list!');
        });
        cy.on('window:confirm', () => true);
        cy.contains("spinach(1)");
    });

    it("able to submit form and see output", () => {
        cy.get("#itemName").type("beans");
        cy.get("#quantity").select("2");
        cy.get('button').click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('beans successfully added to list!');
        });
        cy.contains("beans(2)");
    });
});
