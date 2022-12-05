describe('protected routing', () => {
    it("has a protected routing and auto-rerouting to auth module", () => {
        cy.visit("/shopping");
        cy.url().should("eq", "http://localhost:3000/auth");
    });
  });
  
describe("shopping functionality", () => {
    beforeEach(() => {
        cy.visit("/auth/login");
        cy.get("#email-input").type("fake@email.com");
        cy.get("#password-input").type("password");
        cy.get('button').click();
        cy.wait(1500);
        cy.visit("/shopping");
    });

    it("contains nav bar", () => {
        cy.contains("#navbar");
    });

    // it("requires grocery item field", () => {
    //     cy.get('button').click();
    //     cy.get(".error-messages").should("contain", "itemName can't be blank");
    // });

    // it("requires servings field", () => {
    //     cy.get("#itemName").type("spinach");
    //     cy.get('button').click();
    //     cy.get(".error-messages").should("contain", "quantity can't be blank");
    // });

    // it("able to submit form", () => {
    //     cy.get("#itemName").type("spinach");
    //     cy.get("#quantity").type("4");
    //     cy.get('button').click();
    //     cy.on('window:alert',(t)=>{
    //     expect(t).to.contains('spinach successfully added to list!');
    //     })
    // });

    // it("displays list of current grocery items", () => {
    //     cy.get("#itemName").type("spinach");
    //     cy.get("#quantity").type("4");
    //     cy.get('button').click();
    //     cy.contains("#shoppingList li spinach");
    // });
});
