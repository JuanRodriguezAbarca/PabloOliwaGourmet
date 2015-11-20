package pageObjects;

import common.PageModel;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

/**
 * Created by Juan_Rodriguez on 11/20/2015.
 */
public class WikipediaPageObject extends PageModel{

    public WebElement searchTextBox(){
        return driver.findElement(By.id("searchInput"));
    }

    public WebElement searchButton(){
        return driver.findElement(By.className("formBtn"));
    }

    public WebElement titleSearchedItem(){
        return driver.findElement(By.id("firstHeading"));
    }
}
