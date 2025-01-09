import test from '@lib/baseTests';
import { expect } from '@playwright/test';

test.describe(`Start Page Tests`, async () => {

	test.beforeEach(async ({ runPage, startRegistrationPage }) => {
		// Go to page
		await runPage.navigateToURL();

		//checking if I am on the correct page
		expect(await startRegistrationPage.elements.pageTitle.isEnabled()).toBe(true);
	});

	test(`TC-01`, async ({ page, runPage, startRegistrationPage }): Promise<void> => {
		//Click button "dalej"
		await startRegistrationPage.buttons.submit.click();

		//check count errors
		expect(await startRegistrationPage.countElements(startRegistrationPage.elements.formError)).toBe(6);
	});

	test(`TC-02`, async ({ page, runPage, startRegistrationPage }): Promise<void> => {
		
	});

	test(`TC-03`, async ({ page, runPage, startRegistrationPage }): Promise<void> => {
	});

	test(`TC-04`, async ({ page, runPage, startRegistrationPage }): Promise<void> => {
	});

	test(`TC-05`, async ({ page, runPage, startRegistrationPage }): Promise<void> => {

	});

	test.afterEach(async ({ page }) => {
		//close browser
		await page.close();
	});
});