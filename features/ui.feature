Feature: UI
  Scenario: Open home page
    Given I open the home page
    Then page title should contain "Playwright"
