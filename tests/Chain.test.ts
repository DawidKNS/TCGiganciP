import test from '@lib/baseTests';
import { expect } from '@playwright/test';

test.describe(`Chain Tests`, async () => {

	test.beforeEach(async ({ runPage, startRegistrationPage }) => {
		// Go to page
		await runPage.navigateToURL();

		//checking if I am on the correct page
		expect(await startRegistrationPage.elements.pageTitle.isEnabled()).toBe(true);
	});

	test(`TC-05`, async ({ startRegistrationPage, courseTypePage, coursePage, courseDataPage }): Promise<void> => {
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
			await courseTypePage.buttons.programming.click();
			await courseTypePage.buttons.onlineCourse.click();
			await courseTypePage.buttons.yearlyCoursesInProgramming.click();

			//screen
		});

		await test.step(`Course`, async (): Promise<void> => {
			//Is opened page course Type
			expect(await coursePage.elements.promoContainer.isEnabled()).toBe(true);

			await (
				await coursePage.getChooseButtonAsync(
					'Pierwsze kroki w programowaniu (kurs z elementami AI) ONLINE'
				)
			).click();

			await (
				await coursePage.getChooseCourseButtonAsync(
					'Mamy wolne miejsca'
				)
			).click();
		});

		await test.step(`Data for course`, async (): Promise<void> => {
			//Is opened page course Type
			expect(await courseDataPage.elements.inputForm.isEnabled()).toBe(true);
			await courseDataPage.elements.studentFirstname.fill("Maciej");
			await courseDataPage.elements.studentLastname.fill("Testowya");
			await courseDataPage.elements.lastname.fill("Testowya");
			await courseDataPage.elements.zipCode.fill("26-900");

			expect(await courseDataPage.buttons.registrationSubmit.isVisible()).toBe(true);
			await courseDataPage.buttons.registrationSubmit.click();
			//screen

			await expect(courseDataPage.elements.summariesPage).toBeVisible({ timeout: 10000 });

			//screen
		});
	});

	test.afterEach(async ({ page }) => {
		//close browser
		await page.close();
	});
});