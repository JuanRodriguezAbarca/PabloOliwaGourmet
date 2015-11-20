import cucumber.api.CucumberOptions;
import cucumber.api.Scenario;
import cucumber.api.SnippetType;
import cucumber.api.java.After;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;
import org.openqa.selenium.TakesScreenshot;

/**
 * Created by Juan_Rodriguez on 11/19/2015.
 */


@RunWith(Cucumber.class)
@CucumberOptions(format = {"pretty", "html:target/cucumber-html-report", "json:target/cucumber.json"},
        snippets = SnippetType.CAMELCASE,
//        strict = true,
        monochrome = true,
        features = "src/test/resources")

public class CukeRunner {


}
