import CartPage from '../pages/CartPage'
import FinalPage from '../pages/FinalPage'
import InformationPage from '../pages/InformationPage'
import LoginPage from '../pages/LoginPage'
import OverviewPage from '../pages/OverviewPage'
import ProductsPage from '../pages/ProductsPage'
import {CREDENTIALS} from '../data/Constants'
import {INFORMATION} from '../data/Constants'



fixture('Login fixture test')
    .page('https://www.saucedemo.com/')



test('Login with a valid user', async t => {
    
    await t
        .typeText(LoginPage.usernameField,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField,CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t 
        .expect(ProductsPage.pageTitle.exists)
        .ok()
})  

test('Login with a invalid user', async t => {
    await t
        .typeText(LoginPage.usernameField,CREDENTIALS.INVALID_USER.USERNAME)
        .typeText(LoginPage.passwordField,CREDENTIALS.INVALID_USER.PASSWORD)
        .click(LoginPage.loginButton)
        .expect(LoginPage.errorMessage.exists)
        .ok()
}) 

test('Logout from product\'s page', async t => {
    await t
        .typeText(LoginPage.usernameField,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField,CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t
        .click(ProductsPage.burgerButton)
        .click(ProductsPage.logoutButton)

    await t
        .expect(LoginPage.loginButton.exists)
        .ok()
}) 

test('Navigate to shopping cart', async t => {
    await t
        .typeText(LoginPage.usernameField,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField,CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t
        .click(ProductsPage.cartLink)
        
    await t
        .expect(CartPage.cartTitle.exists)
        .ok()     
}) 

test('Add a single item to the shopping cart', async t => {
    await t
        .typeText(LoginPage.usernameField,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField,CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t
        .click(ProductsPage.addFirstProductToCartButton)

    const firstProductName = await ProductsPage.firstProduct.innerText;
        
    await t
        .click(ProductsPage.cartLink)    
        
    await t
        .expect(CartPage.firstProduct.innerText).eql(firstProductName)      
})

test('Add multiple items to the shopping cart', async t => {
    await t
        .typeText(LoginPage.usernameField,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField,CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t
        .click(ProductsPage.addFirstProductToCartButton)
        .click(ProductsPage.addSecondProductToCartButton)
        

    const firstProductName = await ProductsPage.firstProduct.innerText;
    const secondProductName = await ProductsPage.secondProduct.innerText;

    await t
        .click(ProductsPage.cartLink)

    await t
        .expect(CartPage.firstProduct.innerText).eql(firstProductName)
        
    await t
        .expect(CartPage.secondProduct.innerText).eql(secondProductName)
         
})

test('Continue with missing mail information', async t => {
    await t
        .typeText(LoginPage.usernameField,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField,CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t
        .click(ProductsPage.addFirstProductToCartButton)
        .click(ProductsPage.addSecondProductToCartButton)
        .click(ProductsPage.cartLink)

    await t
        .click(CartPage.checkoutButton)
        
    await t
        .click(InformationPage.continueButton)
        .expect(InformationPage.errorMessage.exists)
        .ok()
})

test('Fill user\'s information', async t => {
    await t
        .typeText(LoginPage.usernameField,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField,CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t
        .click(ProductsPage.addFirstProductToCartButton)
        .click(ProductsPage.addSecondProductToCartButton)
        .click(ProductsPage.cartLink)

    await t
        .click(CartPage.checkoutButton)    
        
    await t
        .typeText(InformationPage.firstnameField,INFORMATION.FIRSTNAME)
        .typeText(InformationPage.lastnameField,INFORMATION.LASTNAME)
        .typeText(InformationPage.postalcodeField,INFORMATION.POSTALCODE)
        .click(InformationPage.continueButton)
        
    await t
        .expect(OverviewPage.summaryInfo.exists)
        .ok()
  
})

test('Final order items', async t => {
    await t
        .typeText(LoginPage.usernameField,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField,CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t
        .click(ProductsPage.addFirstProductToCartButton)
        .click(ProductsPage.addSecondProductToCartButton)

    const firstProductName = await ProductsPage.firstProduct.innerText;
    const secondProductName = await ProductsPage.secondProduct.innerText;

    await t
        .click(ProductsPage.cartLink)

    await t
        .click(CartPage.checkoutButton)    
        
    await t
        .typeText(InformationPage.firstnameField,INFORMATION.FIRSTNAME)
        .typeText(InformationPage.lastnameField,INFORMATION.LASTNAME)
        .typeText(InformationPage.postalcodeField,INFORMATION.POSTALCODE)
        .click(InformationPage.continueButton)

    await t
        .expect(OverviewPage.firstProduct.innerText).eql(firstProductName)

    await t
        .expect(OverviewPage.secondProduct.innerText).eql(secondProductName)
        
})

test('Complete a purchase', async t => {
    await t
        .typeText(LoginPage.usernameField,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField,CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t
        .click(ProductsPage.addFirstProductToCartButton)
        .click(ProductsPage.addSecondProductToCartButton)

    await t
        .click(ProductsPage.cartLink)

    await t
        .click(CartPage.checkoutButton)    
        
    await t
        .typeText(InformationPage.firstnameField,INFORMATION.FIRSTNAME)
        .typeText(InformationPage.lastnameField,INFORMATION.LASTNAME)
        .typeText(InformationPage.postalcodeField,INFORMATION.POSTALCODE)
        .click(InformationPage.continueButton)

    await t
        .click(OverviewPage.finishButtton)

    await t
        .expect(FinalPage.completeHeaderTitle.exists)
        .ok()
        
})