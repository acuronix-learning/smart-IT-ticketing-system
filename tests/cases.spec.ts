import { test, expect } from '@playwright/test';
import { AppPage } from '../pages/app.page';

// acuronix:begin TC_001 06efadb7
test("TC_001 Verify Acuronix home page opens successfully", async ({ page }) => {
  // Expected: Acuronix home page should load successfully without any page-load error.
  const app = new AppPage(page);
  await page.goto('/');
  // Step: Open a supported browser.
  // observation step
  // Step: Enter https://www.acuronix.in/ in the address bar.
  test.skip(true, 'TODO: step not resolved on the live app'); // Could not find an input field matching: https www acuronix address bar
  // TODO: add an assertion for the expected result
});
// acuronix:end TC_001

// acuronix:begin TC_002 3582966c
test("TC_002 Verify Resume Builder option is displayed on home page", async ({ page }) => {
  // Expected: Resume Builder option should be visible in the top navigation menu.
  const app = new AppPage(page);
  await page.goto('/');
  // Step: Open the Acuronix home page.
  // observation step
  // Step: Observe the top navigation menu.
  // observation
  // TODO: add an assertion for the expected result
});
// acuronix:end TC_002

// acuronix:begin TC_003 170228b7
test("TC_003 Verify navigation to Resume Builder page", async ({ page }) => {
  // Expected: User should be navigated to the Resume Builder page and the page should load successfully.
  const app = new AppPage(page);
  await page.goto('/');
  // Step: Open the Acuronix home page.
  // observation step
  // Step: Click Resume Builder from the top navigation.
  await app.resume_builder_link.click();
  // TODO: add an assertion for the expected result
});
// acuronix:end TC_003

// acuronix:begin TC_004 ecaa4f06
test("TC_004 Verify Resume Builder page UI is loaded", async ({ page }) => {
  // Expected: Resume Builder page should display the Resume Builder heading, templates, Import button, Download PDF button, Live Preview, ATS section and resume detail sections without broken UI.
  const app = new AppPage(page);
  await page.goto('/');
  // Step: Click on Resume Builder.
  await app.resume_builder_link.click();
  // Step: Click Import button at the top of the page.
  await app.import_button.click();
  // TODO: add an assertion for the expected result
});
// acuronix:end TC_004

// acuronix:begin TC_005 ee329592
test("TC_005 Verify user can register successfully for a free workshop", async ({ page }) => {
  // Expected: workshop page should display the FROM CAMPUS TO CORPORATE: Are You Ready for the current Job Market?
  const app = new AppPage(page);
  await page.goto('/');
  // Step: 1.Click on workshop
  await app.workshops_link.click();
  // TODO: add an assertion for the expected result
});
// acuronix:end TC_005

// acuronix:begin TC_006 14f7b940
test("TC_006 Verify registration", async ({ page }) => {
  // Expected: Jayakrishna should entered
  const app = new AppPage(page);
  await page.goto('/');
  // Step: 1.Click on workshop 2.Enter full name in field "Full Name" as jayakrishna
  test.skip(true, 'TODO: step not resolved on the live app'); // Could not find a button/link matching: Full Name
  // TODO: add an assertion for the expected result
});
// acuronix:end TC_006

