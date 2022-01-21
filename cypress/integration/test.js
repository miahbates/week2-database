beforeEach(() => {
  cy.task("resetDb");
});

// test for landing on homepage
describe("homepage tests", () => {
  it("can find homepage", () => {
    cy.visit("/");
  });

  it("404 if page not found", () => {
    cy.request({ url: "/hwwfnjnjwfwj", failOnStatusCode: false }).should(
      (response) => {
        expect(response.status).to.eq(404);
      }
    );
  });

  // check title of landing page
  it("can find title on home page", () => {
    cy.visit("/");

    cy.get("h1").contains("Who Said That?");
  });

  //check title of cohort facts page
  it("can find title on facts page", () => {
    cy.visit("/display_facts");
    cy.get("h1").contains("FAC cohort facts");
  });

  it("can fill out username, personal fact and cohort, page redirects to home", () => {
    cy.visit("/");
    cy.get("form").find("input[name='first_name']").type("Gregor");
    cy.get("form")
      .find("textarea[name='facts']")
      .type("I once won a tea drinking competition");
    cy.get("form").find("input[name='cohort']").type("16");
    cy.get("form").find("input[type='submit']").click();
    cy.url().should("include", "/");
  });

  it("newly submitted fact is displayed on display_facts page", () => {
    cy.visit("/");
    cy.get("form").find("input[name='first_name']").type("Reuben");
    cy.get("form")
      .find("textarea[name='facts']")
      .type("I met Madonna at Legoland");
    cy.get("form").find("input[name='cohort']").type("17");
    cy.get("form").find("input[type='submit']").click();
    cy.wait(2000);
    cy.get("a").click();
    cy.url().should("include", "/display_facts");
    cy.contains("I met Madonna at Legoland");
  });

  it("script tags do not get rendered on page", () => {
    cy.visit("/");
    cy.get("form").find("input[name='first_name']").type("Reuben");
    cy.get("form")
      .find("textarea[name='facts']")
      .type("<script src='badstuff'></script>");
    cy.get("form").find("input[name='cohort']").type("17");
    cy.get("form").find("input[type='submit']").click();
    cy.wait(2000);
    cy.get("a").click();
    cy.url().should("include", "/display_facts");
    cy.contains('<script src="badstuff"></script>').should("not.exist");
  });
});
