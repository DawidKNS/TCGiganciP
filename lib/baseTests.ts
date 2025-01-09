import { test as baseTest } from '@playwright/test';
import { RunPage } from "@pages/runPage";
import { StartRegistrationPage } from "@pages/registrationStartPage";


const test = baseTest.extend<{
	runPage: RunPage;
	startRegistrationPage: StartRegistrationPage;

}>({
	runPage: async ({ page, context }, use) => {
		await use(new RunPage(page, context));
	},
	startRegistrationPage: async ({ page, context }, use) => {
		await use(new StartRegistrationPage(page, context));
	}
})

export default test;