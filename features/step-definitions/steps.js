import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/home.page.js';
import loginPage from '../pageobjects/login.page.js';

// const pages = {
//     login: LoginPage
// }

// Given(/^I am on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveText(expect.stringContaining(message));
// });

Then('user should be redirected to homepage', async () => {
  await browser.pause(5000)
  await HomePage.ValidateOnHomePage()
})

When('user clik login button', async () => {
  await LoginPage.clickBtnLogin()
})

Given('user input {string} as password', async (password) => {
  await LoginPage.inputPassword(password)
  // Write code here that turns the phrase above into concrete actions
})

Given('user input {string} as username', async (username) => {
  await LoginPage.inputUsername(username)
  // Write code here that turns the phrase above into concrete actions
})

Given('user is on Login Page', async() => {
  await LoginPage.open()
    // Write code here that turns the phrase above into concrete actions
})

Then('user should see error message {string}', async (errorMessage) => {
  await LoginPage.validateWrongPassword(errorMessage)
})

When('user login using {string} as username and {string} as password', async (username, password) => { 
  await LoginPage.login(username, password)
  await LoginPage.clickBtnLogin()
  await LoginPage.validateWrongPassword(errorMessage)
})



