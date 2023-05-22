/// <reference types="cypress" />

describe('First test suite', () => {

    it('first test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // to find an element by the Tag Name
        cy.get('input')

        // byID
        cy.get('#inputEmail1')

        // by Class name
        cy.get('.input-full-width')

        // by Attribute name
        cy.get('[placeholder]')

        // by Attribute name and Value
        cy.get('[placeholder="Email"]')

        // by Class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // by Tag name Attribute with value
        cy.get('input[placeholder="Email"]')

        // by two different attributes
        cy.get('[placeholder="Email"][type="email"]')

        // by tag name, Attribute with value, ID and Class name
        cy.get('input[placeholder="Email"]#inputEmail.input-full-width')

        // The most recommended way by Cypress
        cy.get('[data-cy="imputEmail1"]')

    })
    it('Second test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // cy.get('[class="appearance-filled size-medium status-primary shape-rectangle transitions"]').click
        cy.get('[data-cy="signInButton"]')

        cy.contains('Sign in')

        cy.contains('[status="warning"]','Sign in')

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain','Sign in')
            .parents('form')
            .find('nb-checkbox').click()

        cy.contains('nb-card','Horizontal form')
            .find('[type="email"]')
            .type("test@test.com")
        cy.contains('nb-card','Horizontal form')
            .find('[type="password"]')
            .type("SomePassword")
            .parents('form')
            .find('button')
            .should('contain','Sign in').click()

    })

    it.only('Then and wrap methods', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')

        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

        // Saving with a wrapped JQUERRY Method
        cy.contains('nb-card', 'Using the Grid').then( firstForm => {
            const emailLableFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLableFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLableFirst).to.equal('Email')
            expect(passwordLableFirst).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then(secondForm => {
                // secondForm is a wrapped jQuery element
                const passwordSecondText = secondForm.find('[for="exampleInputPassword1"]').text()
                expect(passwordLableFirst).to.equal(passwordSecondText)

                // https://docs.cypress.io/api/commands/wrap
                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
                // wrap this element so we can use cypress commands on it
            })

        })
    })

});

























// describe('Second test suite', () => {

//     describe('One section of suite', () => {

//         beforeEach('code before every test', () => {
//             // Repetitive code like a login function.
// })

//         it('Test name', () => {

//         })
//     })
//     it('first test', () => {

//     })

//     it('second test', () => {

//     })

//     it('third test', () => {

//     })
// });

// describe('Third test suite', () => {
//     it('first test', () => {

//     })

//     it('second test', () => {

//     })

//     it('third test', () => {

//     })
// });
