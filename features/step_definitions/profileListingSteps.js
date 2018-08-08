let PlaceListingPage = require('../../support/pages/placeListingPage')
let Users = require('../../support/environmentSetup/user')


module.exports = function () {

  this.Given(/^logged in as a user$/, function () {
    Users.loginAsMember()
  })

  this.When(/^I add the required information for a listing$/, function () {
    PlaceListingPage.navigateToPlaceListingPage()
    PlaceListingPage.selectAdCategory()
    PlaceListingPage.selectSubscriptionPlanPricing()
    PlaceListingPage.enterCreditCardInfo()
    PlaceListingPage.enterAddress()
    PlaceListingPage.paymentCompletedValidation()
  })

  this.Then(/^my listing is available to view$/, function () {
    callback.pending();
  })
}