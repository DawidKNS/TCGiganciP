import { BrowserContext, Locator, Page } from "@playwright/test";

interface Elements {
	readonly pageTitle: Locator;
}

interface Buttons {
}

interface Checkboxs {
}

export class CoursePage {
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
		};
		this.checkboxs = {
		};
	}

	/**
	 * Finds and returns the "wybierz" button within a .course-row div that contains an h2 with text "test".
	 *
	 * @returns {Promise<Locator>} Promise resolving to the Locator for the "wybierz" button.
	 */
	public async getChooseButtonAsync(): Promise<Locator> {
		const chooseButton = this.page.locator('.course-row').filter({
			has: this.page.locator('h2', { hasText: 'Pierwsze kroki w programowaniu (kurs z elementami AI) ONLINE' }),
		}).locator('button', { hasText: 'wybierz' });

		// Opcjonalnie: Czekanie na widoczność przycisku
		await chooseButton.waitFor({ state: 'visible' });

		return chooseButton;
	}
}