const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function test_case() {
  let driver = await new Builder().forBrowser("chrome").build();

  await driver.get("https://www.bing.com/");
  try {
    driver = await new Builder().forBrowser("chrome").build();

    await driver.findElement(By.name("q")).sendKeys("Hello, World", Key.RETURN);

    console.log("Opened Google");

    await driver.sleep(10000);
    const searchInput = await driver.findElement(By.name("q"));

    await driver.quit();

    await searchInput.sendKeys("Hello, World!", Key.RETURN);

    console.log("Text entered into the search input.");
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