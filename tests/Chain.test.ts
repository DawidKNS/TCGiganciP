import test from '@lib/baseTests';
import { expect } from '@playwright/test';

test.describe(`Chain Tests`, async () => {

	test.beforeEach(async ({ runPage, startRegistrationPage }) => {
		// Go to page
		await runPage.navigateToURL();

		//checking if I am on the correct page
		expect(await startRegistrationPage.elements.pageTitle.isEnabled()).toBe(true);
	});

	test(`TC-05`, async ({ startRegistrationPage, courseTypePage, coursePage, courseDataPage, page }): Promise<void> => {
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
			await test.info().attach('TC-05 result Registration', {
				body: await page.screenshot(),
				contentType: 'image/png',
			});

			//Click button "dalej"
			await startRegistrationPage.buttons.submit.click();
		});

		await test.step(`Select Course Type`, async (): Promise<void> => {
			//Is opened page course Type
			expect(await courseTypePage.elements.pageTitle.isEnabled()).toBe(true);

			//select course
			await courseTypePage.buttons.programming.click();
			await courseTypePage.buttons.onlineCourse.click();

			//screen
			await test.info().attach('TC-05 result Select Course Type', {
				body: await page.screenshot(),
				contentType: 'image/png',
			});

			await courseTypePage.buttons.yearlyCoursesInProgramming.click();
		});

		await test.step(`Select Course`, async (): Promise<void> => {
			//screen
			await test.info().attach('TC-05 result Select Course 1', {
				body: await page.screenshot(),
				contentType: 'image/png',
			});

			//Is opened page course Type
			expect(await coursePage.elements.promoContainer.isEnabled()).toBe(true);

			await (
				await coursePage.getChooseButtonAsync(
					'Pierwsze kroki w programowaniu (kurs z elementami AI) ONLINE'
				)
			).click();

			//screen
			await test.info().attach('TC-05 result Select Course 2', {
				body: await page.screenshot(),
				contentType: 'image/png',
			});

			await (
				await coursePage.getChooseCourseButtonAsync(
					'Mamy wolne miejsca'
				)
			).click();
		});

		await test.step(`Set Data For Course`, async (): Promise<void> => {
			//Is opened page course Type
			expect(await courseDataPage.elements.inputForm.isEnabled()).toBe(true);

			//set data
			await courseDataPage.elements.studentFirstname.fill("Maciej");
			await courseDataPage.elements.studentLastname.fill("Testowyab");
			await courseDataPage.elements.lastname.fill("Testowyab");
			await courseDataPage.elements.zipCode.fill("26-900");

			// check is registration button visible
			expect(await courseDataPage.buttons.registrationSubmit.isVisible()).toBe(true);

			//screen
			await test.info().attach('TC-05 result Set Data For Course 1', {
				body: await page.screenshot(),
				contentType: 'image/png',
			});

			//accept registration
			await courseDataPage.buttons.registrationSubmit.click();

			//check is opened summaries page
			await expect(courseDataPage.elements.summariesPage).toBeVisible({ timeout: 20000 });

			//screen
			await test.info().attach('TC-05 result Set Data For Course 2', {
				body: await page.screenshot(),
				contentType: 'image/png',
			});
		});
	});

	test.afterEach(async ({ page }) => {
		//close browser
		await page.close();
	});
});