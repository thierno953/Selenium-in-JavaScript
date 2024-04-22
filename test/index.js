const { By, Key, Builder, until } = require("selenium-webdriver");
require("chromedriver");

async function test_case() {
  let driver;
  try {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://www.inami.fgov.be/fr");

    // Wait for the search input to be located
    const searchInput = await driver.wait(until.elementLocated(By.name("q")), 10000);

    // Enter text into the search input
    await searchInput.sendKeys("Hello, World!", Key.RETURN);

    console.log("Text entered into the search input.");

    await driver.sleep(10000);

  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    if (driver) {
      await driver.quit();
      console.log("WebDriver session closed");
    }
  }
}

test_case();
