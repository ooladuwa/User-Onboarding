"use strict";

describe("Advanced Form", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });

  var nameInput = function nameInput() {
    return cy.get('input[name="name"]');
  };

  var emailInput = function emailInput() {
    return cy.get('input[name="email"]');
  };

  var passwordInput = function passwordInput() {
    return cy.get('input[name="password"]');
  };

  var terms = function terms() {
    return cy.get('input[name="termsOfService"]');
  };

  var button = function button() {
    return cy.get('button[className="button"]');
  };

  it("sanity test to make sure tests work", function () {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).to.not.equal(5);
  });
  it("get name input and type name in it", function () {
    nameInput().should("exist").should("have.value", "").type("Bob DaBuilda").should("have.value", "Bob DaBuilda");
  });
  it("get email input and type valid email", function () {
    emailInput().should("exist").should("have.value", "").type("bob@bob.com").should("have.value", "bob@bob.com");
  });
  it("get password input and type valid password", function () {
    passwordInput().should("exist").should("have.value", "").type("buildubadmofo").should("have.value", "buildubadmofo");
  });
  it("check if user can check terms box", function () {
    // check if box is empty
    terms().should("exist").should("have.value", "on"); // change box input to checked
  });
  it("check if submit button works", function () {
    button().should("exist").click();
  });
});