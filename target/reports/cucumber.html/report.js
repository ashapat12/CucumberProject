$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:features/AddAccountFunctionalityValidation.feature");
formatter.feature({
  "name": "Add account under List Accounts functionality Validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@AddAccount"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "1 User should be able to login with valid credentials and add customer under list accounts",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddAccount-Scenario1"
    }
  ]
});
formatter.step({
  "name": "User is on codefios login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters userName as \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on the signin button",
  "keyword": "When "
});
formatter.step({
  "name": "User lands on the dashboard page",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks on List Account;",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on Add Account;",
  "keyword": "And "
});
formatter.step({
  "name": "User enters Account name as \"\u003cAccountName\u003e\";",
  "keyword": "And "
});
formatter.step({
  "name": "User enters Initial Balance as \"\u003cInitialBalance\u003e\";",
  "keyword": "And "
});
formatter.step({
  "name": "User enters AC number as \"999\";",
  "keyword": "And "
});
formatter.step({
  "name": "user clikcs on Save button;",
  "keyword": "And "
});
formatter.step({
  "name": "user should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "AccountName",
        "InitialBalance"
      ]
    },
    {
      "cells": [
        "demo@codefios.com",
        "abc123",
        "abcTechFios",
        "2500"
      ]
    }
  ]
});
formatter.scenario({
  "name": "1 User should be able to login with valid credentials and add customer under list accounts",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@AddAccount"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@AddAccount-Scenario1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on codefios login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps2.AddAccountStepDefinition.user_is_on_codefios_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters userName as \"demo@codefios.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps2.AddAccountStepDefinition.user_enters_userName_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps2.AddAccountStepDefinition.user_enters_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the signin button",
  "keyword": "When "
});
formatter.match({
  "location": "steps2.AddAccountStepDefinition.user_clicks_on_the_signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User lands on the dashboard page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps2.AddAccountStepDefinition.user_lands_on_the_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on List Account;",
  "keyword": "And "
});
formatter.match({
  "location": "steps2.AddAccountStepDefinition.user_clicks_on_List_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Add Account;",
  "keyword": "And "
});
formatter.match({
  "location": "steps2.AddAccountStepDefinition.user_clicks_on_Add_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Account name as \"abcTechFios\";",
  "keyword": "And "
});
formatter.match({
  "location": "steps2.AddAccountStepDefinition.user_eneters_Account_name_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Initial Balance as \"2500\";",
  "keyword": "And "
});
formatter.match({
  "location": "steps2.AddAccountStepDefinition.user_enters_Initial_Balance_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters AC number as \"999\";",
  "keyword": "And "
});
formatter.match({
  "location": "steps2.AddAccountStepDefinition.user_enters_AC_number_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clikcs on Save button;",
  "keyword": "And "
});
formatter.match({
  "location": "steps2.AddAccountStepDefinition.user_clikcs_on_Save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "steps2.AddAccountStepDefinition.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});