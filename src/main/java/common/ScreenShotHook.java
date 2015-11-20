package common;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;

import java.util.Map;

/**
 * Created by Juan_Rodriguez on 11/20/2015.
 */
public class ScreenShotHook extends PageModel{

    private static final Logger loger = Logger.getLogger(ScreenShotHook.class);

    @Before
    public void beforeTest(Scenario scenario){
        loger.info("Scenario Started: "+scenario.getName());
    }

    @After
    public void afterTest(Scenario scenario){
        try{
            Map<String, Object> screenShots = ScreenShotTaker.getScreenshotsForCurrentTest();
            for (Map.Entry<String, Object> screenShot:screenShots.entrySet()){
                scenario.write(screenShot.getKey());
                scenario.embed((byte[]) screenShot.getValue(), "image/png");
            }

            ScreenShotTaker.tidyUpAfterTestRun();

            if(scenario.isFailed()){
                scenario.write(driver.getCurrentUrl());
                byte[] screenShot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenShot, "image/png");
                driver.manage().deleteAllCookies();
            }
        } catch(WebDriverException wde){
            loger.error(wde.getMessage());
        }

        loger.info("Scenario Completed: "+scenario.getName());
    }

}
