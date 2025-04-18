import { type Locator, type Page } from '@playwright/test';

export class SignUpPage {
  readonly page: Page;

  readonly emailInput: Locator;
  readonly becomeHueliganButton: Locator;

  readonly resultsButton: Locator;

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
