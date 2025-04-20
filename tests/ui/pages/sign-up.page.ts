import { type Locator, type Page } from '@playwright/test';

export class SignUpPage {
  private readonly page: Page;

  private readonly emailInput: Locator;
  private readonly becomeHueliganButton: Locator;

  private readonly resultsButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.becomeHueliganButton = page.getByRole('button', { name: 'Become a Hueligan' });

    this.resultsButton = page.getByRole('button', { name: 'No thanks, show me the results' });
  }

  async clickResultsButton() {
    this.resultsButton.click();
  }
}
