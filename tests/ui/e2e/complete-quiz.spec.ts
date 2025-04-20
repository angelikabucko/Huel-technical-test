import { expect, test } from '@playwright/test';
import { Homepage } from '../pages/home.page';
import { SurveyFacade } from '../facades/survey.facade';
import { products } from '../utils/product.types';

let homePage: Homepage;
let survey: SurveyFacade;

test.describe('Feature: Complete the quiz', async () => {
  test.beforeEach('Setup - Pages', async ({ page }) => {
    homePage = new Homepage(page);
    survey = new SurveyFacade(page);

    //Step 1: The user navigates to the UK Huel homepage
    await homePage.goTo();

    //Step 2: The user waits for the cookies pop-up and accepts cookies
    await homePage.handleCookieBanner();

    //Additional step: If the discount banner appears the user closes it
    await homePage.handleDiscountBanner();
  });

  test(`The user completes the quiz and recieves '${products.blackEdition.name}' product`, async () => {
    //Step 3: The user clicks the first visible 'Take the quiz' button
    await homePage.clickTakeQuizButton();

    //Step 4: The user clicks 'Get start' button to begin the quiz
    await survey.clickGetStartedButton();

    //Step 5: The user chooses 'Eat Healthier' option
    await survey.chooseEatHealthier();

    //Step 6: The user clicks 'Continue' button
    await survey.clickContinueButton();

    //Step 7: The user chooses 'Breakfast' option
    await survey.chooseBreakfast();

    //Step 8: The user clicks 'Continue' button
    await survey.clickContinueButton();

    //Step 9: The user chooses 'Sweet' flavour option
    await survey.chooseSweetFlavour();

    //Step 10: The user chooses 'Flexible portions' option
    await survey.chooseFlexiblePortions();

    //Step 11: The user clicks 'No thanks, show me the results' button
    await survey.clickResultsButton();

    //Step 12: The user can see at least one main recommended product - Black Edition powder
    expect(await survey.isVisibleResultsMainCard(), { message: 'The main results card is not visible' }).toBeTruthy();
    expect(await survey.isVisibleRecommendedProduct(products.blackEdition.name), { message: `The expected product: '${products.blackEdition.name}' is not visible` }).toBeTruthy();
  });

  test(`The user completes the quiz and recieves '${products.readyToDrink.name}' product`, async () => {
    //Step 3: The user clicks the first visible 'Take the quiz' button
    await homePage.clickTakeQuizButton();

    //Step 4: The user clicks 'Get start' button to begin the quiz
    await survey.clickGetStartedButton();

    //Step 5: The user chooses 'Save Money' option
    await survey.chooseSaveMoney();

    //Step 6: The user clicks 'Continue' button
    await survey.clickContinueButton();

    //Step 7: The user chooses 'Lunch' option
    await survey.chooseLunch();

    //Step 8: The user clicks 'Continue' button
    await survey.clickContinueButton();

    //Step 9: The user chooses 'Savoury' flavour option
    await survey.chooseSavouryFlavour();

    //Step 10: The user chooses 'Eating on the go' option
    await survey.chooseEatingOnTheGo();

    //Step 11: The user clicks 'No thanks, show me the results' button
    await survey.clickResultsButton();

    //Step 12: The user can see at least one main recommended product - Ready-to-drink
    //QUESTION: Should the user probably see 'Hot & Savoury Pots' based on their choices of occasion & flavour?
    expect(await survey.isVisibleResultsMainCard(), { message: 'The main results card is not visible' }).toBeTruthy();
    expect(await survey.isVisibleRecommendedProduct(products.readyToDrink.name), { message: `The expected product: '${products.readyToDrink.name}' is not visible` }).toBeTruthy();
  });

  test(`The user completes the quiz and recieves '${products.hotSavouryPouches.name}' product`, async () => {
    //Step 3: The user clicks the first visible 'Take the quiz' button
    await homePage.clickTakeQuizButton();

    //Step 4: The user clicks 'Get start' button to begin the quiz
    await survey.clickGetStartedButton();

    //Step 5: The user chooses 'Fitness goals' option
    await survey.chooseFitnessGoals();

    //Step 6: The user clicks 'Continue' button
    await survey.clickContinueButton();

    //Step 7: The user chooses 'Dinner' option
    await survey.chooseDinner();

    //Step 8: The user clicks 'Continue' button
    await survey.clickContinueButton();

    //Step 9: The user chooses 'Savoury' flavour option
    await survey.chooseSavouryFlavour();

    //Step 10: The user chooses 'Something refreshing' option
    await survey.chooseSomethingRefreshing();

    //Step 11: The user clicks 'No thanks, show me the results' button
    await survey.clickResultsButton();

    //Step 12: The user can see at least one main recommended product - Hot & Savoury Pouches
    expect(await survey.isVisibleResultsMainCard(), { message: 'The main results card is not visible' }).toBeTruthy();
    expect(await survey.isVisibleRecommendedProduct(products.hotSavouryPouches.name), { message: `The expected product: '${products.hotSavouryPouches.name}' is not visible` }).toBeTruthy();
  });

  test(`The user completes the quiz and recieves '${products.completeNutritionBar.name}' product`, async () => {
    //Step 3: The user clicks the first visible 'Take the quiz' button
    await homePage.clickTakeQuizButton();

    //Step 4: The user clicks 'Get start' button to begin the quiz
    await survey.clickGetStartedButton();

    //Step 5: The user chooses 'Lose weight' option
    await survey.chooseLoseWeight();

    //Step 6: The user clicks 'Continue' button
    await survey.clickContinueButton();

    //Step 7: The user chooses 'Snack' option
    await survey.chooseSnack();

    //Step 8: The user clicks 'Continue' button
    await survey.clickContinueButton();

    //Step 9: The user chooses 'I'm not picky' flavour option
    await survey.chooseImNotPickyFlavour();

    //Step 10: The user chooses 'Something to chew' option
    await survey.chooseSomethingToChew();

    //Step 11: The user clicks 'No thanks, show me the results' button
    await survey.clickResultsButton();

    //Step 12: The user can see at least one main recommended product - Complete Nutrition Bar
    expect(await survey.isVisibleResultsMainCard(), { message: 'The main results card is not visible' }).toBeTruthy();
    expect(await survey.isVisibleRecommendedProduct(products.completeNutritionBar.name), { message: `The expected product: '${products.completeNutritionBar.name}' is not visible` }).toBeTruthy();
  });

  test(`The user completes the quiz and recieves '${products.dailyAZVitamins.name}' product`, async () => {
    //Step 3: The user clicks the first visible 'Take the quiz' button
    await homePage.clickTakeQuizButton();

    //Step 4: The user clicks 'Get start' button to begin the quiz
    await survey.clickGetStartedButton();

    //Step 5: The user chooses 'Save time' option
    await survey.chooseSaveTime();

    //Step 6: The user clicks 'Continue' button
    await survey.clickContinueButton();

    //Step 7: The user chooses 'Supplement' option
    await survey.chooseSupplement();

    //Step 8: The user clicks 'Continue' button
    await survey.clickContinueButton();

    //Step 9: The user chooses 'I'm not picky' flavour option
    await survey.chooseImNotPickyFlavour();

    //Step 10: The user chooses 'I'm not picky' option
    await survey.chooseImNotPickyImportantFactor();

    //Step 11: The user clicks 'No thanks, show me the results' button
    await survey.clickResultsButton();

    //Step 12: The user can see at least one main recommended product - Daily A-Z Vitamins
    expect(await survey.isVisibleResultsMainCard(), { message: 'The main results card is not visible' }).toBeTruthy();
    //FIXME: Consider tha the user can possibly see the 'Daily Greens'
    expect(await survey.isVisibleRecommendedProduct(products.dailyAZVitamins.name), { message: `The expected product: '${products.dailyAZVitamins.name}' is not visible` }).toBeTruthy();
  });

  test(`The user completes the quiz with all possible answers for reason and occasion, and recieves '${products.blackEdition.name}' product as default`, async () => {
    //Step 3: The user clicks the first visible 'Take the quiz' button
    await homePage.clickTakeQuizButton();

    //Step 4: The user clicks 'Get start' button to begin the quiz
    await survey.clickGetStartedButton();

    //Step 5: The user chooses all possible options
    await survey.chooseAllReasons();

    //Step 6: The user clicks 'Continue' button
    await survey.clickContinueButton();

    //Step 7: The user chooses all possible options
    await survey.chooseAllOccasions();

    //Step 8: The user clicks 'Continue' button
    await survey.clickContinueButton();

    //Step 9: The user chooses 'I'm not picky' flavour option
    await survey.chooseImNotPickyFlavour();

    //Step 10: The user chooses 'I'm not picky' option
    await survey.chooseImNotPickyImportantFactor();

    //Step 11: The user clicks 'No thanks, show me the results' button
    await survey.clickResultsButton();

    //Step 12: The user can see at least one main recommended product - Black Edition powder
    expect(await survey.isVisibleResultsMainCard(), { message: 'The main results card is not visible' }).toBeTruthy();
    expect(await survey.isVisibleRecommendedProduct(products.blackEdition.name), { message: `The expected product: '${products.blackEdition.name}' is not visible` }).toBeTruthy();
  });
});
