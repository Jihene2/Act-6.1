export class Register{
   launch() {
    cy.visit('https://demo.wpeverest.com/user-registration/restricted-registration-form/')
   }

   addUsermail(mail){
    cy.get('#user_email').type(mail)
   }
   addFirstName(firstname){
   cy.get('#first_name').type(firstname)
}
    addPassword(PW){
        cy.get('#user_pass').type(PW)
    }

    addLastName(lastname){
        cy.get('#last_name').type(lastname)
    }
    addAge(age){
        cy.get('#number_box_1623120412').type(age)
        
    }
    addCountry(country){
        cy.get('#country_1629717450').select(country)
    }

    selectGender(){
        cy.get('#radio_1623120379_Female').click()
    }

    clickSubmit(){
        cy.get('.btn').click()
    }
    validatePassword(){
    cy.get('.user-registration-password-strength').should('have.text','Medium')
    }

    validateGenderSelect(){
    cy.get('#radio_1623120379_Female').should('be.checked')
    }

    validateMail(mail){
    cy.get('#user_email').should('have.value',mail)
    }

    validateFirstName(firstname){
        cy.get('#first_name').should('have.value',firstname)

    }

    validateLastName(lastname){
        cy.get('#last_name').should('have.value',lastname)
    
    }

    validateAge(age){
        cy.get('#number_box_1623120412').should('have.value',age)
    }


} 
