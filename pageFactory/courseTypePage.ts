import { BrowserContext, Locator, Page } from "@playwright/test";

interface Elements {
	readonly pageTitle: Locator;
}

interface Buttons {
	programming: any;
	onlineCourse: any;
	yearlyCoursesInProgramming: any;
}

interface Checkboxs {
}

export class CourseTypePage {
	readonly page: Page;
	readonly context: BrowserContext;
	readonly buttons: Buttons;
	readonly elements: Elements;
	readonly checkboxs: Checkboxs;

	constructor(page: Page, context: BrowserContext) {
		this.page = page;
		this.context = context;
		this.elements = {
			pageTitle: page.locator(".registration__step-title .h4"),
		};
		this.buttons = {
			programming: page.locator('button', { hasText: 'Submit' }),
			onlineCourse: page.locator('//*[@value="onlineKinds"]'),
			yearlyCoursesInProgramming: page.locator(".registration__step-title").locator("'button', { hasText: 'Roczne kursy z programowania' }"),
		};
		this.checkboxs = {
		};
	}

	/**
	 * Returns the number of elements matching the provided locator.
	 *
	 * @param {Locator} locator - The locator object used to identify elements on the page.
	 * @returns {Promise<number>} The number of elements found.
	 */
	public async countElements(locator: Locator): Promise<number> {
		const numberOfElements = await locator.count();
		return numberOfElements;
	}
}