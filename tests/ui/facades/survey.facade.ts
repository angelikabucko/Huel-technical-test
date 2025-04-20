import { Page } from '@playwright/test';
import { SurveyPage } from '../pages/survey.page';
import { SignUpPage } from '../pages/sign-up.page';
import { ResultsPage } from '../pages/results.page';

export class SurveyFacade {
  private readonly surveyPage: SurveyPage;
  private readonly signUpPage: SignUpPage;
  private readonly resultsPage: ResultsPage;

  constructor(page: Page) {
    this.surveyPage = new SurveyPage(page);
    this.signUpPage = new SignUpPage(page);
    this.resultsPage = new ResultsPage(page);
  }

  async clickGetStartedButton() {
    await this.surveyPage.clickGetStartedButton();
  }

  async clickContinueButton() {
    await this.surveyPage.clickContinueButton();
  }

  async chooseAllReasons() {
    await this.surveyPage.chooseAllReasons();
  }

  async chooseAllOccasions() {
    await this.surveyPage.chooseAllOccasions();
  }

  async chooseContradictingReasons() {
    await this.surveyPage.chooseContradictingReasons();
  }

  async chooseEatHealthier() {
    await this.surveyPage.chooseEatHealthier();
  }

  async chooseLoseWeight() {
    await this.surveyPage.chooseLoseWeight();
  }

  async chooseGainWeight() {
    await this.surveyPage.chooseGainWeight();
  }

  async chooseFitnessGoals() {
    await this.surveyPage.chooseFitnessGoals();
  }

  async chooseSaveTime() {
    await this.surveyPage.chooseSaveTime();
  }

  async chooseSaveMoney() {
    await this.surveyPage.chooseSaveMoney();
  }

  async chooseMoreSustainable() {
    await this.surveyPage.chooseMoreSustainable();
  }

  async chooseBreakfast() {
    await this.surveyPage.chooseBreakfast();
  }

  async chooseLunch() {
    await this.surveyPage.chooseLunch();
  }

  async chooseDinner() {
    await this.surveyPage.chooseDinner();
  }

  async chooseSnack() {
    await this.surveyPage.chooseSnack();
  }

  async chooseSupplement() {
    await this.surveyPage.chooseSupplement();
  }

  async chooseSweetFlavour() {
    await this.surveyPage.chooseSweetFlavour();
  }

  async chooseSavouryFlavour() {
    await this.surveyPage.chooseSavouryFlavour();
  }

  async chooseFlexiblePortions() {
    await this.surveyPage.chooseFlexiblePortions();
  }

  async chooseSomethingToChew() {
    await this.surveyPage.chooseSomethingToChew();
  }

  async chooseEatingOnTheGo() {
    await this.surveyPage.chooseEatingOnTheGo();
  }

  async chooseSomethingRefreshing() {
    await this.surveyPage.chooseSomethingRefreshing();
  }

  async chooseImNotPickyFlavour() {
    await this.surveyPage.chooseImNotPickyFlavour();
  }

  async chooseImNotPickyImportantFactor() {
    await this.surveyPage.chooseImNotPickyImportantFactor();
  }

  async clickResultsButton() {
    await this.signUpPage.clickResultsButton();
  }

  async isVisibleResultsMainCard() {
    return await this.resultsPage.isVisibleResultsMainCard();
  }

  async isVisibleRecommendedProduct(product: string) {
    return await this.resultsPage.isVisibleRecommendedProduct(product);
  }
}
