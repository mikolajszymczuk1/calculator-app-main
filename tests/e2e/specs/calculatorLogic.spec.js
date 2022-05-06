// === Helpers functions ===
const clickAllInsertButtons = () => {
    cy.get("[data-cy=insert-button]").each(($el) => {
        $el.click();
    });
}

// =========================

describe("Calculator logic", () => {
    it("Should go to main app page", () => {
        cy.visit("/");
    });

    it("All numbers buttons should insert number on screen, dot button should insert dot on screen", () => {
        cy.viewport(1440, 900);
        clickAllInsertButtons();
        cy.get("[data-cy=screen]").contains("789456123.0");
        cy.get("[data-cy=reset-button]").click();
    });

    it("DEL button should remove elements from screen, when last element must be remove, should replace last element with 0", () => {
        cy.viewport(1440, 900);
        clickAllInsertButtons();
        cy.get("[data-cy=screen]").contains("789456123.0");
        Array(11).fill(0).map(() => { cy.get("[data-cy=del-button]").click(); });
        cy.get("[data-cy=screen]").contains("0");
        cy.get("[data-cy=reset-button]").click();
    });

    describe("Calculator operators", () => {
        it("+", () => {
            cy.viewport(1440, 900);
            clickAllInsertButtons();
            cy.get("[data-cy=plus-operator]").click();
            clickAllInsertButtons();
            cy.get("[data-cy=result-button]").click();
            cy.get("[data-cy=screen]").contains("1578912246");
            cy.get("[data-cy=reset-button]").click();
        });

        it("-", () => {
            cy.viewport(1440, 900);
            clickAllInsertButtons();
            cy.get("[data-cy=minus-operator]").click();
            clickAllInsertButtons();
            cy.get("[data-cy=result-button]").click();
            cy.get("[data-cy=screen]").contains("0");
            cy.get("[data-cy=reset-button]").click();
        });

        it("x", () => {
            cy.viewport(1440, 900);
            clickAllInsertButtons();
            cy.get("[data-cy=multiply-operator]").click();
            clickAllInsertButtons();
            cy.get("[data-cy=result-button]").click();
            cy.get("[data-cy=screen]").contains("623240970142191100");
            cy.get("[data-cy=reset-button]").click();
        });

        it("/", () => {
            cy.viewport(1440, 900);
            clickAllInsertButtons();
            cy.get("[data-cy=divide-operator]").click();
            clickAllInsertButtons();
            cy.get("[data-cy=result-button]").click();
            cy.get("[data-cy=screen]").contains("1");
            cy.get("[data-cy=reset-button]").click();
        });
    });
});
