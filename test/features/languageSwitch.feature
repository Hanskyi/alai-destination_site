@langSwitch

Feature: langSwitch
  We have login and Logout.

  Scenario: langSwitch 1
    Given I am on the Home page;
    When I click "English" button;
    Then I click "Russian" span;
    Then I am on page with russian language

  Scenario: langSwitch 2
    Given I am on the Home page;
    Then I am on page with russian language
    When I click "Russian" button;
    Then I click "English" span;
    Then I am on page with english language