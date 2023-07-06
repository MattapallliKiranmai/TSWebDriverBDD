@Login
Feature: Feature: To test the login functionality in calvinKlein website page

  Scenario Outline: As a user, I can log into calvinKlein website with valid ceredentials

    Given I am on the login page
    When I login with new customer username and <password>
    
    Examples:
      | password  |            
      | CKJuly@2023 |   

  Scenario Outline: As a valid user, I can add new address

     Given I should be in the address page
     When I add new address with <firstname>,<lastname>,<street>,<houseno>,<city>,<postcode>
     Then I logout from the CK Website
     

     Examples:
       |firstname|  |lastname|  |street|       |houseno|   |city|       |postcode|   |message|
       |Lonetoft|   |Jones|     |Orteliuskade| |2087|      |Amsterdam|  |1056NH|      |New Address Added| 

  Scenario Outline: As a user ,I could see specific errors with invalid ceredentials
    
    Given  I Should see login screen
    When I enter invalid details as <username> and <password>
    Then I verify <errormessage>
    Then I close the login screen

    Examples:
       |username|                  |password|       |errormessage|
       | kiran.mgr |               | CKJuly@2023 |  | Sorry, dit is geen geldig e-mailadres |
       | kiranmai.mgr@gmail.com|   |CK|             |Je wachtwoord moet tussen 10 en 25 tekens lang zijn|
       




