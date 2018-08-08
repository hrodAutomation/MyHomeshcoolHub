let Common = require('../../support/pages/common')

class email {

  get gmailSignInLink () {return browser.element('*=SIGN IN')}
  get gmailIdentifierID () {return browser.element('#identifierId')}
  get gmailIdentifierNextButton () {return browser.element("//div[@id='identifierNext']/content/span")}
  get gmailPasswordInput () {return browser.element("//input[@name='password']")}
  get gmailPasswordNextButton () {return browser.element("//div[@id='passwordNext']/content/span")}

  loginToGmail () {
    browser.url("https://www.google.com/gmail/about/")
    this.gmailSignInLink.waitForVisible()
    this.gmailSignInLink.click()
    this.gmailIdentifierID.setValue('homehubtestuser')
    this.gmailIdentifierNextButton.click()
    Common.sleep(1000)
    this.gmailPasswordInput.waitForVisible()
    this.gmailPasswordInput.setValue('Potatoes123')
    this.gmailPasswordNextButton.click()
  }

  authenticateNewUser () {
    Common.sleep(2000)
    console.log("GREEN")
    browser.element("//div[@id=':3f']").click()
    Common.sleep(1000)
    browser.element("//td[@class='m_-7579748445932273834body_text_color m_-7579748445932273834body_text_size']/p[2]/a").click()
    Common.sleep(5000)
  }

}
module.exports = new email()
