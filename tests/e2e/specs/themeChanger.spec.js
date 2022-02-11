describe("Theme changer", () => {
    it("When click theme button, add correct class to calculator and theme changer button", () => {
        cy.visit("/");
        cy.viewport(1440, 900);
        cy.get("[data-cy=calculator]").should("have.not.class", "theme-2");
        cy.get("[data-cy=theme-changer]").should("have.not.class", "theme-2");
        cy.get("[data-cy=calculator]").should("have.not.class", "theme-3");
        cy.get("[data-cy=theme-changer]").should("have.not.class", "theme-3");
        cy.get("[data-cy=theme-changer]").click();
        cy.get("[data-cy=calculator]").should("have.class", "theme-2");
        cy.get("[data-cy=theme-changer]").should("have.class", "theme-2");
        cy.get("[data-cy=theme-changer]").click();
        cy.get("[data-cy=calculator]").should("have.class", "theme-3");
        cy.get("[data-cy=theme-changer]").should("have.class", "theme-3");
    });
});
