import { test as baseTest } from '@playwright/test';
import { RunPage } from "@pages/runPage";
import { StartRegistrationPage } from "@pages/registrationStartPage";
import { CourseTypePage } from "@pages/courseTypePage";
import { CoursePage } from "@pages/coursePage";
import { CourseDataPage } from "@pages/courseDataPage";

const test = baseTest.extend<{
	runPage: RunPage;
	startRegistrationPage: StartRegistrationPage;
	courseTypePage: CourseTypePage;
	coursePage: CoursePage;
	courseDataPage: CourseDataPage;

}>({
	runPage: async ({ page, context }, use) => {
		await use(new RunPage(page, context));
	},
	startRegistrationPage: async ({ page, context }, use) => {
		await use(new StartRegistrationPage(page, context));
	},
	courseTypePage: async ({ page, context }, use) => {
		await use(new CourseTypePage(page, context));
	},
	coursePage: async ({ page, context }, use) => {
		await use(new CoursePage(page, context));
	},
	courseDataPage: async ({ page, context }, use) => {
		await use(new CourseDataPage(page, context));
	}
})

export default test;