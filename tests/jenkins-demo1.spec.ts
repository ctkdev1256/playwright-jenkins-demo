import { test, expect } from "@playwright/test";

test("Demo Test 1", async ({ page }) => {
  console.log("Test 1 started.");
  await page.goto("https://www.google.com/");
  console.log(await page.title());
  await expect(page).toHaveTitle("Google"); // Will failed
  console.log("End of Test 1.");
});

test("Demo Test 2", async ({ page }) => {
  console.log("Test 2 started.");
  //   test.setTimeout(50000); // Set timeout to 120 seconds for this test
  await page.goto("https://www.google.com/");
  console.log(await page.title());
  await expect(page).toHaveTitle("GoogleFail"); // Will fail intentionally
  console.log("End of Test 2.");
});

test("Demo Test 3", async ({ page }) => {
  console.log("Test 3 started.");
  await page.goto("https://www.saucedemo.com/");
  console.log(await page.title());
  await expect(page).toHaveTitle("Swag Labs");
  console.log("End of Test 3.");
});
