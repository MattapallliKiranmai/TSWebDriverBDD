import { Given, When, Then } from '@cucumber/cucumber';

import LoginPage from 'src/pages/login.page';
import FormPage from 'src/pages/form.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
    await browser.maximizeWindow();
    await LoginPage.acceptCookies();
    await LoginPage.selectLoginBtn();
});

When(/^I login with new customer username and (.+)$/, async (password: string) => {
    await LoginPage.registerAsNewCustomer(password);
    const close = await $("//*[@data-testid='Newsletter-close-pvh-icon-button']")
    await close.click();
    await browser.pause(1000);
    const actualText = await (FormPage.myAccountText).getText();
    expect (actualText).toEqual("Mijn account");
});

Given(/^I should be in the address page$/, async () => {
    await FormPage.selectAddressLink();
});

When(/^I add new address with (.+),(.+),(.+),(.+),(.+),(.+)$/, async (firstname: string, lastname: string, street: string, houseno: string, city: string, postcode: string) => {
    await FormPage.selectAddressLink();
    await FormPage.addNewAddress(firstname, lastname, street, houseno, city, postcode);
});

Then(/^I verify new address added successfully (.+)$/, async (message: string) => {
    expect(await FormPage.addAddressSuccessTxt).toBeExisting();
    expect(await FormPage.addAddressSuccessTxt.getText()).toEqual(message);
});

Then(/^I logout from the CK Website$/, async () =>{
    await FormPage.myAccountText.moveTo();
    const logout = await $("//*[@data-testid='sign-out-pvh-ResponsiveNavListItem']");
    await logout.click();
    await browser.pause(5000);
    
  });

  Given(/^I Should see login screen$/, async ()=> {
    await LoginPage.selectLoginBtn();
    await browser.pause(5000);
  });

  When(/^I enter invalid details as (.+) and (.+)$/, async (username:string, password:string)=> {
     await LoginPage.login(username,password);
  });

  Then(/^I verify (.+)$/, async (errormessage:string) =>{
    await browser.pause(1000);
    expect(await LoginPage.alertMessage).toBeExisting();
    console.log("Actual:"+LoginPage.alertMessage.getText())
    expect(await LoginPage.alertMessage.getText()).toEqual(errormessage);
  });

  Then(/^I close the login screen$/, async () =>{
    await LoginPage.closeBtn.click();
  });

