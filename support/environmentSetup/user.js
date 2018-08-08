module.exports = {

  loginAsMember () {
    browser.url("https://myhomeschoolhub.com/login")
    browser.element('#user_login').setValue('testUser1')
    browser.element('#user_pass').setValue(Add Password)
    browser.element('#wp-submit').click()
  }
}