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
  "duration": 3737114099,
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
  "duration": 1491496713,
  "status": "passed"
});
formatter.after({
  "duration": 654631,
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
  "duration": 538610,
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
  "duration": 638259458,
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
  "duration": 1840597566,
  "status": "passed"
});
formatter.match({
  "location": "WorkShopStepDefinitions.iMakeTheTestFailToGrabTheScreenshot()"
});
formatter.result({
  "duration": 145716763,
  "error_message": "junit.framework.AssertionFailedError: Making fail to take the ScreenShot\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat stepDefinitions.workShopStepDefinition.WorkShopStepDefinitions.iMakeTheTestFailToGrabTheScreenshot(WorkShopStepDefinitions.java:44)\r\n\tat ✽.Then I make the test fail to grab the screenshot(workShopFW/FWtester.feature:12)\r\n",
  "status": "failed"
});
formatter.write("https://en.wikipedia.org/wiki/Pato");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1152016304,
  "status": "passed"
});
formatter.before({
  "duration": 406523,
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
  "duration": 461802257,
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
  "duration": 2662451801,
  "status": "passed"
});
formatter.match({
  "location": "WorkShopStepDefinitions.iMakeTheTestFailToGrabTheScreenshot()"
});
formatter.result({
  "duration": 163514963,
  "error_message": "junit.framework.AssertionFailedError: Making fail to take the ScreenShot\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat stepDefinitions.workShopStepDefinition.WorkShopStepDefinitions.iMakeTheTestFailToGrabTheScreenshot(WorkShopStepDefinitions.java:44)\r\n\tat ✽.Then I make the test fail to grab the screenshot(workShopFW/FWtester.feature:12)\r\n",
  "status": "failed"
});
formatter.write("https://en.wikipedia.org/wiki/Dog");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1548568758,
  "status": "passed"
});
formatter.before({
  "duration": 229813,
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
  "duration": 485065978,
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
  "duration": 619208223,
  "status": "passed"
});
formatter.match({
  "location": "WorkShopStepDefinitions.iMakeTheTestFailToGrabTheScreenshot()"
});
formatter.result({
  "duration": 318658502,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with id \u003d\u003d firstHeading (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 316 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.48.1\u0027, revision: \u0027d80083d8f7b0b0319976ef9712f7a2b531abaceb\u0027, time: \u00272015-10-08 14:16:53\u0027\nSystem info: host: \u0027EPPLKRAW0119\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_20\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities [{browserAttachTimeout\u003d0, enablePersistentHover\u003dtrue, ie.forceCreateProcessApi\u003dfalse, ie.usePerProcessProxy\u003dfalse, ignoreZoomSetting\u003dtrue, handlesAlerts\u003dtrue, version\u003d11, platform\u003dWINDOWS, nativeEvents\u003dtrue, ie.ensureCleanSession\u003dfalse, elementScrollBehavior\u003d0, ie.browserCommandLineSwitches\u003d, requireWindowFocus\u003dfalse, browserName\u003dinternet explorer, initialBrowserUrl\u003dhttp://localhost:29773/, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, ignoreProtectedModeSettings\u003dtrue, enableElementCacheCleanup\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003ddismiss}]\nSession ID: ab354042-e401-4616-b913-9dee2bec04e6\n*** Element info: {Using\u003did, value\u003dfirstHeading}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:408)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:647)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:403)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:345)\r\n\tat pageObjects.WikipediaPageObject.titleSearchedItem(WikipediaPageObject.java:21)\r\n\tat stepDefinitions.workShopStepDefinition.WorkShopStepDefinitions.iMakeTheTestFailToGrabTheScreenshot(WorkShopStepDefinitions.java:44)\r\n\tat ✽.Then I make the test fail to grab the screenshot(workShopFW/FWtester.feature:12)\r\n",
  "status": "failed"
});
formatter.write("https://en.wikipedia.org/wiki/Azul");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1542275912,
  "status": "passed"
});
});