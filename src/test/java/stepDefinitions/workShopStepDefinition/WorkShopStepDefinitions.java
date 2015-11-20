package stepDefinitions.workShopStepDefinition;

import common.PageModel;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import org.apache.log4j.Logger;
import pageObjects.WikipediaPageObject;

/**
 * Created by Juan_Rodriguez on 11/19/2015.
 */
public class WorkShopStepDefinitions extends PageModel{

    private WikipediaPageObject wiki = new WikipediaPageObject();
    static final Logger loger = Logger.getLogger(WorkShopStepDefinitions.class);


    @Given("^I navigate to google home page$")
    public void iNavigateToGoogleHomePage(){

        driver.navigate().to("http://google.es");
        loger.info(driver.getTitle());
//        driver.close();
    }

    @Given("^I navigate to wikipedia home page$")
    public void iNavigateToWikipediaHomePage(){
    driver.get("https://www.wikipedia.org/");

    }

    @When("^I search for '([^\"]*)'$")
    public void iSearchForQuery(String query){
        wiki.searchTextBox().sendKeys(query);
        wiki.searchButton().click();
    }

    @Then("^I make the test fail to grab the screenshot$")
    public void iMakeTheTestFailToGrabTheScreenshot(){

        Assert.assertTrue("Making fail to take the ScreenShot",wiki.titleSearchedItem().getText().contentEquals("failing"));
    }

}
