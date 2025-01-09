import { BrowserContext, Locator, Page } from "@playwright/test";

interface Elements {
	readonly promoContainer: Locator;
}

export class CoursePage {
	readonly page: Page;
	readonly context: BrowserContext;
	readonly elements: Elements;

	constructor(page: Page, context: BrowserContext) {
		this.page = page;
		this.context = context;
		this.elements = {
			promoContainer: page.locator(".promo-container"),
		};
	}

	/**
	 * Finds and returns the "wybierz" button within a .course-row div that contains an h2 with text "test".
	 *
	 * @returns {Promise<Locator>} Promise resolving to the Locator for the "wybierz" button.
	 */
	public async getChooseButtonAsync(buttonText: string): Promise<Locator> {
		const chooseButton = this.page.locator('.course-row').filter({
			has: this.page.locator('h2', { hasText: buttonText }),
		}).locator('button', { hasText: 'wybierz' });

		// Opcjonalnie: Czekanie na widoczność przycisku
		await chooseButton.waitFor({ state: 'visible' });

		return chooseButton;
	}

	/**
	 * Finds and returns the "wybierz" button within a `.timetable__date` element 
	 * that contains a `<p>` element with the specified text.
	 *
	 * @param {string} buttonText - The text content to match within the `<p>` element.
	 * @returns {Promise<Locator>} A promise that resolves to the Locator for the "wybierz" button.
	 */
	public async getChooseCourseButtonAsync(buttonText: string): Promise<Locator> {
		const chooseButton = this.page.locator('.timetable__date').filter({
			has: this.page.locator('p', { hasText: buttonText }),
		}).locator('button', { hasText: 'wybierz' }).first();

		// Opcjonalnie: Czekanie na widoczność przycisku
		await chooseButton.waitFor({ state: 'visible' });

		return chooseButton;
	}
}