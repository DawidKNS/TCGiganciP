import { BrowserContext, Locator, Page } from "@playwright/test";

interface Elements {
	readonly inputForm: Locator;
	readonly studentFirstname: Locator;
	readonly studentLastname: Locator;
	readonly lastname: Locator;
	readonly zipCode: Locator;
	readonly summariesPage: Locator;
}

interface Buttons {
	readonly registrationSubmit: Locator;
}

export class CourseDataPage {
	readonly page: Page;
	readonly context: BrowserContext;
	readonly buttons: Buttons;
	readonly elements: Elements;

	constructor(page: Page, context: BrowserContext) {
		this.page = page;
		this.context = context;
		this.elements = {
			inputForm: page.locator(".parent-data-form"),
			studentFirstname: page.locator('//*[@name="student_firstname"]'),
			studentLastname: page.locator('//*[@name="student_lastname"]'),
			lastname: page.locator('//*[@name="lastname"]'),
			zipCode: page.locator('//*[@name="zip_code"]'),
			summariesPage: page.locator('.registration-form-agreement-content'),
		};
		this.buttons = {
			registrationSubmit: page.locator('//*[@id="registration-step-submit"]'),
		};
	}
}