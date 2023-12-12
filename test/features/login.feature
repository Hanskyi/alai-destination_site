Feature: Login
  We have login and Logout.

  Scenario: login
    Given I am on the Home page;
    Then I click "Log in" button;
    Then I am on the 'https://accounts.google.com/v3/signin/identifier?opparams=%253F&dsh=S1325972949%3A1701960673485390&access_type=offline&client_id=976911885146-b8g6f9fofnc4dflg2ua83qcc05tlab6b.apps.googleusercontent.com&code_challenge=n2w-JlBtwkGLJ0_QHwOQHUfLVqwXpUtxDlF1DWxdjk0&code_challenge_method=S256&o2v=2&prompt=consent&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&response_type=code&scope=openid+email+profile&service=lso&state=gWDB5s9Ff7K0hdGxjwFUQRixV6ydgUPAIo4Cr-0IGGg&theme=glif&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAMyqNosAncZEme7TahbXVcTK_zmMqCEyzLAGlN4kmKMYDz-nEPa3oxlxrAT6MKgH6B0runWkytedkQCDioxS6ItDdyfn0ezqDkKAXJog9zWY71BctilYrhV6reOvDuAcNcxA7qhCXkQn1K8XUSCB10a97JpSruSX_YmyB8xi_-22A-6Z5gxE5O7zrdefWQ2kPKl2yfdQ3u3tqBqAOCJgnwE8hR0jUQ0UgS-EOfNO9sMPfvNp7y14dUIJDC6TbhKEg8kZ-Jv92MIQnIjHZ1rYE2wJkxOr-3vkxDw7pQeT-4qbLRxD08JDHhtiU5bS6c8XhgzJxUkRTfoD1BmVKlg8vkgpSB2DpVTWxaCpW6ct1pCLu6N9JyjROyZ406vUIs1iM7kIbAzb4dli_By0spnMOcbwnWkRxgDVckp1ZwCWmBvoZ8sXMNjb0ufYTzKCGle-PGUMAdmTPpw22L2EBXfvsNc5mLZsQ%26as%3DS1325972949%253A1701960673485390%26client_id%3D976911885146-b8g6f9fofnc4dflg2ua83qcc05tlab6b.apps.googleusercontent.com%26theme%3Dglif%23&app_domain=http%3A%2F%2Flocalhost%3A3000&rart=ANgoxcer3vJSf2iQOqvE8FRivuBKPn6lE4EBOdjhV0eqzhtYpcHl1ZlDaHMNEgEAgXx7NYYMhtEVb9RnRRKAhasQm_8Ghhn8KYoimPPsmhmKHXTXyr-QuHw' page;
    Then I enter from fields 'han.eginbaev@gmail.com'
    Then I click "Далее" span;
    Then I am on '/' page
    And I see "Logout" in the toolbar