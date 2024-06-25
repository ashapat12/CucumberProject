package runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith (Cucumber.class)
@CucumberOptions (
		strict = true,	//this statement will suppress the warning in console
		features = "classpath:features",
		glue = "steps2",	// referring to the package that holds all the steps
		tags = "@AddAccount-Scenario1",
		monochrome = true,
		dryRun = false,
		plugin = {
				"pretty",
				"html:target/reports/cucumber.html",
				"json:target/reports.cucumber.json"
		}
		)
public class LoginRunner {

}
