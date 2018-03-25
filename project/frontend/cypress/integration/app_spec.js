describe("Django REST framework / React quickstart app", () => {
  const book = {
    title: "Bible",
    author: "God",
  };
  before(() => {
    cy.exec("npm run dev");
    cy.exec("npm run flush");
  });
  it("should be able to fill a web form", () => {
    cy.visit("/");
    cy
      .get('input[name="title"]')
      .type(book.title)
      .should("have.value", book.title);
    cy
      .get('input[name="author"]')
      .type(book.author)
      .should("have.value", book.author);
  });
  it("should be able to see the table", () => {
    cy.visit("/");
    cy.get("tr").contains(`${book.title}${book.author}`);
  });
  // more tests here
});