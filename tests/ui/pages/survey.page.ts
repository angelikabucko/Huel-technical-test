import { type Locator, type Page } from '@playwright/test';

export class SurveyPage {
  readonly page: Page;

  //Buttons
  readonly getStartedButton: Locator;
  readonly continueButton: Locator;

  //Reason
  readonly eatHealthierChoice: Locator;
  readonly loseWeightChoice: Locator;
  readonly gainWeightChoice: Locator;
  readonly fitnessGoalsChoice: Locator;
  readonly saveTimeChoice: Locator;
  readonly saveMoneyChoice: Locator;
  readonly moreSustainableChoice: Locator;

  //Occasion
  readonly breakfastChoice: Locator;
  readonly lunchChoice: Locator;
  readonly dinnerChoice: Locator;
  readonly snackChoice: Locator;
  readonly supplementChoice: Locator;

  //Flavour
  readonly sweetFlavourChoice: Locator;
  readonly savouryFlavourChoice: Locator;

  //Important factor
  readonly flexiblePortionsChoice: Locator;
  readonly somethingToChewChoice: Locator;
  readonly eatingOnTheGoChoice: Locator;
  readonly somethingRefreshing: Locator;

  //Reusable choice
  readonly notPickyChoice: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getStartedButton = page.getByRole('button', { name: 'Get started' });
    this.continueButton = page.getByRole('button', { name: 'Continue' });

    this.eatHealthierChoice = page.getByRole('checkbox', { name: 'Eat Healthier' }); //TODO: Explain why I decided to use this one and then another option would be getByText('Eat healthier') which would be more relvant to what user actually sees
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

    this.sweetFlavourChoice = page.getByRole('radio', { name: 'Sweet' });
    this.savouryFlavourChoice = page.getByRole('radio', { name: 'Savoury' });

    this.flexiblePortionsChoice = page.getByRole('radio', { name: 'Flexible portions' });
    this.somethingToChewChoice = page.getByRole('radio', { name: 'Something to chew' });
    this.eatingOnTheGoChoice = page.getByRole('radio', { name: 'Eating on the go' });
    this.somethingRefreshing = page.getByRole('radio', { name: 'Something refreshing' });

    this.notPickyChoice = page.getByRole('radio', { name: `I'm not picky` });
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

  async chooseImNotPicky() {
    await this.notPickyChoice.check();
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

  async chooseContradictingReasons() {
    await this.chooseLoseWeight();
    await this.chooseGainWeight();
  }
}
