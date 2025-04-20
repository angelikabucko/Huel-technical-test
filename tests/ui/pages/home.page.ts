import { expect, type Locator, type Page } from '@playwright/test';

export class Homepage {
  private readonly url = 'https://uk.huel.com/';
  private readonly page: Page;

  //Cookies banner
  readonly cookiesBanner: Locator;
  readonly acceptCookiesButton: Locator;

  //Discoutn banner
  readonly discountBanner: Locator;
  readonly closeDiscountBannerButton: Locator;

  //Homepage buttons
  readonly takeQuizHomepageButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cookiesBanner = page.getByRole('dialog', { name: 'Privacy' });
    this.acceptCookiesButton = page.getByRole('button', { name: 'Accept' });

    this.discountBanner = page.locator('.MarketingSignUpModal_MarketingSignUpModal__wrapper__kcM_h').getByRole('heading', { name: 'Get £10 off your first order' });
    this.closeDiscountBannerButton = page.getByRole('button', { name: 'Close' });

    this.takeQuizHomepageButton = page.locator('#main').getByRole('link', { name: 'Take the quiz' }).first();
  }

  async goTo() {
    await this.page.goto(this.url);
  }

  async acceptCookies() {
    await this.acceptCookiesButton.click();
  }

  async isVisibleCookiesBanner() {
    await this.cookiesBanner.isVisible();
  }

  async clickCloseDiscountBanner() {
    await this.closeDiscountBannerButton.click();
  }

  async isVisibleDiscountBanner() {
    await this.discountBanner.isVisible();
  }

  async closeDiscountBanner() {
    await this.isVisibleDiscountBanner();
    await this.clickCloseDiscountBanner();
    await expect(this.discountBanner).not.toBeVisible();
  }

  async clickTakeQuizButton() {
    await this.takeQuizHomepageButton.click();
  }

  async handleDiscountBanner() {
    await this.page.addLocatorHandler(this.discountBanner, async () => {
      await this.clickCloseDiscountBanner();
      await expect(this.discountBanner).not.toBeVisible();
    });
  }

  async handleCookieBanner() {
    await this.page.addLocatorHandler(this.cookiesBanner, async () => {
      await this.acceptCookies();
      await expect(this.cookiesBanner).not.toBeVisible();
    });
  }
}
