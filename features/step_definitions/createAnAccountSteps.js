let RegisterPage = require('../../support/pages/registerPage')
let Email = require('../../support/pages/email')

module.exports = function () {
  this.Given(/^I begin the registration process$/, function () {
    RegisterPage.navigateToCreateAccountPage()

  })

  this.When(/^I add the required account information$/, function () {
    // RegisterPage.fillOutAccountDetails()
    // RegisterPage.fillOutName()
    // RegisterPage.selectCompleteSignUpButton()
  })

  this.Then(/^an account is created$/, function () {
    Email.loginToGmail()
    Email.authenticateNewUser()
  })
}
