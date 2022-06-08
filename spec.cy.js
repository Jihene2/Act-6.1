import { Register } from "../../page-objects/register"

describe('empty spec', () => {
  const register=new Register

  it('should open website', () => {
   register.launch()

  })

  it('should enter user email', () => {
    register.addUsermail('jihene.s@gmail.com')
    register.validateMail('jihene.s@gmail.com')
  })

  it('should enter first name', () => {
    register.addFirstName('jihene')
    register.validateFirstName('jihene')
  })

  it('should enter user password', () => {
    register.addPassword('@ji654123')
    register.validatePassword('@ji654123')
    

  })

  it('should enter last name', () => {
    register.addLastName('saidene')
    register.validateLastName('saidene')
    
  })
  it('should enter age', () => {
    register.addAge('28')
    register.validateAge('28')
  })

  it('should enter country', () => {
    register.addCountry('Tunisia')
    
  })

  it('should select gender', () => {

    register.selectGender()
    register.validateGenderSelect()


  })

  it('should click submit', () => {
   register.clickSubmit()

  })
})