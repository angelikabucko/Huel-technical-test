# Huel-technical-test

Technical assessment for a QA Engineer at Huel

# Overview

This repository contains an automated test framework built using [Playwright](https://playwright.dev/) and [TypeScript]
(https://www.typescriptlang.org/).

# Brief explanation of my approach

I've created a `test.describe` that contains one End-to-End feature: 'Complete the quiz'. This `test.describe` has 6 tests that check various user flows that go through completing the quiz and viewing the results of the quiz.

The user flow consists of:

- Navigating to the main homepage
- Clicking the 'Take the quiz' button available on homepage
- Starting the quiz
- Completing the quiz
- Navigating to the results
- Seeing the suggested products based on the quiz inputs

Each test included different choice inputs (with some repetition when it comes to flavour) to showcase different possible combinations and cover a variety of returned products.

I've assumed that the 'Black Edition' powder is a default product, however, that can be changed if necessary.

## Additional details

- There are two projects set up, so that tests can run in Chromium and Firefox.
- Tests can be run in parallel due to the `test.beforeEach` that does a setup of required pages and handles navigation to the Huel homepage.

# To start with the project:

This project requires node.js installed.

1. Clone the repo
2. Run `npm install`
3. Run `npx playwright install --with-deps`
4. Run `npx playwright test`
