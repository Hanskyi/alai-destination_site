@search

  Feature: search test

    Scenario: search
      Given I am on the home page
      When I choose one tour category:
      And I choose one tour location:
      Then I click search button:
      Then I click search button:
      Then I see tours.

