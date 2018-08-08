Feature: Place Listing
  In order to place a listing for others to view
  As a member
  I want to be able create a new listing

@listing
  Scenario: Create a listing
    Given logged in as a user
    When I add the required information for a listing
    Then my listing is available to view