Feature: Cleartrip Flight Search
  As a traveler
  I want to search for flights
  So I can find suitable options

  Scenario: Search for one-way flight
    Given I am on Cleartrip home page
    When I search for flights from "Bangalore" to "Delhi" on "2025-02-15"
    Then flight results should be displayed

  Scenario: Search for flights with invalid route
    Given I am on Cleartrip home page
    When I search for flights from "Invalid" to "Invalid" on "2025-02-15"
    Then no flights should be found

  Scenario: Navigate to Hotels section
    Given I am on Cleartrip home page
    When I click on Hotels
    Then I should see hotels page

  Scenario: Navigate to Flights section
    Given I am on Cleartrip home page
    When I click on Flights
    Then I should see flights search form
