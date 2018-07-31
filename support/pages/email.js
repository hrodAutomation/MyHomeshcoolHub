let Common = require('../../support/pages/common')

class email {

  loginToGmail () {
    browser.url("https://www.google.com/gmail/about/")
    browser.waitForVisible('*=SIGN IN', 5000)
    browser.element('*=SIGN IN').click()
    browser.element('#identifierId').setValue('homehubtestuser')
    browser.element("//div[@id='identifierNext']/content/span").click()
    browser.waitForVisible("//input[@name='password']", 5000)
    browser.element("//input[@name='password']").setValue(set_password)
    browser.element("//div[@id='passwordNext']/content/span").click()
  }

  authenticateNewUser () {
    browser.waitForVisible("//span[@name='My Homeschool Hub']", 5000)
    browser.element("//span[@name='My Homeschool Hub']").click()
    browser.waitForVisible("*=myhomeshoolhub.com", 5000)
    browser.element('*=myhomeshoolhub.com').click()
    Common.sleep(5000)
  }

}
module.exports = new email()
