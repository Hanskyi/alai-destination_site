Feature: location
  We have login and Logout.

  Scenario: location 1
    Given I am on the Home page;
    When I click "Russian" button;
    Then I click "Russian" span;
    Then I waitInUrl("http://localhost:3000/ru");
    Then I see url;
    And I see "Мы здесь для того, чтобы творить добро"


  Scenario: location 2
    Given I am on the Home page;
    Then I click "Russian" button 2;
    Then I click "English" span 2;
    Then I waitInUrl("http://localhost:3000/");
    Then I see url;
    And I see "We’re here to do good"