# Documentation example project

* Creator: Dawid Kondracki
* Version: 1.0.0
* Date of foundation: 08/01/2025

## Run tests multithreaded or 1 threaded

```
To run tests correctly with the right number of threads to command "npx playwright test"
add --workers {number of threads}.

Example:
 - npx playwright test --grep "example" --workers 2
 - npx playwright test --grep "example" --workers 1
 - npx playwright test example.test.ts --workers 2
 - npx playwright test --workers 2
```

## More information about running tests in documentation

```
https://playwright.dev/docs/running-tests#run-tests-in-ui-mode
```