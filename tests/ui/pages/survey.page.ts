import { expect, type Locator, type Page } from '@playwright/test';

export class SurveyPage {
  private readonly page: Page;

  //Buttons
  private readonly getStartedButton: Locator;
  private readonly continueButton: Locator;

  //Reason
  private readonly eatHealthierChoice: Locator;
  private readonly loseWeightChoice: Locator;
  private readonly gainWeightChoice: Locator;
  private readonly fitnessGoalsChoice: Locator;
  private readonly saveTimeChoice: Locator;
  private readonly saveMoneyChoice: Locator;
  private readonly moreSustainableChoice: Locator;

  //Occasion
  private readonly breakfastChoice: Locator;
  private readonly lunchChoice: Locator;
  private readonly dinnerChoice: Locator;
  private readonly snackChoice: Locator;
  private readonly supplementChoice: Locator;

  //Flavour
  private readonly flavourPageHeading: Locator;
  private readonly sweetFlavourChoice: Locator;
  private readonly savouryFlavourChoice: Locator;

  //Important factor
  private readonly importantFactorPageHeading: Locator;
  private readonly flexiblePortionsChoice: Locator;
  private readonly somethingToChewChoice: Locator;
  private readonly eatingOnTheGoChoice: Locator;
  private readonly somethingRefreshing: Locator;

  //Reusable choice
  private readonly notPickyChoiceImportantFactor: Locator;
  private readonly notPickyChoiceFlavour: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getStartedButton = page.getByRole('button', { name: 'Get started' });
    this.continueButton = page.getByRole('button', { name: 'Continue' });

    this.eatHealthierChoice = page.getByRole('checkbox', { name: 'Eat Healthier' });
    this.loseWeightChoice = page.getByRole('checkbox', { name: 'Lose weight' });
    this.gainWeightChoice = page.getByRole('checkbox', { name: 'Gain weight' });
    this.fitnessGoalsChoice = page.getByRole('checkbox', { name: 'Fitness goals' });
    this.saveTimeChoice = page.getByRole('checkbox', { name: 'Save time' });
    this.saveMoneyChoice = page.getByRole('checkbox', { name: 'Save money' });
    this.moreSustainableChoice = page.getByRole('checkbox', { name: 'Be more sustainable' });

    this.breakfastChoice = page.getByRole('checkbox', { name: 'Breakfast' });
    this.lunchChoice = page.getByRole('checkbox', { name: 'Lunch' });
    this.dinnerChoice = page.getByRole('checkbox', { name: 'Dinner' });
    this.snackChoice = page.getByRole('checkbox', { name: 'Snack' });
    this.supplementChoice = page.getByRole('checkbox', { name: 'Supplement' });

    this.flavourPageHeading = page.getByRole('heading', { name: 'What are you in the mood for?' });
    this.sweetFlavourChoice = page.getByRole('radio', { name: 'Sweet' });
    this.savouryFlavourChoice = page.getByRole('radio', { name: 'Savoury' });

    this.importantFactorPageHeading = page.getByRole('heading', { name: 'What matters most to you?' });
    this.flexiblePortionsChoice = page.getByRole('radio', { name: 'Flexible portions' });
    this.somethingToChewChoice = page.getByRole('radio', { name: 'Something to chew' });
    this.eatingOnTheGoChoice = page.getByRole('radio', { name: 'Eating on the go' });
    this.somethingRefreshing = page.getByRole('radio', { name: 'Something refreshing' });

    this.notPickyChoiceImportantFactor = page.getByRole('radio', { name: `I'm not picky` });
    this.notPickyChoiceFlavour = page.getByRole('radio', { name: `I’m not picky` });
  }

  async clickGetStartedButton() {
    await this.getStartedButton.click();
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async chooseEatHealthier() {
    await this.eatHealthierChoice.check();
  }

  async chooseLoseWeight() {
    await this.loseWeightChoice.check();
  }

  async chooseGainWeight() {
    await this.gainWeightChoice.check();
  }

  async chooseFitnessGoals() {
    await this.fitnessGoalsChoice.check();
  }

  async chooseSaveTime() {
    await this.saveTimeChoice.check();
  }

  async chooseSaveMoney() {
    await this.saveMoneyChoice.check();
  }

  async chooseMoreSustainable() {
    await this.moreSustainableChoice.check();
  }

  async chooseBreakfast() {
    await this.breakfastChoice.check();
  }

  async chooseLunch() {
    await this.lunchChoice.check();
  }

  async chooseDinner() {
    await this.dinnerChoice.check();
  }

  async chooseSnack() {
    await this.snackChoice.check();
  }

  async chooseSupplement() {
    await this.supplementChoice.check();
  }

  async chooseSweetFlavour() {
    await this.sweetFlavourChoice.check();
  }

  async chooseSavouryFlavour() {
    await this.savouryFlavourChoice.check();
  }

  async chooseFlexiblePortions() {
    await this.flexiblePortionsChoice.check();
  }

  async chooseSomethingToChew() {
    await this.somethingToChewChoice.check();
  }

  async chooseEatingOnTheGo() {
    await this.eatingOnTheGoChoice.check();
  }

  async chooseSomethingRefreshing() {
    await this.somethingRefreshing.check();
  }

  async chooseImNotPickyFlavour() {
    await expect(this.flavourPageHeading).toBeVisible();
    await this.notPickyChoiceFlavour.check();
  }

  async chooseImNotPickyImportantFactor() {
    await expect(this.importantFactorPageHeading).toBeVisible();
    await this.notPickyChoiceImportantFactor.check();
  }

  async chooseAllReasons() {
    await this.chooseEatHealthier();
    await this.chooseLoseWeight();
    await this.chooseGainWeight();
    await this.chooseFitnessGoals();
    await this.chooseSaveTime();
    await this.chooseSaveMoney();
    await this.chooseMoreSustainable();
  }

  async chooseAllOccasions() {
    await this.chooseBreakfast();
    await this.chooseLunch();
    await this.chooseDinner();
    await this.chooseSnack();
    await this.chooseSupplement();
  }
}
