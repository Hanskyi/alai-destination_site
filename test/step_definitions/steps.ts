const { I } = inject();
// Add in your custom step files

Given('I have a defined step', () => {
  // TODO: replace with your own step
});

Given('I am on the Home page;', () => {
  I.amOnPage('/');
});

Then('I click {string} button;', (text: string) => {
  I.click(`(//button[text()='${text}'])[2]`)
});

Then(/^I am on the 'https:\/\/accounts\.google\.com\/v3\/signin\/identifier\?opparams=%253F&dsh=S1325972949%3A1701960673485390&access_type=offline&client_id=976911885146\x2db8g6f9fofnc4dflg2ua83qcc05tlab6b\.apps\.googleusercontent\.com&code_challenge=n2w\x2dJlBtwkGLJ0_QHwOQHUfLVqwXpUtxDlF1DWxdjk0&code_challenge_method=S256&o2v=2&prompt=consent&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&response_type=code&scope=openid\+email\+profile&service=lso&state=gWDB5s9Ff7K0hdGxjwFUQRixV6ydgUPAIo4Cr\x2d0IGGg&theme=glif&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts\.google\.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAMyqNosAncZEme7TahbXVcTK_zmMqCEyzLAGlN4kmKMYDz\x2dnEPa3oxlxrAT6MKgH6B0runWkytedkQCDioxS6ItDdyfn0ezqDkKAXJog9zWY71BctilYrhV6reOvDuAcNcxA7qhCXkQn1K8XUSCB10a97JpSruSX_YmyB8xi_\x2d22A\x2d6Z5gxE5O7zrdefWQ2kPKl2yfdQ3u3tqBqAOCJgnwE8hR0jUQ0UgS\x2dEOfNO9sMPfvNp7y14dUIJDC6TbhKEg8kZ\x2dJv92MIQnIjHZ1rYE2wJkxOr\x2d3vkxDw7pQeT\x2d4qbLRxD08JDHhtiU5bS6c8XhgzJxUkRTfoD1BmVKlg8vkgpSB2DpVTWxaCpW6ct1pCLu6N9JyjROyZ406vUIs1iM7kIbAzb4dli_By0spnMOcbwnWkRxgDVckp1ZwCWmBvoZ8sXMNjb0ufYTzKCGle\x2dPGUMAdmTPpw22L2EBXfvsNc5mLZsQ%26as%3DS1325972949%253A1701960673485390%26client_id%3D976911885146\x2db8g6f9fofnc4dflg2ua83qcc05tlab6b\.apps\.googleusercontent\.com%26theme%3Dglif%23&app_domain=http%3A%2F%2Flocalhost%3A3000&rart=ANgoxcer3vJSf2iQOqvE8FRivuBKPn6lE4EBOdjhV0eqzhtYpcHl1ZlDaHMNEgEAgXx7NYYMhtEVb9RnRRKAhasQm_8Ghhn8KYoimPPsmhmKHXTXyr\x2dQuHw' page;$/, () => {
  I.wait(4)
});

Then('I enter from fields {string}', (login: string) => {
  I.fillField('//input', `${login}`);
  I.wait(4)
});

Then('I click {string} span;', (text: string) => {
  I.click(`(//span[text()="${text}"])`)
  I.wait(20)
})

Then(/^I am on '\/' page$/, () => {
  throw new Error('Not implemented yet');
});

Then('I see {string} in the toolbar', () => {
  throw new Error('Not implemented yet');
});
