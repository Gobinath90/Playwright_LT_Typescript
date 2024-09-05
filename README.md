# Testing Playwright with TypeScript on LambdaTest or Local Machine

## Setup
* Clone the repository: 
```bash
   git clone https://github.com/Gobinath90/Playwright_LT_Typescript.git
```
* Run 
```bash
cd Playwright_LT_Typescript
```
* Install project dependencies:
```bash
npm install
```
* Install Playwright 
```bash
npx playwright install
```
```bash
npx playwright install-deps
```

## Running your tests
* To run all tests, use, run 
```bash
npm run test
```

## Running Your Allure Report

* Run the tests with the Allure reporter:
```bash
playwright test --reporter=allure-playwright
```
* Generate the Allure report:
```bash
allure generate allure-results --clean -o allure-report
```
* Open the Allure report:
```bash
allure open allure-report
```

