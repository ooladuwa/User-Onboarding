describe("Advanced Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  const nameInput = () => cy.get('input[name="name"]');
  const emailInput = () => cy.get('input[name="email"]');
  const passwordInput = () => cy.get('input[name="password"]');
  const terms = () => cy.get('input[name="termsOfService"]');
  const button = () => cy.get('button[className="btn"]');

  it("sanity test to make sure tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).to.not.equal(5);
  });
  it("get name input and type name in it", () => {
    nameInput()
      .should("exist")
      .should("have.value", "")
      .type("Bob DaBuilda")
      .should("have.value", "Bob DaBuilda");
  });
  it("get email input and type valid email", () => {
    emailInput()
      .should("exist")
      .should("have.value", "")
      .type("bob@bob.com")
      .should("have.value", "bob@bob.com");
  });
  it("get password input and type valid password", () => {
    passwordInput()
      .should("exist")
      .should("have.value", "")
      .type("buildubadmofo")
      .should("have.value", "buildubadmofo");
  });
  it("check if user can check terms box", () => {
    // check if box is empty
    terms().should("exist").should("have.value", "on");
    // change box input to checked
  });
  it("check if submit button works", () => {
    button().should("exist").click();
  });
});
