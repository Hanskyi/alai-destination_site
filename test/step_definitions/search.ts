import { I } from './languageSwitchTest'
// Add in your custom step files

Given('I am on the home page', () => {
  // From "features/search.feature" {"line":6,"column":7}
  I.amOnPage('/')
});

When('I choose one tour category:', () => {
  // From "features/search.feature" {"line":7,"column":7}
  I.click("//div[contains(@class, 'css-4a554o-control')]");
  I.click("//div[contains(text(), 'Batken')]");
});

When('I choose one tour location:', () => {
  // From "features/search.feature" {"line":8,"column":7}
  I.click("//div[contains(@class, ' css-4a554o-control')]");
  I.click("//div[contains(text(), 'Food tours')]");
});

Then('I click search button:', () => {
  // From "features/search.feature" {"line":10,"column":7}
  I.click("//button[contains(@class, 'HeroSection_mainBlockSearchButton__osWNF')]");
});

Then('I see tours.', () => {
  // From "features/search.feature" {"line":11,"column":7}
  I.seeCurrentUrlEquals('/tours?location=Batken&classification=Food+tours')
});
