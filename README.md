# TalonOneTask

```
Installation & Execution:
1. Clone the repository to your local machine:

    Command: git clone git@github.com:AttiaMinAllah/IMDB-CypressTests.git

2. Navigate to the project directory

3. Install required dependencies
    Command: npm install

4: Open Cypress
    Command : npx cypress open
    This will launch the Cypress Test Runner in a new browser window.
    - Select the test file you want to run from the list of test files in the Test Runner.
    - Click on the test file to run it, or click on the "Run all specs" button to run all 
    the test files.
    - The Test Runner will display the progress and results of the test run in real-time.

```

```
Testing Approach:

- I chose to test the major functionality of the search  bar on the IMDb homepage. This 
includes verifying that the search bar is visible and functional, and that it returns 
accurate search results for various inputs. By automating these scenarios, we can ensure 
that users can easily search for their desired content, and the results are accurate and 
relevant.

File Structure: 
- I opted Page Object Modal to automate the test cases because using this we can create 
robust and reliable tests that are easy to update and maintain over time. 
File Structure is as following:
    Cypress/Common/selectors: Contains the selectors used in the project

    Cypress/e2e/Pages/SearchIMDb.js: Contains the Page Objects 

    Cypress/e2e/tests/searchIMDb.cy.js: Contains the tests for search bar

    Cypress/e2e/fixtures/entertainment.json: Contains the fixture data for the tests 

    cypress.config.js: 

- In the future, we can expand on these tests by adding more test scenarios and edge cases. 
For example, By narrowing down the search for all the categories, search via More Results 
and Advanced Search. 
We can also test the performance of the search bar by measuring the time it takes to load 
the search results page and the accuracy of the results. Additionally, we can test the 
search bar on different browsers and devices to ensure that it works well across 
different platforms.

- If I knew the analytics of the data for the search queries I would have adopted the areas 
to focus as per those analytics, as what search queries to make the most, as TV shows or 
movies or advanced search, Also I could have
tested the pagination to ensure the smooth user experience across the pages. Moreover,It is 
also important to make sure that website is made SQL injection proof. 

```

