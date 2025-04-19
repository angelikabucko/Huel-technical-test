import { expect, type Locator, type Page } from '@playwright/test';

export class ResultsPage {
  readonly page: Page;

  readonly resultsHeading: Locator;
  readonly mainCardContent: Locator;
  // eslint-disable-next-line no-unused-vars
  readonly recommendedProduct: (product: string) => Locator;

  constructor(page: Page) {
    this.page = page;

    this.resultsHeading = page.getByRole('heading', { name: `You're almost there!` });
    this.mainCardContent = page.locator('.ResultsView_ResultsView__main-card__GK02F'); //TODO: Explain weaknesses of targeting by class
    this.recommendedProduct = (product: string) => this.page.getByRole('heading', { name: product, exact: true }); //TODO: Change product name
  }

  async isVisibleResultsMainCard() {
    await expect(this.mainCardContent).toBeVisible();
  }

  async isVisibleRecommendedProduct(product: string) {
    await expect(this.recommendedProduct(product), { message: 'The expected product is not visible' }).toBeVisible();
  }
}
