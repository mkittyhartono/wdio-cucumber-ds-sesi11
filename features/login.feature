@Login
Feature: Login Test

  Background:
    Given user is on Login Page

  @Positive @tc-01 @smoketest
  Scenario Outline: Success Login
    When user login using "<username>" as username and "<password>" as password
    # And user input "<username>" as username
    # And user input "<password>" as password
    # When user clik login button
    And user should be redirected to homepage

    Examples:
    | username      | password     |
    | standard_user | secret_sauce |
    | value_user   | secret_saucefgfgf |

  @Negative @tc-02
  Scenario: Login with Wrong password
    And user input "standard_user" as username
    And user input "wrong_password" as password
    When user clik login button
    Then user should see error message "Epic sadface: Username and password do not match any user in this service"




























# Feature: The Internet Guinea Pig Website

#   Scenario Outline: As a user, I can log into the secure area

#     Given I am on the login page
#     When I login with <username> and <password>
#     Then I should see a flash message saying <message>

#     Examples:
#       | username | password             | message                        |
#       | tomsmith | SuperSecretPassword! | You logged into a secure area! |
#       | foobar   | barfoo               | Your username is invalid!      |
