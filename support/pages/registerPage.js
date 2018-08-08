let Common = require('../../support/pages/common')
let faker = require('faker')
let min
let max
let randNum
let visibilityArr

class RegisterPage {

  // Account Details
  get userNameInputField () {return browser.element('#signup_username')}
  get emailAddressInputField () {return browser.element('#signup_email')}
  get passwordInputField () {return browser.element('#signup_password')}
  get passwordConfirmationInputField () {return browser.element('#signup_password_confirm')}

  // Profile Details
  get nameInputField () {return browser.element('#field_1')}
  get nameFieldVisibilityChangeButton () {return browser.element("//button[@aria-describedby='field_1-2']")}
  get bioTextButton () {return browser.element("#field_86-html")}
  get bioInputField () {return browser.element("#field_86")}
  get bioChangeButton () {return browser.element("//button[@aria-describedby='field_86-2']")}
  get maritalStatusDropDown () {return browser.element("#field_38")}

  get completeSignUpButton () {return browser.element('#signup_submit')}


  navigateToCreateAccountPage() {
    browser.url('https://myhomeschoolhub.com/register/')
  }

  fillOutAccountDetails () {
    this.userNameInputField.setValue('testUser ' + faker.random.number(1000))
    this.emailAddressInputField.setValue('homehubtestuser+' + faker.random.number(1000) + '@gmail.com')
    this.passwordInputField.setValue(Add Password)
    this.passwordConfirmationInputField.setValue(Add Password)
  }

  fillOutName() {
    this.nameInputField.setValue('Chuck')
    this.nameFieldVisibilityChangeButton.click()
    visibilityArr = browser.elements("//div[@id='field-visibility-settings-1']/fieldset//span").getText()
    max = visibilityArr.length
    min = 1
    randNum = Common.ranNumGenerator(min, max)
    global.userNameVisibility = browser.element(`//div[@id='field-visibility-settings-1']/fieldset//label[${randNum}]`).getText()
    console.log(global.userNameVisibility)
    browser.element(`//div[@id='field-visibility-settings-1']/fieldset//label[${randNum}]`).click()
  }

  fillOutBio () {
    this.bioTextButton.click()
    this.bioInputField.setValue('Draymond Jamal Green Sr. is an American professional basketball player for the Golden State Warriors of the National Basketball Association.')
    this.bioChangeButton.click()
    visibilityArr = browser.elements("//div[@id='field-visibility-settings-86']//fieldset//span").getText()
    max = visibilityArr.length
    min = 1
    randNum = Common.ranNumGenerator(min, max)

    browser.element(`//div[@id='field-visibility-settings-86']/fieldset//label[${randNum}]`).click()
  }

  selectingMaritalStatus() {
    this.maritalStatusDropDown.click()

    Common.sleep(5000)
  }

  selectCompleteSignUpButton () {
    this.completeSignUpButton.moveToObject()
    this.completeSignUpButton.click()
    Common.sleep(5000)
  }

}

module.exports = new RegisterPage()