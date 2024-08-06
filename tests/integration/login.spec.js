import { describe, expect, test } from "@jest/globals";
const { Builder, By, until } = require("selenium-webdriver");

// const chrom = require("selenium-webdriver/chrome");

describe("회원 로그인 테스트", () => {
    test("성공 케이스 테스트", async () => {
        let driver = await new Builder()
            .forBrowser("chrome")
            .setChromeOptions(new chrome.Options())
            .build();
        await driver.get("http://localhost:8080/login");

        const input_email = await driver.wait(
            until.elementLocated(By.id("email-input"))
        );

        await input_email.sendKeys("test11@test.com");
    });
});