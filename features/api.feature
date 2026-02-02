Feature: API
  Scenario: Fetch a post
    Given I make a GET request to "/posts/1"
    Then the response status should be 200
    And the response should contain a title
