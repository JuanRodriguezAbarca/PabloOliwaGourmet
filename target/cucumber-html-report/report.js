$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("workShopFW/FWtester.feature");
formatter.feature({
  "line": 2,
  "name": "FrameWork WorkShop to",
  "description": "To ensure everything works fine before start using it",
  "id": "framework-workshop-to",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FWtest"
    }
  ]
});
formatter.before({
  "duration": 6263889936,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Checking if different browser are being loaded",
  "description": "",
  "id": "framework-workshop-to;checking-if-different-browser-are-being-loaded",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I navigate to google home page",
  "keyword": "Given "
});
formatter.match({
  "location": "WorkShopStepDefinitions.iNavigateToGoogleHomePage()"
});
formatter.result({
  "duration": 2137087414,
  "status": "passed"
});
formatter.after({
  "duration": 772884,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Testing the ScreenShot Hook tool using \u0027\u003cquery\u003e\u0027",
  "description": "",
  "id": "framework-workshop-to;testing-the-screenshot-hook-tool-using-\u0027\u003cquery\u003e\u0027",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I navigate to wikipedia home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I search for \u0027\u003cquery\u003e\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I make the test fail to grab the screenshot",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "framework-workshop-to;testing-the-screenshot-hook-tool-using-\u0027\u003cquery\u003e\u0027;",
  "rows": [
    {
      "cells": [
        "query"
      ],
      "line": 15,
      "id": "framework-workshop-to;testing-the-screenshot-hook-tool-using-\u0027\u003cquery\u003e\u0027;;1"
    },
    {
      "cells": [
        "pato"
      ],
      "line": 16,
      "id": "framework-workshop-to;testing-the-screenshot-hook-tool-using-\u0027\u003cquery\u003e\u0027;;2"
    },
    {
      "cells": [
        "dog"
      ],
      "line": 17,
      "id": "framework-workshop-to;testing-the-screenshot-hook-tool-using-\u0027\u003cquery\u003e\u0027;;3"
    },
    {
      "cells": [
        "azul"
      ],
      "line": 18,
      "id": "framework-workshop-to;testing-the-screenshot-hook-tool-using-\u0027\u003cquery\u003e\u0027;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 524330,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Testing the ScreenShot Hook tool using \u0027pato\u0027",
  "description": "",
  "id": "framework-workshop-to;testing-the-screenshot-hook-tool-using-\u0027\u003cquery\u003e\u0027;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FWtest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I navigate to wikipedia home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I search for \u0027pato\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I make the test fail to grab the screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "WorkShopStepDefinitions.iNavigateToWikipediaHomePage()"
});
formatter.result({
  "duration": 910687265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027pato\u0027",
      "offset": 13
    }
  ],
  "location": "WorkShopStepDefinitions.iSearchForQuery(String)"
});
formatter.result({
  "duration": 1898522818,
  "status": "passed"
});
formatter.match({
  "location": "WorkShopStepDefinitions.iMakeTheTestFailToGrabTheScreenshot()"
});
formatter.result({
  "duration": 32655691,
  "error_message": "junit.framework.AssertionFailedError: Making fail to take the ScreenShot\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat stepDefinitions.workShopStepDefinition.WorkShopStepDefinitions.iMakeTheTestFailToGrabTheScreenshot(WorkShopStepDefinitions.java:44)\r\n\tat ✽.Then I make the test fail to grab the screenshot(workShopFW/FWtester.feature:12)\r\n",
  "status": "failed"
});
formatter.write("https://en.wikipedia.org/wiki/Special:Search?search\u003d%27pato%27\u0026go\u003dGo");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 746950522,
  "status": "passed"
});
formatter.before({
  "duration": 352528,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Testing the ScreenShot Hook tool using \u0027dog\u0027",
  "description": "",
  "id": "framework-workshop-to;testing-the-screenshot-hook-tool-using-\u0027\u003cquery\u003e\u0027;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FWtest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I navigate to wikipedia home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I search for \u0027dog\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I make the test fail to grab the screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "WorkShopStepDefinitions.iNavigateToWikipediaHomePage()"
});
formatter.result({
  "duration": 223327355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027dog\u0027",
      "offset": 13
    }
  ],
  "location": "WorkShopStepDefinitions.iSearchForQuery(String)"
});
formatter.result({
  "duration": 1024618054,
  "status": "passed"
});
formatter.match({
  "location": "WorkShopStepDefinitions.iMakeTheTestFailToGrabTheScreenshot()"
});
formatter.result({
  "duration": 27209357,
  "error_message": "junit.framework.AssertionFailedError: Making fail to take the ScreenShot\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat stepDefinitions.workShopStepDefinition.WorkShopStepDefinitions.iMakeTheTestFailToGrabTheScreenshot(WorkShopStepDefinitions.java:44)\r\n\tat ✽.Then I make the test fail to grab the screenshot(workShopFW/FWtester.feature:12)\r\n",
  "status": "failed"
});
formatter.write("https://en.wikipedia.org/wiki/Special:Search?search\u003d%27dog%27\u0026go\u003dGo");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 728058146,
  "status": "passed"
});
formatter.before({
  "duration": 396706,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Testing the ScreenShot Hook tool using \u0027azul\u0027",
  "description": "",
  "id": "framework-workshop-to;testing-the-screenshot-hook-tool-using-\u0027\u003cquery\u003e\u0027;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FWtest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I navigate to wikipedia home page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I search for \u0027azul\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I make the test fail to grab the screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "WorkShopStepDefinitions.iNavigateToWikipediaHomePage()"
});
formatter.result({
  "duration": 225613878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027azul\u0027",
      "offset": 13
    }
  ],
  "location": "WorkShopStepDefinitions.iSearchForQuery(String)"
});
formatter.result({
  "duration": 894911415,
  "status": "passed"
});
formatter.match({
  "location": "WorkShopStepDefinitions.iMakeTheTestFailToGrabTheScreenshot()"
});
formatter.result({
  "duration": 22538586,
  "error_message": "junit.framework.AssertionFailedError: Making fail to take the ScreenShot\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat stepDefinitions.workShopStepDefinition.WorkShopStepDefinitions.iMakeTheTestFailToGrabTheScreenshot(WorkShopStepDefinitions.java:44)\r\n\tat ✽.Then I make the test fail to grab the screenshot(workShopFW/FWtester.feature:12)\r\n",
  "status": "failed"
});
formatter.write("https://en.wikipedia.org/wiki/Special:Search?search\u003d%27azul%27\u0026go\u003dGo");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 620930701,
  "status": "passed"
});
});