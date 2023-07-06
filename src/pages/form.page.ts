class FormPage {

    get newletterPopupClose() { return $("//*[@data-testid='Newsletter-close-pvh-icon-button']")}
    get myAccountText() { return $("//*[@data-testid='HeaderAccount-myaccount-button']")}
    get myAddressLink () { return $("//*[@href='/myaccount/addresses']")}
    get addAddressBtn () { return $("//*[@data-testid='create-address-pvh-icon-button']")}
    get firstNameField () { return $('#firstName-Bform')}
    get lastNameField () { return $('#lastName-Bform')}
    get streetField () { return $('#address1-Bform')}
    get houseNumberField () { return $('#address2-Bform')}
    get placeField () { return $('#city-Bform')  }
    get zipCodeField () { return $('#zipCode-Bform')}
    get addAddressSubmitBtn () { return $("//*[@data-testid='address-form-add-pvh-button']")}
    get addAddressSuccessTxt(){ return $("#success-alert-content")}

    async selectAddressLink(){
        return this.myAddressLink.click();
    }

    async addNewAddress(firstname:string, lastname:string, street:string, houseno:string, city:string, postcode:string){
        await browser.pause(5000);
        await this.addAddressBtn.click();
        await this.firstNameField.addValue(firstname);
        await this.lastNameField.addValue(lastname);
        await this.streetField.scrollIntoView();
        await this.streetField.addValue(street);
        await this.houseNumberField.addValue(houseno);
        await this.placeField.addValue(city);
        await this.zipCodeField.addValue(postcode);
        await this.addAddressSubmitBtn.click();
        await browser.pause(5000);
    }

    

    async closeNewsletterPopup(){
        return this.newletterPopupClose.click();
    }

    
}
export default new FormPage()