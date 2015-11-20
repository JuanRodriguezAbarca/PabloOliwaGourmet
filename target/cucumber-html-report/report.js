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
  "duration": 3577468019,
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
  "duration": 2732143455,
  "status": "passed"
});
formatter.after({
  "duration": 622948,
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
  "duration": 349404,
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
  "duration": 1098223214,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pato",
      "offset": 14
    }
  ],
  "location": "WorkShopStepDefinitions.iSearchForQuery(String)"
});
formatter.result({
  "duration": 184095456,
  "status": "passed"
});
formatter.match({
  "location": "WorkShopStepDefinitions.iMakeTheTestFailToGrabTheScreenshot()"
});
formatter.result({
  "duration": 2003183908,
  "error_message": "junit.framework.AssertionFailedError: Making fail to take the ScreenShot\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat stepDefinitions.workShopStepDefinition.WorkShopStepDefinitions.iMakeTheTestFailToGrabTheScreenshot(WorkShopStepDefinitions.java:44)\r\n\tat ✽.Then I make the test fail to grab the screenshot(workShopFW/FWtester.feature:12)\r\n",
  "status": "failed"
});
formatter.write("https://en.wikipedia.org/wiki/Pato");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1023526109,
  "status": "passed"
});
formatter.before({
  "duration": 354759,
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
  "duration": 154054273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dog",
      "offset": 14
    }
  ],
  "location": "WorkShopStepDefinitions.iSearchForQuery(String)"
});
formatter.result({
  "duration": 139277104,
  "status": "passed"
});
formatter.match({
  "location": "WorkShopStepDefinitions.iMakeTheTestFailToGrabTheScreenshot()"
});
formatter.result({
  "duration": 1740629561,
  "error_message": "junit.framework.AssertionFailedError: Making fail to take the ScreenShot\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat stepDefinitions.workShopStepDefinition.WorkShopStepDefinitions.iMakeTheTestFailToGrabTheScreenshot(WorkShopStepDefinitions.java:44)\r\n\tat ✽.Then I make the test fail to grab the screenshot(workShopFW/FWtester.feature:12)\r\n",
  "status": "failed"
});
formatter.write("https://en.wikipedia.org/wiki/Dog");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 907639013,
  "status": "passed"
});
formatter.before({
  "duration": 682744,
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
  "duration": 238133976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "azul",
      "offset": 14
    }
  ],
  "location": "WorkShopStepDefinitions.iSearchForQuery(String)"
});
formatter.result({
  "duration": 133251106,
  "status": "passed"
});
formatter.match({
  "location": "WorkShopStepDefinitions.iMakeTheTestFailToGrabTheScreenshot()"
});
formatter.result({
  "duration": 1001295875,
  "error_message": "junit.framework.AssertionFailedError: Making fail to take the ScreenShot\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat stepDefinitions.workShopStepDefinition.WorkShopStepDefinitions.iMakeTheTestFailToGrabTheScreenshot(WorkShopStepDefinitions.java:44)\r\n\tat ✽.Then I make the test fail to grab the screenshot(workShopFW/FWtester.feature:12)\r\n",
  "status": "failed"
});
formatter.write("https://en.wikipedia.org/wiki/Azul");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 894116219,
  "status": "passed"
});
});