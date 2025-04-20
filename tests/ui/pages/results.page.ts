import { expect, type Locator, type Page } from '@playwright/test';

export class ResultsPage {
  private readonly page: Page;

  private readonly resultsHeading: Locator;
  private readonly mainCardContent: Locator;
  // eslint-disable-next-line no-unused-vars
  private readonly recommendedProduct: (product: string) => Locator;

  constructor(page: Page) {
    this.page = page;

    this.resultsHeading = page.getByRole('heading', { name: `You're almost there!` });
    this.mainCardContent = page.locator('.ResultsView_ResultsView__main-card__GK02F');
    this.recommendedProduct = (product: string) => this.page.getByRole('heading', { name: product, exact: true });
  }

  async isVisibleResultsMainCard() {
    try {
      await expect(this.mainCardContent).toBeVisible();
      return true;
    } catch {
      return false;
    }
  }

  async isVisibleRecommendedProduct(product: string) {
    try {
      await expect(this.recommendedProduct(product)).toBeVisible();
      return true;
    } catch {
      return false;
    }
  }
}
