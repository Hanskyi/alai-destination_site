export const {I} = inject();
// Add in your custom step files

Given('I am on the Home page;', () => {
    I.amOnPage('/');
});

When('I click {string} button;', (text: string) => {
    I.click("//button[contains(@id, 'rfs-btn')]");
});

Then('I click {string} span;', async () => {
    I.click(`//li[contains(@id, 'rfs-RU')]`)
    I.wait(2)
});

Then('I am on page with russian language', () => {
    I.amOnPage('/ru')
});

Given('I am on the Home page', () => {
    I.amOnPage('/ru');
});

Then('I click {string} button 2;', (text: string) => {
    I.click("//button[contains(@id, 'rfs-btn')]");
    I.wait(2)
});

Then('I click {string} span 2;', () => {
    I.click(`//li[contains(@id, 'rfs-GB')]`)
    I.wait(2)
});

Then('I am on page with english language', () => {
    I.amOnPage('/')
});