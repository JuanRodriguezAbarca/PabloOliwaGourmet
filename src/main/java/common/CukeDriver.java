package common;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import org.apache.log4j.Logger;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.UnreachableBrowserException;

/**
 * Created by Juan_Rodriguez on 11/19/2015.
 */
public class CukeDriver {

    private static final Logger loger = Logger.getLogger(CukeDriver.class);

    private static WebDriver driver = null;

    public static WebDriver getTheDriver() {
        if (driver == null) {
            try {
                CukeDriver.driver = selectTheBrowser();
                driver.manage().window().maximize();
            } finally {
                Runtime.getRuntime().addShutdownHook(
                        new Thread(new BrowserClearup()));
            }
        }
        return driver;

    }


    private static WebDriver selectTheBrowser() {
        String theBrowser = System.getProperty("browser");
        loger.info("Browser selected: " + theBrowser);
        switch (theBrowser.toLowerCase().trim()) {
            case "firefox":
                return new FirefoxDriver();
            case "chrome":
                return new ChromeDriver();
            case "ie":
                DesiredCapabilities caps = DesiredCapabilities.internetExplorer();
                caps.setCapability("ignoreZoomSetting", true);
                caps.setCapability("ignoreProtectedModeSettings", true);
                return new InternetExplorerDriver(caps);
            default:
                throw new ExceptionInInitializerError("Browser selected '" + theBrowser + "' is not recognized");

        }
    }


    public static class BrowserClearup implements Runnable {
        public void run() {
            loger.info("Closing the browser...");
            close();
        }
    }

    public static void close() {
        try {
            getTheDriver().quit();
            driver = null;
            loger.info("Closing the browser");
        } catch (UnreachableBrowserException e) {
            loger.info("cannot close the browser: unreachable browser");
        }
    }
}
