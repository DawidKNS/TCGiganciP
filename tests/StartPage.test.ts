import test from '@lib/baseTests';
import { expect } from '@playwright/test';

test.describe(`Start Page Tests`, async () => {

	test.beforeEach(async ({ runPage, startRegistrationPage }) => {
		// Go to page
		await runPage.navigateToURL();

		//checking if I am on the correct page
		expect(await startRegistrationPage.elements.pageTitle.isEnabled()).toBe(true);
	});

	test(`TC-01`, async ({ startRegistrationPage }): Promise<void> => {
		//Click button "dalej"
		await startRegistrationPage.buttons.submit.click();

		//check count errors
		expect(await startRegistrationPage.countElements(startRegistrationPage.elements.formError)).toBe(6);

		//screen
	});

	test(`TC-02`, async ({ startRegistrationPage }): Promise<void> => {
		//fill field email
		await startRegistrationPage.elements.email.fill("user#example.com");

		//Click button "dalej"
		await startRegistrationPage.buttons.submit.click();

		//check email validation
		//check count errors
		expect(await startRegistrationPage.countElements(startRegistrationPage.elements.formError)).toBe(1);
		//check error message
		expect(await startRegistrationPage.elements.formError.innerText()).toBe("Nieprawidłowy adres e-mail");

		//check message fill all field
		expect(await startRegistrationPage.elements.errorWindow.innerText()).toBe("Prosimy uzupełnić wszystkie wymagane pola.");

		//screen
	});

	test(`TC-03`, async ({ startRegistrationPage }): Promise<void> => {
		//fill field email
		await startRegistrationPage.elements.phoneNumber.fill("12345665");

		//Click button "dalej"
		await startRegistrationPage.buttons.submit.click();

		//check email validation
		//check count errors
		expect(await startRegistrationPage.countElements(startRegistrationPage.elements.formError)).toBe(1);
		//check error message
		expect(await startRegistrationPage.elements.formError.innerText()).toBe("Niepoprawny numer telefonu. Numer powinien zawierać 9 cyfr, z opcjonalnym kierunkowym +48 lub +380 na początku.");

		//check message fill all field
		expect(await startRegistrationPage.elements.errorWindow.innerText()).toBe("Prosimy uzupełnić wszystkie wymagane pola.");

				//screen

	});

	test.afterEach(async ({ page }) => {
		//close browser
		await page.close();
	});
});