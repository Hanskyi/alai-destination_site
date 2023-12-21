const {I} = inject();
// Add in your custom step files

Given('I have a defined step', () => {
    // TODO: replace with your own step
});

Given('I am on the Home page;', () => {
    I.amOnPage('/');
});

When('I click {string} button;', (text: string) => {
    I.click(`//span[contains(text(), '${text}')]`);
});

Then('I click {string} span;', async () => {
    const locator = `(//span[contains(@class, 'ReactFlagsSelect-module_label__27pw9')])[3]`
    await I.waitForElement(locator);
    I.click(locator)
});

Then(/^I waitInUrl\("(.*?)"\);$/, () => {
    I.wait(4)
});

Then('I see url;', async () => {
    I.seeInCurrentUrl('/ru');
});

Then('I see {string}', (text: string) => {
    I.scrollTo(`//h2[contains(text(), '${text}')]`);
});

Given('I have a defined step', () => {
    I.scrollTo(`//span[contains(text(), 'Russian')]`)
});

Then('I click {string} button 2;', (text: string) => {
    I.click(`//span[contains(text(), '${text}')]`);
    I.wait(2)
});

Then('I click {string} span 2;', () => {
    I.click(`(//span[contains(@class, 'ReactFlagsSelect-module_label__27pw9')])[2]`);
    I.wait(2)
});

Then(/^I waitInUrl\("(.*?)"\);$/, () => {
    I.wait(4)
});
Then('I see url;', async () => {
    I.seeInCurrentUrl('http://localhost:3000/');
});

Then('I see {string}', (text: string) => {
    I.scrollTo(`//h2[contains(text(), '${text}')]`);
});
