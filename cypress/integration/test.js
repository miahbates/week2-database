beforeEach(() => {
  cy.task("resetDb");
});


// test for landing on homepage
describe("homepage tests", () => {
it("can find homepage", () => {
  cy.visit("/");
});

// check title of landing page
it("can find title on home page", () => {
  cy.visit("/");
  cy.get("h1").contains("Who-said-that");
});


it("can fill out username, personal fact and cohort (from drop down)", () => {
  cy.visit("/");
  cy.get("form").find("input[name='first_name']").type("Gregor");
  cy.get("form")
    .find("input[name='facts']")
    .type("I once won a tea drinking competition");
  cy.get("form").find("input[type='submit']").click();
  cy.url().should("include", "/");
});
});