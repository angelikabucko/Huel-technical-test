import { expect, type Locator, type Page } from '@playwright/test';

export class ResultsPage {
  readonly page: Page;

  readonly resultsHeading: Locator;
  readonly mainCardContent: Locator;

  constructor(page: Page) {
    this.page = page;

    this.resultsHeading = page.getByRole('heading', { name: `You're almost there!` });
    this.mainCardContent = page.locator('.ResultsView_ResultsView__main-card__GK02F'); //TODO: Explain weaknesses of targeting by class
  }

  async isVisibleResultsMainCard() {
    await expect(this.mainCardContent).toBeVisible();
  }
}
