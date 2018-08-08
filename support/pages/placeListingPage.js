'use strict'

let Common = require('../../support/pages/common')
let expect = require('chai').expect
let Faker = require('faker')

let min
let max
let randNum
let ccNum
let num
let randomLastName
let address1
let address2
let state
let city
let postCode

class PlaceListingPage {

  //Credit Card input fields
  get creditCardInputField () {return browser.element('#awpcp-billing-credit-card-number')}
  get creditCardExpMonthInputField () {return browser.element('#awpcp-billing-card-exp-month')}
  get creditCardExpYearInputField () {return browser.element('#awpcp-billing-card-exp-month')}
  get creditCardCSCInputField () {return browser.element('#awpcp-billing-csc')}

  //Name & Address input fields
  get lastNameInputField () {return browser.element('#awpcp-billing-last-name')}
  get addressLine1InputField () {return browser.element('#awpcp-billing-address-1')}
  get addressLine2InputField () {return browser.element('#awpcp-billing-address-2')}
  get stateInputField () {return browser.element('#awpcp-billing-state')}
  get cityInputField () {return browser.element('#awpcp-billing-city')}
  get postalCodeInputField () {return browser.element('#awpcp-billing-postal-code')}

  navigateToPlaceListingPage () {
    browser.url("https://myhomeschoolhub.com/listings/place-listing/")
  }

  selectAdCategory () {
    let adCategoryArr = browser.elements("//select[@id='awpcp-category-dropdown']//option").getText()
    max = adCategoryArr.length
    min = 2
    randNum = Common.ranNumGenerator(min, max)
    let selectedAdCategory = browser.element(`//select[@id='awpcp-category-dropdown']//option[${randNum}]`).getText()
    global.selectedAdCategory = selectedAdCategory
    console.log('Selected Ad Category: ' + selectedAdCategory)
    browser.element(`//select[@id='awpcp-category-dropdown']//option[${randNum}]`).click()
  }

  selectSubscriptionPlanPricing () {
    randNum = Math.floor(Math.random() * 10) + 1
    let selectedSubscriptionPlanPrice = browser.element(`//tr[@id='subscription-plan-${randNum}']//label`).getText()
    global.selectedSubscriptionPlanPrice = selectedSubscriptionPlanPrice
    console.log('Selected subscription plan price: ' + selectedSubscriptionPlanPrice)
    global.selectedSubscriptionPlanDescription = browser.element(`//tr[@id='subscription-plan-${randNum}']//td[@data-title='Payment Term']`).getText()
    console.log(global.selectedSubscriptionPlanDescription)
    browser.element(`//tr[@id='subscription-plan-${randNum}']//label`).click()
    Common.selectContinueButton()
    let paymentTermsInfo = browser.element("//td[@class='item']").getText()
    expect(paymentTermsInfo).to.have.string(global.selectedSubscriptionPlanDescription)
    Common.selectContinueButton()
  }

  enterCreditCardInfo () {
    num = Math.floor(Math.random() * 3) + 1
    switch (num) {
      case 1:
        ccNum = '4111111111111111'
        break
      case 2:
        ccNum = '5105105105105100'
        break
      case 3:
        ccNum = '378282246310005'
        break
    }
    this.creditCardInputField.setValue(ccNum)
    let expMonth = Math.floor(Math.random() * 12) + 1
    let expYear = Math.floor(Math.random() * 2012) + 2019
    this.creditCardExpMonthInputField.setValue(expMonth)
    this.creditCardExpYearInputField.setValue(expYear)
    this.creditCardCSCInputField.setValue('123')
  }

  enterAddress () {
    // let address = Math.floor(Math.random() * 3) + 1
    let address = 1
    switch (address) {
      case 1:
        address1 = '750 N 16th S'
        address2 = 'Suite 200'
        state = '26'
        city = 'Saint Louis'
        postCode = '63103'
    }
    browser.element("//select[@id='awpcp-billling-country']//option[2]").click()
    this.lastNameInputField.setValue('someLastName')
    this.addressLine1InputField.setValue(address1)
    this.addressLine2InputField.setValue(address2)
    browser.element(`//select[@id='awpcp-billing-state']//option[${state}]`).click()
    this.cityInputField.setValue(city)
    this.postalCodeInputField.setValue(postCode)
    Common.selectContinueButton()
  }

  paymentCompletedValidation () {
    console.log(browser.element('//td').getText())
  }

}
module.exports = new PlaceListingPage()