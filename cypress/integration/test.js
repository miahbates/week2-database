beforeEach(() => {
  cy.task("resetDb");
});

// test for landing on homepage
describe("homepage tests", () => {
  it("can find homepage", () => {
    cy.visit("/");
  });

  it("will serve error page", () => {
    cy.visit("/jgshghjao");
    cy.contains("error");
  });

  // check title of landing page
  it("can find title on home page", () => {
    cy.visit("/");

    cy.get("h1").contains("Who-said-that");
  });

  //check title of cohort facts page
  it("can find title on facts page", () => {
    cy.visit("/display_facts");
    cy.get("h1").contains("Cohort facts");
  });

  it("can fill out username, personal fact and cohort (from drop down)", () => {
    cy.visit("/");
    cy.get("form").find("input[name='first_name']").type("Gregor");
    cy.get("form")
      .find("textarea[name='facts']")
      .type("I once won a tea drinking competition");
    cy.get("form").find("input[type='submit']").click();
    cy.url().should("include", "/");
  });

  it("can view facts about other people", () => {
    cy.visit("/display_facts");
    cy.get("body").find("li").contains("Gregor");
  });
});
