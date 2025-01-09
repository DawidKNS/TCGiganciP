import { BrowserContext, Locator, Page } from "@playwright/test";

interface Elements {
	readonly parentName: Locator;
	readonly email: Locator;
	readonly phoneNumber: Locator;
	readonly birthYear: Locator;
	readonly formError: Locator;
	readonly errorWindow: Locator;
	readonly pageTitle: Locator;
}

interface Buttons {
	readonly submit: Locator;
}

interface Checkboxs {
	readonly advertisementAgreed: Locator;
	readonly statuteAgreed: Locator;
}

export class StartRegistrationPage {
	readonly page: Page;
	readonly context: BrowserContext;
	readonly buttons: Buttons;
	readonly elements: Elements;
	readonly checkboxs: Checkboxs;

	constructor(page: Page, context: BrowserContext) {
		this.page = page;
		this.context = context;
		this.elements = {
			parentName: page.locator('//*[@id="submit-payment"]//*[@name="parentName"]'),
			email: page.locator('//*[@id="submit-payment"]//*[@name="email"]'),
			phoneNumber: page.locator('//*[@id="submit-payment"]//*[@name="phoneNumber"]'),
			birthYear: page.locator('//*[@id="submit-payment"]//*[@name="birthYear"]'),
			formError: page.locator('//*[@class="formValidation"]//*[@class="formError"]'),
			errorWindow: page.locator('//*[@id="system-message-container"]'),
			pageTitle: page.locator(".registration__step-title .h3"),
		};
		this.buttons = {
			submit: page.locator('//*[@id="agreement-step-submit"]'),
		};
		this.checkboxs = {
			advertisementAgreed: page.locator('//*[@for="statuteAgreed"]'),
			statuteAgreed: page.locator('//*[@for="advertisementAgreed"]'),
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