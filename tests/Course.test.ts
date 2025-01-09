import test from '@lib/baseTests';
import { expect } from '@playwright/test';

test.describe(`Course Type Page Tests`, async () => {

	test.beforeEach(async ({ runPage, startRegistrationPage }) => {
		// Go to page
		await runPage.navigateToURL();

		//checking if I am on the correct page
		expect(await startRegistrationPage.elements.pageTitle.isEnabled()).toBe(true);
	});

	test(`TC-04`, async ({ page, startRegistrationPage, courseTypePage }): Promise<void> => {
		await test.step(`Registration`, async () => {
			//fill data
			await startRegistrationPage.elements.parentName.fill("Artur");
			await startRegistrationPage.elements.email.fill("karolgiganci+fakedata80696@gmail.com");
			await startRegistrationPage.elements.phoneNumber.fill("123456651");
			await startRegistrationPage.elements.birthYear.fill("2005");

			//acceptance of consents
			await startRegistrationPage.checkboxs.advertisementAgreed.click();
			await startRegistrationPage.checkboxs.statuteAgreed.click();

			//screen

			//Click button "dalej"
			await startRegistrationPage.buttons.submit.click();
		});

		await test.step(`Course Type`, async (): Promise<void> => {
			//Is opened page course Type
			expect(await courseTypePage.elements.pageTitle.isEnabled()).toBe(true)

			//screen
		});
	});

	test.afterEach(async ({ page }) => {
		//close browser
		await page.close();
	});
});