@FWtest
Feature: FrameWork WorkShop to
  To ensure everything works fine before start using it

  Scenario: Checking if different browser are being loaded
    Given I navigate to google home page


  Scenario Outline: Testing the ScreenShot Hook tool using '<query>'
    Given I navigate to wikipedia home page
    When I search for '<query>'
    Then I make the test fail to grab the screenshot

    Examples:
  |query|
  |pato|
  |dog |
  |azul|
