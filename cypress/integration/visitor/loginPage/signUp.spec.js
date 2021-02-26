describe('Sign Up', () => {
  beforeEach(() => {
    cy.fixture('users').then(({ validUser }) => {
      this.user = validUser;
    });
  });

  it('Visitor singns up with valid credentials', () => {
    const timestemp = +new Date();
    const { firstName, lastName } = this.user;

    const validCredentials = {
      firstName,
      lastName,
      email: `${firstName}-${timestemp}@gmail.com`,
      password: timestemp,
    };

    cy.signup(validCredentials);

    cy.get('[data-cy=dropdown-toggler]').should('contain', validCredentials.email);
  });

  it('Visitor singns up with existed email', () => {
    const timestemp = +new Date();
    const { firstName, lastName, email } = this.user;

    const invalidCredentials = {
      firstName,
      lastName,
      email,
      password: timestemp,
      path: '/login',
    };

    cy.signup(invalidCredentials);

    cy.get('[data-cy=notifier]').should('contain', 'Record Invalid');
  });
});
