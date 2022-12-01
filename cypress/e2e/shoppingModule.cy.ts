describe('protected routing', () => {
    it("has a protected routing and auto-rerouting to auth module", () => {
        cy.visit("/shopping");
        cy.url().should("eq", "/auth/");
    });
  });
  
describe("shopping functionality", () => {
    beforeEach(() => {
        cy.visit("/auth/login");
        cy.get("[data-test=email]").type("fake@email.com");
        cy.get("[data-test=password]").type("password{enter}");
        cy.get('button[type="submit"]').click();
        cy.visit("/shopping");
    });

    it("contains nav bar", () => {
        cy.contains("#navbar");
    });

    it("requires grocery item field", () => {
        cy.get('button[type="submit"]').click();
        cy.get(".error-messages").should("contain", "itemName can't be blank");
    });

    it("requires servings field", () => {
        cy.get("[data-test=itemName]").type("spinach");
        cy.get('button[type="submit"]').click();
        cy.get(".error-messages").should("contain", "quantity can't be blank");
    });

    it("able to submit form", () => {
        cy.get("[data-test=itemName]").type("spinach");
        cy.get("[data-test=quantity]").type("4");
        cy.get('button[type="submit"]').click();
        cy.on('window:alert',(t)=>{
        expect(t).to.contains('spinach successfully added to list!');
        })
    });

    it("displays list of current grocery items", () => {
        cy.get("[data-test=itemName]").type("spinach");
        cy.get("[data-test=quantity]").type("4");
        cy.get('button[type="submit"]').click();
        cy.contains("#shoppingList li spinach");
    });
});
