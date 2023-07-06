// import { click, setText } from 'src/utils/commands';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get acceptCookiesBtn () { return $("//*[@data-testid='accept-cookies-pvh-button']")}
    get loginBtn () {return $("//*[contains(@class,'HeaderAccount_SignInRegisterText')]")}
    get newcustomerRegisterBtn () { return $("//*[@data-testid='register-pvh-button']")}
    get newCustomerEmailField () { return $('#email-register-form')}
    get newCustomerPasswordField () { return $('#password-register-form')}
    get newCustomerRepeatPasswordField () { return $('#passwordConfirmation-register-form')}
    get termsCheckBox () { return $("//*[@data-testid='terms-Checkbox-Component-icon']")}
    get registerFormSubmitBtn () { return $("//*[@data-testid='register-form-submit-pvh-button']")}
    get accountText () { return $("//*[@data-testid='HeaderAccount-myaccount-button']")}
    get registerBtn() { 
        return $("//*[contains(@class,'LoginForm_loginButton')]"); 
    }
    get usernameElement() { 
        return $("//*[@id='email-login-form']"); 
    }
    get passwordElement() { 
        return $("//*[@id='password-login-form']") ;
    }
    get alertMessage() {
         return $("//*[contains(@class,'Alert_error')]") ;
    }
    get closeBtn() { 
        return $("//*[contains(@class,'Modal_CloseButton')]") ;
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username: string, password: string) {
      await this.usernameElement.setValue(username);
      await this.passwordElement.setValue(password);
      await this.registerBtn.click();
    }

    async acceptCookies(){
        return this.acceptCookiesBtn.click();
    }

    async selectLoginBtn(){
        return this.loginBtn.click();
    }

    async randomEmailGenerator(){
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var randomEmail= await chars[Math.floor(Math.random()*26)] 
                  + Math.random().toString(36).substring(2,11) 
                  + '@gmail.com';
        return randomEmail;
    }

    async registerAsNewCustomer(password: string){
        await this.newcustomerRegisterBtn.click();
        const emailID = await this.randomEmailGenerator();
        await this.newCustomerEmailField.addValue(emailID);
        await this.newCustomerPasswordField.scrollIntoView();
        await this.newCustomerPasswordField.addValue(password)
        await this.newCustomerRepeatPasswordField.addValue(password)
        await this.termsCheckBox.scrollIntoView();
        await browser.pause(5000);
        await this.termsCheckBox.click();
        await this.registerFormSubmitBtn.click();
        await browser.pause(10000);
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new LoginPage();
